<template>
  <!--헤더 부분-->
  <div v-if="isShow" class="slide_back_top" @click="handler"></div>
  <div v-if="isShow" class="slide_back_left" @click="handler"></div>
  <div v-if="isShow" class="slide_back_bottom" @click="handler"></div>
  <header>
    <div class="top">
      <img class="logo" src="@/assets/main/logo.png" alt="재능대학교 로고" @click="goHome">
      <div class="container">
      <img class="logout" src="@/assets/student/Non_Profile.png"
           v-if="this.$store.state.user_data['login_state'] === false" alt="로그인 되지 않았습니다."
           @click="this.$router.push('/login')">
        <img class="logout" v-bind:src="profile_img" @click="handler"
            v-if="this.$store.state.user_data['login_state'] === true" alt="프로필 사진">
      </div>
      <transition name="slide-fade">
        <div v-if="isShow" class="slide_card">
          <div @click="handler">
            <router-link to="/student-information">모바일 학생증</router-link>
          </div>
          <div @click="handler">
            <router-link to="/">마이페이지</router-link>
          </div>
          <div @click="logout">로그아웃</div>
        </div>
      </transition>
      <!-- @click="logout" v-if="this.$store.state.user_data['login_state']" -->
    </div>
  </header>
  <!--라우트 되는 부분-->
  <router-view/>
  <footer>
    <p>Copyright © 2022 김원정(NARUBROWN). All right reserved <br><br>
      JEIU is a trademark is registered trademark of JEI University in Republic of Korea</p>
      <router-link to="/vuex"><a>Vuex 저장소</a></router-link>
  </footer>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      isShow: false,
      profile_img: null
    };
  },
  created() {
    if (this.$store.state.user_data['login_state'] === true) {
      this.profile_img = process.env.VUE_APP_IP + '/profile_img/' + this.$store.state.user_data['img']
    } else {
      this.profile_img = null
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.isShow = !this.isShow;
      this.$router.push('/');
    },
    handler() {
      this.isShow = !this.isShow;
    },
    goHome() {
      this.$router.push("/")
    }
  }
}
</script>

<style>

:root {
  --page-color: #F2F2F7;
  --blue-card: #0A84FF;
  --blue-card-shadow: #0054c9;
  --blue-card-hr: white;
  --blue-card-text: white;
  --text-color: #454545;
  --card: white;
  --notice-list-background: #F2F2F7;
  --line: gray;
  --time-box: #EAEAEA;
  --time-text: #454545;
}

@media (prefers-color-scheme: dark) {
  :root {
    --page-color: #212121;
    --blue-card: #0A84FF;
    --blue-card-shadow: #0054c9;
    --blue-card-hr: white;
    --blue-card-text: white;
    --text-color: white;
    --card: #363636;
    --notice-list-background: #4a4a4a;
    --line: white;
    --time-box: gray;
    --time-text: white;
  }
}

html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: var(--page-color);
  font-family: "NanumSquareNeo", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@font-face {
  font-family: 'NanumSquareNeo';
  src: url("assets/fonts/NanumSquareNeoTTF-aLt.woff2");
  font-weight: 300;
}

@font-face {
  font-family: 'NanumSquareNeo';
  src: url("assets/fonts/NanumSquareNeoTTF-bRg.woff2");
  font-weight: normal;
}

@font-face {
  font-family: 'NanumSquareNeo';
  src: url("assets/fonts/NanumSquareNeoTTF-cBd.woff2");
  font-weight: bold;
}

@font-face {
  font-family: 'NanumSquareNeo';
  src: url("assets/fonts/NanumSquareNeoTTF-dEb.woff2");
  font-weight: 800;
}

@font-face {
  font-family: 'NanumSquareNeo';
  src: url("assets/fonts/NanumSquareNeoTTF-eHv.woff2");
  font-weight: 900;
}

a {
  text-decoration: none;
  color: inherit;
}

header {
  width: 100%;
  height: 7.45%;
  background-color: var(--card);
  z-index: 2;
}

.top {
  width: 100%;
  position: relative;
}

.logo {
  margin: 13px 0 7px 22px;
  width: 15%;
}

.container {
  display: inline-block;
  margin-left: 66%;
  width: 35px;
  height: 35px;
  border-radius: 35px;
  overflow: hidden;
}
.logout {
  max-width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.card {
  margin: 10px auto;
  border-radius: 10px;
  width: 95.56%;
  padding: 10px 0 10px 0;
  background-color: var(--card);
  color: var(--text-color);
}

.card > h1 {
  margin: 10px 0 10px 0;
  padding: 0 0 0 20px;
  font-size: 10pt;
  font-weight: bold;
}

.card > .more {
  font-size: 8pt;
  margin: -26px 20px 20px 0;
  float: right;
}

footer {
  margin: 30px 0 0 0;
  padding: 30px 0 30px 0;
  text-align: center;
  color: var(--text-color);
  background: #212121;
}

footer > p {
  padding: 30px 0 20px 0;
  color: var(--blue-card-text);
  font-weight: bolder;
  font-size: 10pt;
}

.slide_card {
  position: absolute;
  background: #FFFFFF;
  border-radius: 10px;
  width: 110px;
  height: 116px;
  box-shadow: #c0bfbf 0 0 5px;
  font-size: 10pt;
  font-weight: normal;
  margin-left: 68%;
}

.slide_back_top {
  position: absolute;
  z-index: 1;
  border-radius: 10px;
  width: 100%;
  height: 7.45%;
  font-size: 10pt;
  font-weight: normal;
  margin: 0 0 0 0;
}

.slide_back_left {
  position: absolute;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  font-size: 10pt;
  font-weight: normal;
  margin: 0 0 0 0;
}

.slide_back_bottom {
  position: absolute;
  border-radius: 10px;
  width: 100%;
  height: 700px;
  font-size: 10pt;
  font-weight: normal;
  margin: 116px 0 0 0;
}

.slide_card > div {
  height: 33%;
  text-align: center;
}

.slide_card > div:first-of-type {
  margin-top: 12px;
}

.slide-fade-enter-active {
  transition: all 0.4s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
