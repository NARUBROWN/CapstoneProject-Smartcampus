<template>
    <div>
      <!-- <img class="profilePhoto" src="@/assets/student/profile.png" alt="프로필"> -->
      <br>
    </div>
    {{ user_data }}
    <div class="signUp_card">
      <div class="signUp_wrap"> 
        <form @submit.prevent="updateProfile">
          <div class="row">
            <input 
                  type="text"
                  v-model="user_data['name']"
                  name="name"
                  v-bind:placeholder="veux_userdata['name']"
            />
            <label class="header">이름</label>
            <div class="highLight"></div>
          </div>
          <div class="row">
            <input
                  type="text"
                  v-model="user_data['password']"
                  name="password"
                  maxlength="16"
                  @blur="passwordValid"
                  v-bind:placeholder="veux_userdata['password']"
            />
            <label class="header">비밀번호</label>
            <div class="highLight"></div>
          </div>
          <!-- <div class="pw" v-if="!passwordValidFlag">유효하지 않은 비밀번호 입니다.</div> -->
          <div class="row">
            <select class="depart" v-model="user_data['department']" v-bind:placeholder="veux_userdata['department']">
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
          <div class="row" v-if="user_data.stu_rank === '관리자'">
            <div class="select">
              <input v-bind:placeholder="veux_userdata['stu_rank']" v-model="user_data['stu_rank']" type="radio"
                     id="select" name="shop" value="학생"><label for="select">학생</label>
              <input v-bind:placeholder="veux_userdata['stu_rank']" v-model="user_data['stu_rank']" type="radio"
                     id="select2" name="shop" value="관리자"><label for="select2">관리자</label>
            </div>
            <label class="header">권한</label>
          </div>
          <div class="row">
            <button type="submit">확인</button>
            <button @click="this.$router.push('/student-information');">취소</button>
          </div>
        </form>
      </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "StudentInformationEdit",
  data() {
    return {
      user_data: {
        name: '',
        stu_num: '',
        department: '',
        password: '',
        stu_rank: '',
        passwordValidFlag: true,
      }
    };
  },
  created() {
    this.user_data.name = this.$store.state.user_data['name'];
    this.user_data.stu_num = this.$store.state.user_data['stu_num'];
    this.user_data.department = this.$store.state.user_data['department'];
    this.user_data.password = this.$store.state.user_data['password'];
    this.user_data.stu_rank = this.$store.state.user_data['stu_rank'];
  },
  computed: {
    veux_userdata() {
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
    updateProfile() {
      axios({
        method: "post", // 요청 방식
        url: process.env.VUE_APP_IP + "/post/profile_update", // 요청 주소
        data: {
          id: this.$store.state.user_data['id'],
          name: this.user_data['name'],
          department: this.user_data['department'],
          password: this.user_data['password'],
          rank: this.user_data['stu_rank']
        }
      }).then((res) => {
        // 회원정보 수정
        console.log("수정 성공" + res.data);

        // 수정된 정보를 Vuex Store에 저장하기
        this.$store.commit('login', this.user_data)

        this.$toast.success('계정을 성공적으로 수정했습니다.', {
          position: 'bottom'
        });

        this.$router.push('/student-information');
      })
          .catch((err) => {
            console.log(err); // 에러 처리 내용

            this.$toast.error('알 수 없는 오류가 발생했습니다.', {
              position: 'bottom'
            });
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
  height: 500px;
  padding: 20px 0 10px 0;
  background-color: var(--card);
}
.signUp_card > .signUp_wrap > form > .row{
  margin: 1em 0;
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
.select input[type=radio]+label{
  display: inline-block;
  cursor: pointer;
  height: 35px;
  width: 43.8%;
  border: 1px solid #A4A4A4;
  line-height: 24px;
  text-align: center;
  font-weight: normal;
  font-size: 14px;
  padding-top: 10px;
  background-color: #3998FF;
  color: #FFFFFF;
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
  margin-top: -10px;
}

</style>