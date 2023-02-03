<template>
  <div class="card">
    <h1>플레이그라운드</h1>
    <table class="playGroundTable">
      <tr>
        <td class="playGround1">
          <div class="top">
            <img class="jeiu" src="@/assets/main/playground/pageview.svg">
          </div>
          <router-link to="/campus-navigator"><h2>캠퍼스 길잡이</h2><h6>Campus Navigator</h6></router-link>
        </td>
      </tr>
      <tr>
        <td class="playGround2">
          <div class="top">
            <img class="jeiu" src="@/assets/main/playground/groups.svg">
          </div>
          <router-link to="/campus-community"><h2>학과 커뮤니티</h2><h6>Campus Community</h6></router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "playGround"
}
</script>

<style scoped>

.playGroundTable {
  margin: 0 auto;
  width: 90%;
  border-collapse: initial;
  border-spacing: 5px;
}

.playGround1 {
  border-radius: 10px;
  width: 50%;
  height: 90px;
  color: var(--blue-card-text);
  background: url(../../assets/main/shortcut/bg/6.png);
  background-size: cover;
}

.playGround2 {
  border-radius: 10px;
  width: 50%;
  height: 90px;
  color: var(--blue-card-text);
  background: url(../../assets/main/shortcut/bg/5.png);
  background-size: cover;
}

h2 {
  margin: 5px 0 8px 0;
  padding: 0 0 0 12px;
  font-size: 14pt;
  font-weight: bold;
}

h6 {
  margin: -7px 0 8px 1px;
  padding: 0 0 0 12px;
  font-size: 6pt;
}

.top {
  padding-top: 2px;
  text-align: right;
}

.top > .jeiu {
  width: 10%;
  padding: 3px 10px 0 0;
}
</style>