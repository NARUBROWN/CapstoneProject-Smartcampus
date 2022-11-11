<template>
  <div v-if="dataHide">
    <div class="card" v-for="component in contents" v-bind:key="component">
      <h1>{{ component.title }}</h1>
      <div>
        <h3>{{ component.view }}</h3>
        <h3>{{ component.date }}</h3>
        <h3>{{ component.user }}</h3>
      </div>
      <dl>
        <!-- component.fileLink 가 https://jeiu.ac.kr/undefined 일 경우 태그를 표시하지 않음 -->
        <div class="listDeco" v-if="component.fileLink !== 'https://jeiu.ac.krundefined'">
          <dt><a v-bind:href="component.fileLink">첨부파일 : {{ component.fileName }}</a></dt>
        </div>
      </dl>
      <br>
      <p>
        {{ component.contents }}
      </p>
      <div class="imgBox">
        <!-- component.img 가 https://jeiu.ac.kr/undefined 일 경우 태그를 표시하지 않음 -->
        <img
            v-if="component.img !== 'https://jeiu.ac.krundefined' && component.img.slice(-1) !== '/'"
            v-bind:src="component.img" alt="본문 첨부 사진">
      </div>
    </div>
  </div>

  <!-- 댓글 영역 -->
  <div v-if="comment_state">
    <div v-if="comment !== []">
      <div class="card" v-for="comment in comment" v-bind:key="comment">
        <div class="commentShow">
          <h3>{{ comment.user }}</h3>  
          <a v-if="comment.stu_id === this.$store.getters.getUserStore.id.toString() || this.$store.getters.getUserStore.stu_rank === `관리자`"
            @click="deleteComment(comment.id)"><img src="../../assets/community/clear.svg"></a>
        </div>
          <p class="commentComment">
            {{ comment.content }}
          </p>
      </div>
    </div>

    <!-- 댓글 작성 영역 -->
    <div class="card" v-if="this.$store.getters.getUserStore.login_state">
      <form @submit.prevent="sendPost">
        <div class="row">
          <textarea
              v-model="new_comment.content"
              name="title"
              placeholder="댓글을 입력해주세요."
          ></textarea>
          <!-- <label class="header">댓글</label> -->
          <button class="commentBtn" type="submit">작성</button>
        </div>
      </form>
    </div>
  </div>

  <div class="loadingCard" v-if="loading">
    <h1>서버에서 데이터를 불러오고 있습니다.</h1>
  </div>
  <div class="underButtonsArea">
    <div class="underButtons">
      <button @click="back()">뒤로가기</button>
      <button
          v-if="this.$store.state.user_data.stu_rank === `관리자` || this.$store.state.user_data.id === this.contents[0][`stu_id`]"
          @click="editContents">수정
      </button>
      <button
          v-if="this.$store.state.user_data.stu_rank === `관리자` || this.$store.state.user_data.id === this.contents[0][`stu_id`]"
          @click="contentsDelete()">삭제
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ReadContents",
  data() {
    return {
      // axios 를 통해 res.data 받은 객체를 대입 받을 곳
      contents: [{
        title: "",
        view: 0,
        date: "",
        fileName: "",
        contents: "",
        img: "",
        stu_id: 0,
        user: ""
      }],
      comment: [{
        id: null,
        content: null,
        stu_id: null,
        user: null
      }],
      new_comment: {
        id: null,
        content: null,
        stu_id: null,
        user: null
      },
      loading: false,
      dataHide: false,
      userPermission: false,
      comment_state: null
    };
  },
  created() {
    this.req_data();
  },
  methods: {
    back() {
      if (this.$route.query.type === "community") {
        this.$router.push(`/campus-community?table=${this.$route.query.table}`);
      } else {
        this.$router.go(-1);
      }

    },
    async req_data() {
      this.loading = true;

      if (this.$route.query.type === "community") {
        try {
          // 게시글 읽어오기
          let contents = await axios.get(process.env.VUE_APP_IP + "/community/read/" + this.$route.query.table + "/" + this.$route.query.number);
          this.contents = contents.data;
          this.contents[0].img = process.env.VUE_APP_IP + '/community_img/' + contents.data[0].img;
          // 게시글 댓글 읽어오기
          let comment = await axios.get(process.env.VUE_APP_IP + "/community/read-comment/" + this.$route.query.table + "/" + this.$route.query.number);
          this.comment = comment.data;

          // 댓글 보이게 하기
          this.comment_state = true
          this.dataHide = true;
          this.serverState = true;
          this.errorComponent = false;
        } catch {
          //
        }
      } else if (this.$route.query.type === "notice") {
        try {
          let contents = await axios.get(process.env.VUE_APP_IP + "/crawling/contents/" + this.$route.query.number)
          this.contents = contents.data;
          this.dataHide = true;
          this.serverState = true;
          this.errorComponent = false;
        } catch {
          //
        }
      }
      // 로딩화면 끄기
      this.loading = false
    },
    contentsDelete() {
      try {
        axios.get(process.env.VUE_APP_IP + "/community/delete/" + this.$route.query.table + "/" + this.$route.query.number)
        this.$router.go(-1);
      } catch {
        //
      }
    },
    editContents() {
      this.$router.push(`/edit-contents?table=${this.$route.query.table}&number=${this.$route.query.number}`);
    },
    async deleteComment(e) {
      try {
        let comment = await axios.get(process.env.VUE_APP_IP + "/community/delete-comment/" + this.$route.query.table + "/" + e + "/" + this.$route.query.number);
        this.comment = comment.data;
      } catch {
        //
      }
    },
    sendPost() {
      axios({
        method: "post", // 요청 방식
        url: process.env.VUE_APP_IP + "/community/write-comment", // 요청 주소
        data: {
          table: this.$route.query.table,
          content: this.new_comment.content,
          stu_id: this.$store.getters.getUserStore.id,
          user: this.$store.getters.getUserStore.name,
          page_id: this.$route.query.number,
        }
      }).then((res) => {
        this.comment = res.data;
        // 입력창 초기화
        this.new_comment = {
          id: null,
          content: null,
          stu_id: null,
          user: null
        }
      })
          .catch(function (err) {
            console.log(err); // 에러 처리 내용
          });
    }
  }
}
</script>

