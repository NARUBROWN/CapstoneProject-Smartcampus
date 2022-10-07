<template>
  <div class="login_card">
    <div class="login_wrap">
      <form @submit.prevent="sendPost">
        <div class="row">

          <input type="text"
                 v-model="stu_num"
                 name="stu_num"
                 placeholder="학번을 입력해 주세요."
                 v-if="user_data['code'] === 0 || user_data['code'] === 2"
          />

          <input type="text"
                 v-model="stu_num"
                 name="stu_num"
                 style="color: red"
                 v-bind:placeholder="this.user_data['massage']"
                 v-if="user_data['code'] === 1"
          />
          <label class="header">학번</label>
          <div class="highLight"></div>
        </div>
        <div class="row">

          <input
              type="password"
              v-model="password"
              name="password"
              placeholder="비밀번호를 입력해 주세요."
              v-if="user_data['code'] === 0 || user_data['code'] === 1"
          />

          <input
              type="password"
              v-model="password"
              name="password"
              style="color: red"
              v-bind:placeholder="this.user_data['massage']"
              v-if="user_data['code'] === 2"
          />

          <label class="header">비밀번호</label>
          <div class="highLight"></div>
        </div>
        <div class="forget">
          <a href="#">비밀번호 찾기</a>
        </div>
        <div class="row">
          <button type="submit">로그인</button>
        </div>
        <div class="join">
          <p>회원이 아니신가요?<router-link to="/signup"><a class="joinUs" href="#">회원가입 하기</a></router-link></p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginForm",
  data() {
    return {
      stu_num: '',
      password: '',
      user_data: [{
        id: '',
        department: '',
        name: '',
        stu_number: 0,
        stu_rank: "",
        massage: "",
        code: 0
      }]
    }
  },
  created() {
    this.user_data['code'] = 0
  },
  methods: {
    async sendPost() {
      try {
        // 백엔드에 요청된 데이터를 가져오기
        let user = await axios({
          method: "post",
          url: process.env.VUE_APP_IP + "/post/login",
          data: {
            stu_num: this.stu_num,
            password: this.password
          }
        })
        this.user_data = user.data;
        //로그인 로직 수행
        this.loginLogic()
      } catch (e) {
        console.log("새로운 데이터를 불러오지 못했습니다. " + e);
      }
    },
    loginLogic() {
      if (this.user_data['code'] === 0) {
        console.log("아무것도 없음");
      } else if (this.user_data['code'] === 1) {
        this.user_data['stu_num'] = ""
        console.log("존재하지 않는 학번");
      } else if (this.user_data['code'] === 2) {
        this.user_data['stu_num'] = ""
        console.log("비밀번호 확인");
      } else if (this.user_data['code'] === 3) {
        // 로그인 성공
        this.$router.push('/');
      }
    }
  }
}
</script>

<style scoped>
.login_card{
  margin: 10px auto;
  border-radius: 10px;
  width: 95.56%;
  height: 330px;
  padding: 20px 0 10px 0;
  background-color: var(--card);
}
.login_card > .login_wrap > form > .row{
  margin: 1em 0;
  position: relative;
}
.login_card > .login_wrap > form > .row > .header{
  font-size: 11pt;
  font-weight: bold;
  color: #007AFF;
  position: absolute;
  left: 0;
  top: 0;
  margin-left: 37px;
}
.login_card > .login_wrap > form > .row > .highLight{
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 0.1em;
  background: #D4D4D4;
  width: 80%;
  margin: 0 auto;
}
.login_card > .login_wrap > form > .row >  input,
.login_card > .login_wrap > form > .row >  button[type=submit]{
  width: 80%;
  font: inherit;
  padding: 12px 0;
  font-weight: bold;
  outline: none;
  border: 0;
  margin-left: 37px;
  margin-top: 15px;
}
.login_card > .login_wrap > form > .row >  input{
  font-size: 11pt;
  background: var(--card);
}
.login_card > .login_wrap > form > .row >  input::placeholder{
  color: #A4A4A4;
}
.login_card > .login_wrap > form > .row >  button[type=submit]{
  border-radius: 10px;
  border: none;
  font-size: 14pt;
  color: #F4F4F4;
  cursor: pointer;
  background-color: #007AFF;
}
.login_card > .login_wrap > form > .forget{
  font-size: 9pt;
  margin-left: 260px;
  color: #A4A4A4;
}
.login_card > .login_wrap > form > .join{
  color: #A4A4A4;
  font-size: 9pt;
  text-align: center;
}
.login_card > .login_wrap > form > .join a{
  color: #007AFF;
  border-bottom: 1px solid #007AFF;
  margin: 0 3px;
}
</style>