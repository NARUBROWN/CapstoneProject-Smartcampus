<template>
  <div class="card">
    <div v-for="atr in link" v-bind:key="atr">
      <img v-bind:src="atr.bg_link" alt="배너">
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MainBanner",
  data() {
    return {
      link: [{
        bg_link: ""
      }]
    }
  },
  created() {
    axios.get(process.env.VUE_APP_IP + '/banner/')
        .then(res => {
          // 요청 성공 코드 출력
          console.log(`status code: ${res.status}`);
          // 요청 성공시 /read-contents 페이지로 Parameter 로 게시판 code 와 함께 이동시킴
          this.link = res;
        })
        .catch(err => {
          // 오류 코드 출력
          console.log(err);
        })
  }
}
</script>

<style scoped>
.card {
  margin: 10px auto;
  border-radius: 10px;
  width: 95.56%;
  height: 100px;
  padding: 10px 0 10px 0;
  background-color: var(--card);
  color: var(--text-color);
  overflow: hidden;
}

img {
  margin: -70px 0 0 0;
  width: 100%;
  background: red;
}
</style>