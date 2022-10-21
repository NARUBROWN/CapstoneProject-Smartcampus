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
      stu_num: "",
      password: "",
      user_data: {
        id: 0,
        department: '',
        name: '',
        stu_number: 0,
        stu_rank: "",
        massage: "",
        password: "",
        code: 0,
        img: ""
      }
    }
  },
  created() {
    this.user_data['code'] = 0

    // 3. 로컬 스토리지에 있는 값 확인
    if (localStorage.getItem('loginLogic') === '1') {
      //  4. 로컬스토리지에 할당해놨던 값 해제
      localStorage.setItem('loginLogic', '0');
      // 5. 메인화면으로 이동
      this.$router.push('/');
    } else {
      console.log('loginLogic에 키 값이 없음')
    }

    if (this.$store.state.user_data['code'] === 2) {
      this.$toast.warning('비밀번호를 확인해주세요', {
        position: 'bottom'
      });
    }
  },
  watch: {},
  methods: {
    vuex_login() {
      const stu_num = this.stu_num
      const password = this.password
      this.$store.dispatch('login', {stu_num, password});
    },
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
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        this.user_data = user.data;
        //로그인 로직 수행
        this.loginLogic()
      } catch (e) {
        console.log("새로운 데이터를 불러오지 못했습니다. " + e);

        this.$toast.error('서버에 연결되지 않았습니다.', {
          position: 'bottom'
        });

      }
    },
    loginLogic() {
      if (this.user_data['code'] === 0) {
        console.log("아무것도 없음");

        this.$toast.warning('아무것도 입력되지 않았습니다.', {
          position: 'bottom'
        });

      } else if (this.user_data['code'] === 1) {
        this.user_data['stu_num'] = ""
        console.log("존재하지 않는 학번");

        this.$toast.warning('존재하지 않는 학번입니다.', {
          position: 'bottom'
        });

      } else if (this.user_data['code'] === 2) {
        this.user_data['stu_num'] = ""
        console.log("비밀번호 확인");

        this.$toast.warning('비밀번호를 확인해주세요', {
          position: 'bottom'
        });
      } else if (this.user_data['code'] === 3) {
        // 로그인 성공
        // 로그인 정보를 Vuex에 저장하여 상태관리
        this.$store.commit('login', this.user_data)
        //페이지 프로필을 새로 고치기 위해서 로컬스토리지에 값을 주고 Create시에 그 값이 확인되면 메인 페이지로 로드
        // 1. 로컬스토리지에 키 저장
        localStorage.setItem('loginLogic', '1');
        // 2. 페이지 새로고침
        location.reload();
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
  height: 280px;
  padding: 20px 0 10px 0;
  background-color: var(--card);
}
.login_card > .login_wrap > form > .row{
  margin: 10px 0 0 0;
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
  font-weight: normal;
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
  font-weight: bold;
  color: #F4F4F4;
  cursor: pointer;
  background-color: #007AFF;
}
.login_card > .login_wrap > form > .forget{
  font-size: 9pt;
  margin-left: 270px;
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