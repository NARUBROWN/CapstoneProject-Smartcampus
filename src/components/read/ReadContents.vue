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
      loading: false,
      dataHide: false,
      userPermission: false
    };
  },
  created() {
    this.req_data();
  },
  methods: {
    back() {
      this.$router.push(`/campus-community?table=${this.$route.query.table}`)
    },
    async req_data() {
      this.loading = true;

      if (this.$route.query.type === "community") {
        try {
          let contents = await axios.get(process.env.VUE_APP_IP + "/community/read/" + this.$route.query.table + "/" + this.$route.query.number)
          this.contents = contents.data;
          this.contents[0].img = process.env.VUE_APP_IP + '/community_img/' + contents.data[0].img
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
  padding: 0 0 0 20px;
  font-size: 16pt;
  font-weight: bold;
}

.card > div > h3 {
  margin: 5px 0 5px 0;
  padding: 0 0 0 20px;
  font-size: 9pt;
}

.card > p {
  margin: 0 auto;
  width: 90%;
  padding: 0 0 3% 0;
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

</style>