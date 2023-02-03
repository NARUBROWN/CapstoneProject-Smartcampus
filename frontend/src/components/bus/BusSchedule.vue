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

  <div class="card">
    <h1>셔틀버스</h1>
    <div class="ride">
      <a>제물포역</a> > 송림캠퍼스
    </div>
    <div class="ButtonTimeBox">
      <div class="ButtonTime">06:40</div>
      <div class="ButtonTime">07:00</div>
      <div class="ButtonTime">07:30</div>
    </div>

    <div class="ride">
      <a>송림캠퍼스</a> > 제물포역
    </div>
    <div class="ButtonTimeBox">
      <div class="ButtonTime">13:20</div>
      <div class="ButtonTime">17:00</div>
      <div class="ButtonTime">17:30</div>
    </div>
  </div>

  <div class="card">
    <h1>통근버스(등교)</h1>
    <div class="ride">
      <a>부평역</a> > 송림캠퍼스
    </div>
    <div class="ButtonTimeBox">
      <div class="ButtonTime">06:40</div>
      <div class="ButtonTime">07:00</div>
      <div class="ButtonTime">07:30</div>
    </div>
    <div class="articleType">
      <img src="../../assets/bus/bus.png" alt="main" class="bus">
      <img src="../../assets/bus/bar.png" alt="main" class="bar">
    </div>
    <dl>
      <div class="listDeco">
        <dt>부평역 8번 출구</dt>
        <dd>06:40</dd>
        <dt>부평시장역 2번 출구</dt>
        <dd>07:00</dd>
        <dt>송림캠퍼스</dt>
        <dd>07:30</dd>
      </div>
    </dl>
    <hr>

    <div class="ride">
      <a>주안역</a> > 송림캠퍼스
    </div>
    <div class="ButtonTimeBox">
      <div class="ButtonTime">06:40</div>
      <div class="ButtonTime">07:00</div>
      <div class="ButtonTime">07:30</div>
    </div>
    <div class="articleType">
      <img src="../../assets/bus/bus.png" alt="main" class="bus">
      <img src="../../assets/bus/bar.png" alt="main" class="bar">
    </div>
    <dl>
      <div class="listDeco">
        <dt>주안역</dt>
        <dd>06:40</dd>
        <dt>주안역 스타벅스 앞</dt>
        <dd>07:00</dd>
        <dt>송림캠퍼스</dt>
        <dd>07:30</dd>
      </div>
    </dl>
  </div>

  <div class="card">
    <h1>통근버스(하교)</h1>
    <div class="ride">
      <a>송림캠퍼스</a> > 부평역
    </div>
    <div class="ButtonTimeBox">
      <div class="ButtonTime">17:40</div>
      <div class="ButtonTime">18:00</div>
      <div class="ButtonTime">18:30</div>
    </div>
    <div class="articleType">
      <img src="../../assets/bus/bus.png" alt="main" class="bus">
      <img src="../../assets/bus/bar.png" alt="main" class="bar">
    </div>
    <dl>
      <div class="listDeco">
        <dt>송림캠퍼스</dt>
        <dd>17:40</dd>
        <dt>부평시장역 2번 출구</dt>
        <dd>18:10</dd>
        <dt>부평역</dt>
        <dd>18:30</dd>
      </div>
    </dl>
    <hr>

    <div class="ride">
      <a>송림캠퍼스</a> > 주안역
    </div>
    <div class="ButtonTimeBox">
      <div class="ButtonTime">17:40</div>
      <div class="ButtonTime">18:00</div>
      <div class="ButtonTime">18:30</div>
    </div>
    <div class="articleType">
      <img src="../../assets/bus/bus.png" alt="main" class="bus">
      <img src="../../assets/bus/bar.png" alt="main" class="bar">
    </div>
    <dl>
      <div class="listDeco">
        <dt>송림캠퍼스</dt>
        <dd>17:40</dd>
        <dt>주안역 스타벅스 앞</dt>
        <dd>18:10</dd>
        <dt>주안역</dt>
        <dd>18:30</dd>
      </div>
    </dl>
  </div>
</template>

<script>
export default {
  name: "BusSchedule",
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
  font-family: inherit;
}

.ride {
  font-weight: bold;
  font-size: 18pt;
  text-align: center;
}

.ride a {
  color: var(--blue-card);
}

.ButtonTimeBox {
  overflow: hidden;
}

.ButtonTime {
  text-align: center;
  width: 20%;
  line-height: 25px;
  float: left;
  background-color: var(--time-box);
  color: var(--time-text);
  margin: 15px 0 20px 40px;
  border-radius: 5px;
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

.articleType img {
  width: 40px;
  position: absolute;
  margin: 60px 0 0 0;
}

.articleType .bar {
  width: 20px;
  position: absolute;
  margin: 0 0 0 60px;
}

.card > dl {
  margin-left: 70px;
  width: 75%;
  text-decoration-color: #454545;
  font-weight: normal;
}

.card > dl > .listDeco {
  padding: 0 0 3% 9%;
  border-radius: 10px;
}

.card > dl > .listDeco > dt {
  width: 80%;
  margin: 2px 0 0 41px;
  font-size: 12pt;
  font-weight: bold;
}

.card > dl > .listDeco > dd {
  font-size: 8pt;
  margin-right: 40px;
  margin-bottom: 30px;
}

.card > dl > .listDeco > dd:last-of-type {
  margin-bottom: 0px;
}

hr {
  margin: 20px 0 40px 40px;
  width: 80%;
  height: 2px;
  border: 0;
  background-color: #D5D5D5;
}
</style>