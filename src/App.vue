<template>
  <!--헤더 부분-->
  <header>
    <div class="top">
      <router-link to="/"><img class="logo" src="@/assets/main/logo.png" alt="재능대학교 로고"></router-link>
    </div>
  </header>
  <!--라우트 돠는 부분-->
  <router-view/>
</template>

<style>

:root {
  --page-color: #f4f4f4;
  --blue-card: #7cb3ff;
  --blue-card-shadow: #0054c9;
  --blue-card-hr: white;
  --blue-card-text: white;
  --text-color: #454545;
  --card: white;
  --notice-list-background: #fcfcfc;
}

@media (prefers-color-scheme: dark) {
  :root {
    --page-color: #212121;
    --blue-card: #57aeff;
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

</style>
