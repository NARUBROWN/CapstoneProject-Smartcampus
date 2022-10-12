<template>
    <div class="card">
      <h1>플레이그라운드</h1>
      <table class="playGroundTable">
        <tr>
          <td class="playGround1">
            <div class="top">
                <img class="jeiu" src="@/assets/main/playground/1.png">
            </div>
            <router-link to="/campus-navigator"><h2>캠퍼스 길잡이</h2><h6>About University</h6></router-link>
          </td>
        </tr>
        <tr>
          <td class="playGround2">
            <div class="top">
                <img class="jeiu" src="@/assets/main/playground/1.png">
            </div>
            <router-link to="/"><h2>학과 커뮤니티</h2><h6>Academic Schedule</h6></router-link>
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
    background: #FF9500;
    color: var(--blue-card-text);
  }
  
  .playGround2 {
    border-radius: 10px;
    width: 50%;
    height: 90px;
    background: #34C759;
    color: var(--blue-card-text);
  }
  
  h2 {
    margin: 5px 0 8px 0;
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
  width: 20%;
  padding-right: 0px;
}
  </style>