<style scoped>
.card {
  margin: 10px auto;
  border-radius: 10px;
  width: 95.56%;
  padding: 10px 0 10px 0;
  background-color: var(--card);
  color: var(--text-color);
}

.card > h1 {
  margin: 10px 0 0 0;
  padding: 0 20px 0 20px;
  font-size: 16pt;
  font-weight: bold;
}

.card > div > h3 {
  margin: 5px 0 5px 0;
  padding: 0 20px 0 20px;
  font-size: 9pt;
}

.card > p {
  margin: 0 auto;
  width: 90%;
  white-space: pre-line;
}

.articleType > a {
  width: 100%;
  height: 100%;
  font-size: 8pt;
  color: var(--blue-card-text);
  font-weight: bold;
}

.card > dl {
  margin: 0 auto;
  width: 90%;
  text-decoration-color: #454545;
  font-weight: normal;
}

.card > dl > .listDeco {
  margin: 5px;
  padding: 3% 0 3% 0;
  border-radius: 10px;
  background: var(--notice-list-background);
}

.card > dl > .listDeco > dt {
  width: 80%;
  margin: 2px 0 0 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 10pt;
  padding: 0 0 0 15px;
}

.card > dl > .listDeco > dd {
  margin: 1px 0 0 40px;
  font-size: 9pt;
}

.imgBox {
  margin: 0 auto;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
}

.imgBox > img {
  width: 90%;
}

.underButtonsArea {
  margin: 0 auto;
  text-align: center;
  width: 100%;
}

.underButtons > button {
  margin: 10px 5px 0 5px;
  width: 27%;
  height: 30px;
  border: 0;
  outline: 0;
  border-radius: 8px;
  color: var(--blue-card-text);
  background: var(--blue-card);
  font-weight: bolder;
  font-size: 13px;
  font-family: inherit;
}

.loadingCard {
  margin: 10px auto;
  border-radius: 10px;
  width: 95.56%;
  padding: 10px 0 10px 0;
  background-color: #FF9500;
}

.loadingCard > h1 {
  margin: 10px 0 15px 0;
  padding: 0 0 0 20px;
  font-size: 10pt;
  font-weight: normal;
  color: #ffffff;
}

.card > form > .row{
  margin-top: 4px;
  position: relative;
}

/* .card > form > .row > .header{
  font-size: 11pt;
  font-weight: bold;
  color: #007AFF;
  position: absolute;
  left: 0;
  top: 0;
  margin-left: 37px;
} */

.card > form > .row > textarea{
  width: 65%;
  font: inherit;
  padding: 12px;
  font-weight: normal;
  outline: none;
  border: 0;
  margin-left: 15px;
  margin-top: 0;
  font-size: 11pt;
  background: var(--card);
  border-radius: 10px;
  height: 18px;
  border: 0.1em solid #D4D4D4;
  resize: none;
}

.card > form > .row > textarea::placeholder{
  color: #A4A4A4;
}

.commentBtnArea {
  text-align: right;
  width: 80%;
}

.commentBtn{
  position: absolute;
  margin-left: 10px;
  width: 17%;
  height: 45px;
  border: 0;
  outline: 0;
  border-radius: 10px;
  color: var(--blue-card-text);
  background: var(--blue-card);
  font-weight: bolder;
  font-size: 13px;
  font-family: inherit;
}

.card > .commentShow {
  display: flex;
}

.card > .commentShow a {
  margin-left: 71.3%;
  filter: invert(25%) sepia(100%) saturate(1%) hue-rotate(181deg) brightness(104%) contrast(102%);
}

.card > .commentShow a img {
  width: 20px;
}

.card > .commentShow a:hover {
  border-bottom: 1px solid #454545;
}

.card > .commentComment {
  margin-top: 10px;
}
</style>