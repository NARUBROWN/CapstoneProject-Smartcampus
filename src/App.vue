<template>
  <!--헤더 부분-->
  <header>
    <div class="top">
      <router-link to="/"><img class="logo" src="@/assets/main/logo.png" alt="재능대학교 로고"></router-link>
    </div>
  </header>
  <!--라우트 되는 부분-->
  <router-view/>
  <footer>
    <p>Copyright © 2022 김원정(NARUBROWN). All right reserved <br><br>
      JEIU is a trademark is registered trademark of JEI University in Republic of Korea</p>
  </footer>
</template>

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
}

.logo {
  margin: 13px 0 7px 22px;
  width: 15%;
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
</style>
