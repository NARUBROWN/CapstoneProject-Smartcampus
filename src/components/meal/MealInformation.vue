<template>
  <div class="card">
    <h1>오늘의 식단</h1>
    <dl>
      <div class="listDeco">
        <div class="articleType" style="background: #FF3F14;"><a>학사</a></div>
        <dt><a href="#">재학생 및 복학예정자 등록금 3차 납부 안내</a></dt>
        <dd>2022/03/07</dd>
      </div>
      <div class="listDeco">
        <div class="articleType" style="background: #F2B705;"><a>인사</a></div>
        <dt>2022학년도 1학기 겸임교원 및 강사 초빙 공고(2차)</dt>
        <dd>2022/02/09</dd>
      </div>
      <div class="listDeco">
        <div class="articleType" style="background: #FF3F14;"><a>학사</a></div>
        <dt>코로나19 확산 방지 안내</dt>
        <dd>2022/05/12</dd>
      </div>
      <div class="listDeco">
        <div class="articleType" style="background: #67C904;"><a>시설</a></div>
        <dt>교내 Wifi 서비스 안내</dt>
        <dd>2022/03/07</dd>
      </div>
    </dl>
  </div>
</template>

<script>
export default {
  name: "MealInformation"
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

.articleType {
  float: left;
  border-radius: 10px;
  margin: 0 3% 0 3%;
  padding: 5px 0 5px 0;
  width: 30px;
  height: 20px;
  text-align: center;
}

.articleType > a {
  width: 100%;
  height: 100%;
  font-size: 8pt;
  color: var(--blue-card-text);
  font-weight: bold;
}

.card > dl {
  margin: 0 auto;
  width: 90%;
  text-decoration-color: #454545;
  font-weight: normal;
}

.card > dl > .listDeco {
  margin: 5px;
  padding: 3% 0 3% 0;
  border-radius: 10px;
  background: var(--notice-list-background);
}

.card > dl > .listDeco > dt {
  width: 80%;
  margin: 2px 0 0 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 10pt;
}

.card > dl > .listDeco > dd {
  margin: 1px 0 0 40px;
  font-size: 9pt;
}

</style>