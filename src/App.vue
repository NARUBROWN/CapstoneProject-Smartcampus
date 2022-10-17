<template>
  <!--헤더 부분-->
  <header>
    <div class="top">
      <router-link to="/"><img class="logo" src="@/assets/main/logo.png" alt="재능대학교 로고"></router-link>
      <router-link to="/vuex"><a>Vuex 저장소</a></router-link>
      <img class="logout" src="@/assets/student/Non_Profile.png"
           v-if="this.$store.state.user_data['login_state'] === false">
      <img class="logout" v-bind:src="profile_img" @click="handler"
           v-if="this.$store.state.user_data['login_state'] === true">
      <transition name="slide-fade">
        <div v-if="isShow" class="slide_card">
          <div @click="handler">
            <router-link to="/">학생증</router-link>
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
  </footer>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      isShow: false,
      profile_img: ''
    };
  },
  created() {
    this.profile()
  },
  methods: {
    logout() {
      this.$store.commit('logout')
      this.$router.push('/');
      this.isShow = !this.isShow;
    },
    handler() {
      this.isShow = !this.isShow;
      
    },
    profile() {
      if (this.$store.state.user_data['login_state'] === true) {
        this.profile_img = process.env.VUE_APP_IP + '/profile_img/' + this.$store.state.user_data['img']
      } else {
        this.profile_img = ""
      }
    }
  },
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
  font-family: "Apple SD Gothic Neo", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  text-decoration: none;
  color: inherit;
}


header {
  width: 100%;
  height: 7.45%;
  background-color: var(--card);
}

.top {
  width: 100%;
  position: relative;
}

.logo {
  margin: 13px 0 7px 22px;
  width: 15%;
}

.logout{
  width: 35px;
  height: 35px;
  border-radius: 35px;
  margin-left:175px;
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
  margin-left: 272px;
}

.slide_card > div{
  height: 33%;
  text-align: center;
}

.slide_card > div:first-of-type{
  margin-top: 9px;
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
