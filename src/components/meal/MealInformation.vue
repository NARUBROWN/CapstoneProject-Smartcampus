<template>
  <div class="card">
    <h1>캠퍼스 구분</h1>
    <div class="ButtonsContent">
      <div class="ButtonsArea">
        <div class="Buttons">
          <button>송림캠퍼스</button>
          <button>송도캠퍼스</button>
        </div>
      </div>
    </div>
  </div>

  <div class="mealAlert">
    <p>
      ⚠ 식당은 오후 한시까지 운영됩니다.
    </p>
  </div>

  <div class="card">
    <h1>오늘의 점심</h1>
    <div class="articleType"><img src="../../assets/meal/main.png" alt="main"></div>
    <dl>
      <div class="listDeco">
        <dt>순살돈가스</dt>
        <dd>돈육, 닭: 국내산</dd>
      </div>
    </dl>
    <div class="articleType"><img src="../../assets/meal/tea.png" alt="main"></div>
    <dl>
      <div class="listDeco">
        <dt>숭늉</dt>
        <dd>쌀: 국산</dd>
      </div>
    </dl>
    <div class="articleType"><img src="../../assets/meal/noodle.png" alt="main"></div>
    <dl>
      <div class="listDeco">
        <dt>쇠소기 미역국</dt>
        <dd>소고기: 호주산, 미역: 국내산</dd>
        <dt>배추김치</dt>
        <dd>배추, 고춧가루: 국내</dd>
        <dt>쌀밥</dt>
        <dd>쌀: 국내산</dd>
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
  padding: 10px 0 5px 0;
  background-color: var(--card);
  color: var(--text-color);
}

.card > h1 {
  margin: 10px 0 15px 0;
  padding: 0 0 0 20px;
  font-size: 10pt;
  font-weight: bold;
}

.ButtonsArea {
  margin: 0 auto;
  text-align: center;
  width: 100%;
}

.Buttons > button {
  margin: 10px 5px 0 5px;
  width: 37.5%;
  height: 35px;
  border: 0;
  border-radius: 8px;
  color: var(--blue-card-text);
  background: var(--blue-card);
  font-weight: bolder;
  font-size: 16px;
  margin-bottom: 10px;
}

.mealAlert{
  text-align: center;
}

p{
  color: var(--text-color);
  font-size: 10pt;
  font-weight: normal;
}

.articleType {
  float: left;
  border-radius: 10px;
  margin: 0 3% 0 3%;
  padding: 15px 45px 5px 10px;
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

.articleType img{
  width: 30px;
}

.card > dl {
  margin-left: 70px;
  width: 75%;
  text-decoration-color: #454545;
  font-weight: normal;
}

.card > dl > .listDeco {
  padding: 3% 0 3% 0;
  border-radius: 10px;
  background: var(--notice-list-background);
}

.card > dl > .listDeco > dt {
  width: 80%;
  margin: 2px 0 0 41px;
  font-size: 12pt;
  font-weight: bold;
}

.card > dl > .listDeco > dd {
  font-size: 6pt;
  margin-right: 40px;
}

</style>