<template>
  <router-link to="/student-information">
    <div class="loginInfo" v-for="user in user_data" v-bind:key="user">
      <h1>{{ user.author }}</h1>
      <h2>학생</h2>
      <hr>
      <p>IT학부 AI컴퓨터정보과</p>
      <img src="@/assets/main/student/stuIcon.png" alt="학생증 아이콘">
      <h3>학생카드</h3>
    </div>
  </router-link>
</template>

<script>
import axios from "axios";

export default {
  name: "StudentLoginInfo",
  data() {
    return {
      user_data: []
    };
  },
  created() {
    this.req_data();
  },
  methods: {
    // 백엔드에 데이터 요청하는 메소드
    async req_data() {
      try {
        // 백엔드에 요청된 데이터를 가져오기
        let user = await axios.get(process.env.VUE_APP_IP + "/proflie");
        console.log('user 데이터를 요청하였습니다. ');
        this.user_data = user.data;
        console.log(this.user_data)
      } catch (e) {
        console.log("새로운 데이터를 불러오지 못했습니다. " + e);
      }
    }
  }
}
</script>

<style scoped>

.loginInfo {
  margin: 10px auto;
  border-radius: 10px;
  width: 95.56%;
  padding: 2px 0 2px 0;
  background-color: var(--blue-card);
}

.loginInfo > hr {
  margin: 0 0 0 25px;
  width: 50%;
  border: var(--blue-card-hr) solid 0.05rem;
}

.loginInfo > h1 {
  float: left;
  margin: 20px 0 0 0;
  padding: 0 5px 0 25px;
  font-size: 15pt;
  font-weight: bold;
  color: var(--blue-card-text);
}

.loginInfo > h2 {
  margin: 20px 0 5px 0;
  font-size: 15pt;
  font-weight: bold;
  color: var(--blue-card-text);
}

.loginInfo > p {
  margin: 7px 0 20px 0;
  padding: 0 0 0 25px;
  font-size: 9pt;
  color: var(--blue-card-text);
}

.loginInfo > img {
  float: right;
  margin: -66px 25px 0 0;
  padding: 0;
  width: 12%;
}

.loginInfo > h3 {
  float: right;
  margin: -30px 28px 0 0;
  font-size: 8pt;
  font-weight: bold;
  color: var(--blue-card-text);
}
</style>