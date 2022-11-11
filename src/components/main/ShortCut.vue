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
            <img class="shortIcon" src="@/assets/main/shortcut/icon/meal.svg">
          </div>
          <router-link to="/meal-information"><h2>교내식당</h2><h6>Cafeteria</h6></router-link>
        </td>
      </tr>
      <tr>
        <td class="shortCut3">
          <div class="top">
            <img class="shortIcon" src="@/assets/main/shortcut/icon/calendar.svg">
          </div>
          <router-link to="/academic-schedule"><h2>학사 일정</h2><h6>Academic Schedule</h6></router-link>
        </td>
        <td class="shortCut4">
          <div class="top">
            <img class="shortIcon" src="@/assets/main/shortcut/icon/bus.svg">
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
  margin: -7px 0 8px 1px;
  padding: 0 0 0 12px;
  font-size: 6pt;
}

.top {
  position: relative;
  padding-top: 2px;
  height: 53px;
}

.top > .jeiu {
  position: absolute;
  width: 50%;
  right: 0;
}

.top > .shortIcon {
  position: absolute;
  padding-top: 5px;
  width: 21%;
  right: 6%;
  filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(181deg) brightness(104%) contrast(102%);
}

</style>