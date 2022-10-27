<template>
  <div class="card">
    <div class="wrap">
      <form @submit.prevent="sendPost">
        <div class="row">
          <input type="text"
                v-model="contents.title"
                name="title"
                placeholder="제목을 입력해주세요."
          />
          <label class="header">제목</label>
          <div class="highLight"></div>
        </div>
        <div class="row">
          <textarea
              v-model="contents.contents"
              name="title"
              placeholder="내용을 입력해주세요."
          ></textarea>
          <label class="header">내용</label>
        </div>
        <div class="img_change">
          <a @click="$router.push(`/edit-contents-img?number=${this.$route.query.number}`)">사진 수정하기</a>
        </div>
      </form>
    </div>
  </div>
  <div class="underButtonsArea">
    <div class="underButtons">
      <button @click="back()">뒤로가기</button>
      <button type="submit" @click="sendPost">제출</button>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "EditContents",
  data() {
    return {
      // axios 를 통해 res.data 받은 객체를 대입 받을 곳
      contents: {
        title: null,
        date: null,
        view: null,
        fileName: null,
        fileLink: null,
        contents: null,
        img: null,
        user: null,
        stu_id: null
      }
    };
  },
  created() {
    // 1. 게시글 불러오기
    axios({
      method: "get", // 요청 방식
      url: process.env.VUE_APP_IP + "/community/read/" + this.$route.query.table + "/" + this.$route.query.number, // 요청 주소
    }).then((res) => {
      this.contents = res.data[0];
    })
        .catch(function (err) {
          console.log(err); // 에러 처리 내용
        });

  },
  methods: {
    sendPost() {
      if (this.contents.title === null || this.contents.title === "") {
        this.$toast.warning('글 제목을 입력해주세요.', {
          position: 'bottom'
        });
      } else if (this.contents.content === null || this.contents.content === "") {
        this.$toast.warning('글 내용을 입력해주세요.', {
          position: 'bottom'
        });

      } else {
        axios({
          method: "post", // 요청 방식
          url: process.env.VUE_APP_IP + "/community/update-content", // 요청 주소
          data: {
            table: this.$route.query.table,
            id: this.$route.query.number,
            title: this.contents.title,
            content: this.contents.contents
          }
        }).then((res) => {
          console.log(res);
          this.$router.push(`/read-contents?type=community&table=${this.$store.getters.getUserStore.table}&number=${this.$route.query.number}`);
        })
            .catch(function (err) {
              console.log(err); // 에러 처리 내용
            });
      }
    },
    back() {
      this.$router.push(`/read-contents?type=community&table=${this.$store.getters.getUserStore.table}&number=${this.$route.query.number}`);
    }
  }
}
</script>

<style scoped>
.card > .wrap {
  margin: 10px auto;
  border-radius: 10px;
  width: 95.56%;
  height: 100%;
  padding: 5px 0 10px 0;
  background-color: var(--card);
}

.card > .wrap > form > .row{
  margin: 10px 0;
  position: relative;
}

.card > .wrap > form > .row > .header{
  font-size: 11pt;
  font-weight: bold;
  color: #007AFF;
  position: absolute;
  left: 0;
  top: 0;
  margin-left: 37px;
}

.card > .wrap > form > .row > .highLight{
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 0.1em;
  background: #D4D4D4;
  width: 80%;
  margin: 0 auto;
}

.card > .wrap > form > .row > input,
.card > .wrap > form > .row > textarea{
  width: 80%;
  font: inherit;
  padding: 12px 0;
  font-weight: normal;
  outline: none;
  border: 0;
  margin-left: 37px;
  margin-top: 15px;
  font-size: 11pt;
  background: var(--card);
  border-radius: 10px;
}

.card > .wrap > form > .row > textarea{
  width: 73%;
  height: 100px;
  border: 0.1em solid #D4D4D4;
  margin-top: 30px;
  padding-left: 12px;
  padding-right: 12px;
}

.card > .wrap > form > .row > input::placeholder,
.card > .wrap > form > .row > textarea::placeholder{
  color: #A4A4A4;
}

.img_change {
  background: var(--blue-card);
  color: var(--blue-card-text);
  width: 81%;
  line-height: 35px;
  border-radius: 8px;
  text-align: center;
  font-size: 11pt;
  font-weight: bold;
  margin: 20px 0 0 37px;
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

</style>