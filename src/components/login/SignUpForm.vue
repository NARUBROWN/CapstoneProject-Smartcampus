<template>
  {{ name }}
  {{ stu_num }}
  {{ department }}
  {{ password }}
  {{ passwordCheck }}
  {{ rank }}
  <div class="signUp_card">
    <div class="signUp_wrap">
      <form @submit.prevent="sendPost">
        <div class="row">
          <input type="text"
                v-model="name"
                name="name"
                placeholder="이름을 입력해 주세요."
          />
          <label class="header">이름</label>
          <div class="highLight"></div>
        </div>
        <div class="row">
          <input
              type="text"
              v-model="stu_num"
              name="stu_num"
              placeholder="학번을 입력해 주세요."
          />
          <label class="header">학번</label>
          <div class="highLight"></div>
        </div>
        <div class="row">
          <input
              type="password"
              v-model="password"
              name="password"
              maxlength="16"
              @blur="passwordValid"
              placeholder="비밀번호를 입력해 주세요."
          />
          <label class="header">비밀번호</label>
          <div class="highLight"></div>
        </div>
        <div class="pwValid">⚠ 대소문자 1개, 8자 이상 16자 이하</div>
        <div class="pw" v-if="!passwordValidFlag">유효하지 않은 비밀번호 입니다.</div>
        <div class="row">
          <input
              type="password"
              v-model="passwordCheck"
              name="passwordCheck"
              maxlength="16"
              @blur="passwordCheckValid"
              placeholder="비밀번호를 다시 입력해 주세요."
          />
          <label class="header">비밀번호 재확인</label>
          <div class="highLight"></div>
        </div>
        <div class="pwCheck" v-if="!passwordCheckFlag">비밀번호가 일치하지 않습니다.</div>
        <div class="row">
          <select class="depart" v-model="department">
            <option value="" disabled selected>소속학과를 선택해 주세요.</option>
            <option>AI컴퓨터정보과</option>
            <option>AI정보통신과</option>
            <option>유아교육과</option>
            <option>사회복지과</option>
            <option>실내건축과</option>
            <option>간호학과</option>
          </select>
          <label class="header">소속 학과</label>
        </div>
        <div class="row" v-if="this.$store.state.user_data['stu_rank'] === '관리자'">
          <div class="select">
            <input v-model="rank" type="radio" id="select" name="shop" value="학생"><label for="select">학생</label>
            <input v-model="rank" type="radio" id="select2" name="shop" value="관리자"><label for="select2">관리자</label>
          </div>
          <label class="header">권한</label>
        </div>
        <div class="row">
          <button type="submit">확인</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUpForm",
  data() {
    return {
      name: '',
      stu_num: '',
      department: '',
      password: '',
      passwordCheck: '',
      rank: '학생',
      passwordValidFlag: true,
      passwordCheckFlag: true,
    }
  },
  computed: {
    vuex_userdata() {
      return this.$store.state.user_data
    }
  },
  methods: {
    passwordValid() {
      if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,16}$/.test(this.password)) {
        this.passwordValidFlag = true
      } else {
        this.passwordValidFlag = false
      }
    },
    passwordCheckValid() {
      if (this.password === this.passwordCheck) {
        this.passwordCheckFlag = true
      } else {
        this.passwordCheckFlag = false
      }
    },
    sendPost() {
      axios({
        method: "post", // 요청 방식
        url: process.env.VUE_APP_IP + "/post/signup", // 요청 주소
        data: {
          name: this.name,
          stu_num: this.stu_num,
          department: this.department,
          password: this.password,
          rank: this.rank
        }
      }).then((res) => {
        // 회원가입 성공
        console.log("회원가입 성공" + res);
        this.$router.push('/login');

        this.$toast.success('가입을 환영합니다. 다시 로그인 해주세요', {
          position: 'bottom'
        });

      })
          .catch(function (err) {
            console.log(err); // 에러 처리 내용
          });
    }
  }
}
</script>

<style scoped>
.signUp_card{
  margin: 10px auto;
  border-radius: 10px;
  width: 95.56%;
  height: 490px;
  padding: 20px 0 10px 0;
  background-color: var(--card);
}
.signUp_card > .signUp_wrap > form > .row{
  margin: 10px 0;
  position: relative;
}
.signUp_card > .signUp_wrap > form > .row > .header{
  font-size: 11pt;
  font-weight: bold;
  color: #007AFF;
  position: absolute;
  left: 0;
  top: 0;
  margin-left: 37px;
}
.signUp_card > .signUp_wrap > form > .row > .highLight{
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 0.1em;
  background: #D4D4D4;
  width: 80%;
  margin: 0 auto;
}
.signUp_card > .signUp_wrap > form > .row >  input,
.signUp_card > .signUp_wrap > form > .row >  button[type=submit]{
  width: 80%;
  font: inherit;
  padding: 12px 0;
  font-weight: normal;
  outline: none;
  border: 0;
  margin-left: 37px;
  margin-top: 15px;
}
.signUp_card > .signUp_wrap > form > .row >  input{
  font-size: 11pt;
  background: var(--card);
}
.signUp_card > .signUp_wrap > form > .row >  input::placeholder{
  color: #A4A4A4;
}
.signUp_card > .signUp_wrap > form > .row >  button[type=submit]{
  border-radius: 10px;
  border: none;
  font-size: 14pt;
  font-weight: bold;
  color: #F4F4F4;
  cursor: pointer;
  background-color: #007AFF;
}
.depart{
  width: 80%;
  height: 45px;
  margin-top: 30px;
  margin-left: 40px;
  border: none;
  border-bottom: 1px solid #A4A4A4;
  font-weight: normal;
}
.select {
    padding: 35px 0px 10px 0px;
    margin-left: 40px;
}
.select input[type=radio]{
    display: none;
}
.select input[type=radio]+label {
  display: inline-block;
  cursor: pointer;
  height: 35px;
  width: 43.8%;
  line-height: 24px;
  text-align: center;
  font-weight: normal;
  font-size: 14px;
  padding-top: 10px;
  background-color: #3998FF;
  color: #ffffff;
}
.select input[type=radio]+label:first-of-type{
    border-radius: 10px 0 0 10px;
}
.select input[type=radio]+label:nth-of-type(2){
  border-radius: 0 10px 10px 0;
}
.select input[type=radio]:checked+label {
  background-color: #007AFF;
  color: #FFFFFF;
}
.pw{
  font-size: 9pt;
  color: #FF3B30;
  margin-left: 37px;
  margin-top: 0px;
}
.pwCheck{
  font-size: 9pt;
  color: #FF3B30;
  margin-left: 37px;
  margin-top: -10px;
}
.pwValid{
  font-size: 9pt;
  margin-left: 37px;
  margin-top: -10px;
}
</style>