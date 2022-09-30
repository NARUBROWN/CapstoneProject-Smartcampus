<template>
  <div class="card">
    <h1>바로가기</h1>
    <table class="shortCutTable">
      <tr>
        <td class="shortCut1">
          <div class="top">
            <img class="jeiu" src="@/assets/main/shortcut/icon/1.png">
          </div>
          <router-link to="/introduction"><h2>학교소개</h2><h6>About University</h6></router-link>
        </td>
        <td class="shortCut2">
          <div class="top">
            <img src="@/assets/main/shortcut/icon/2.png">
          </div>
          <router-link to="/meal-information"><h2>교내식당</h2><h6>Cafeteria</h6></router-link>
        </td>
      </tr>
      <tr>
        <td class="shortCut3">
          <div class="top">
            <img src="@/assets/main/shortcut/icon/3.png">
          </div>
          <router-link to="/academic-schedule"><h2>학사 일정</h2><h6>Academic Schedule</h6></router-link>
        </td>
        <td class="shortCut4">
          <div class="top">
            <img src="@/assets/main/shortcut/icon/4.png">
          </div>
          <router-link to="/bus-schedule"><h2>버스 시간표</h2><h6>Bus Schedule</h6></router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "ShortCut"
}
</script>

<style scoped>

.card {
  margin: 10px auto;
  border-radius: 10px;
  width: 95.56%;
  padding: 10px 0 10px 0;
  background-color: var(--card);
  color: var(--text-color);
}

.card > h1 {
  margin: 10px 0 15px 0;
  padding: 0 0 0 20px;
  font-size: 10pt;
  font-weight: bold;
}

.shortCutTable {
  margin: 0 auto;
  width: 90%;
  border-collapse: initial;
  border-spacing: 5px;
}

.shortCut1 {
  border-radius: 10px;
  width: 50%;
  /*background: var(--blue-card);*/
  background-image: url('@/assets/main/shortcut/bg/1.png');
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--blue-card-text);
}

.shortCut2 {
  border-radius: 10px;
  width: 50%;
  /*background: var(--blue-card);*/
  background-image: url('@/assets/main/shortcut/bg/2.png');
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--blue-card-text);
}

.shortCut3 {
  border-radius: 10px;
  width: 50%;
  /*background: var(--blue-card);*/
  background-image: url('@/assets/main/shortcut/bg/3.png');
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--blue-card-text);
}

.shortCut4 {
  border-radius: 10px;
  width: 50%;
  /*background: var(--blue-card);*/
  background-image: url('@/assets/main/shortcut/bg/4.png');
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--blue-card-text);
}

h2 {
  margin: -5px 0 8px 0;
  padding: 0 0 0 12px;
  font-size: 14pt;
  font-weight: bold;
}

h6 {
  margin: -10px 0 8px 1px;
  padding: 0 0 0 12px;
  font-size: 6pt;
}

.top {
  padding-top: 2px;
  text-align: right;
}

.top > .jeiu {
  width: 50%;
  padding-right: 0px;
}

.top > img {
  padding-right: 3px;
  width: 30%;
}


</style>