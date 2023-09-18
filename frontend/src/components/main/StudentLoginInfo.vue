<template>
  <router-link to="/student-information" v-if="veux_userdata['login_state']">
    <div class="loginInfo">
      <h1>{{ veux_userdata['name'] }}</h1>
      <h2>{{ veux_userdata['stu_rank'] }}</h2>
      <img src="@/assets/main/student/card.svg" alt="학생증 아이콘">
    </div>
  </router-link>
  <router-link to="/login" v-if="!veux_userdata['login_state']">
    <div class="loginInfo">
      <h1>스마트캠퍼스에</h1>
      <h2>로그인 하기</h2>
      <img src="@/assets/main/student/card.svg" alt="학생증 아이콘">
    </div>
  </router-link>
</template>

<script>
//import axios from "axios";

export default {
  name: "StudentLoginInfo",
  data() {
    return {
      serverState: false,
      errorComponent: true,
    };
  },
  computed: {
    veux_userdata() {
      return this.$store.state.user_data
    }
  },
  methods: {
    /*// 백엔드에 데이터 요청하는 메소드
    async req_data() {
      try {
        // 백엔드에 요청된 데이터를 가져오기
        let user = await axios.get(process.env.VUE_APP_IP + "/proflie");
        console.log('user 데이터를 요청하였습니다. ');
        this.user_data = user.data;
        console.log(this.user_data)
        this.serverState = true;
        this.errorComponent = false;
      } catch {
        this.serverState = false;
        this.errorComponent = true;
      }
    }*/
  }
}
</script>

<style scoped>

.loginInfo {
  margin: 10px auto 0;
  border-radius: 10px 10px 0 0;
  width: 85.56%;
  height: 40px;
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
  margin: 10px 0 0 0;
  padding: 0 5px 0 25px;
  font-size: 15pt;
  font-weight: 700;
  color: var(--blue-card-text);
}

.loginInfo > h2 {
  margin: 10px 0 5px 0;
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
  margin: -33.5px 25px 0 10px;
  width: 9%;
  filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(181deg) brightness(104%) contrast(102%);
}

.loginInfo > h3 {
  float: right;
  margin: -30px 28px 0 0;
  font-size: 8pt;
  font-weight: bold;
  color: var(--blue-card-text);
}

</style>