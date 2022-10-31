<template>
  <div class="card">
    <h1>교육과정</h1>
    <div class="ButtonsContent">
      <div class="ButtonsArea">
        <div class="Buttons">
          <button>정규학과</button>
          <button>재직자단계</button>
        </div>
      </div>
    </div>
  </div>

  <div class="card">
    <h1>2022학년도 학사일정</h1>
    <div class="day">
      <h2 class="month">1월</h2>
      <ul>
        <li>01(일)</li>
        <li>근로자의날</li>
        <li>05(수)</li>
        <li>어린이날</li>
        <li>08(토)</li>
        <li>부처님오신날</li>
      </ul>
    </div>
    <hr>

    <div class="day">
      <h2 class="month">2월</h2>
      <ul>
        <li>01(일)</li>
        <li>근로자의날</li>
        <li>05(수)</li>
        <li>어린이날</li>
        <li>08(토)</li>
        <li>부처님오신날</li>
      </ul>
    </div>
    <hr>

    <div class="day">
      <h2 class="month">3월</h2>
      <ul>
        <li>01(일)</li>
        <li>근로자의날</li>
        <li>05(수)</li>
        <li>어린이날</li>
        <li>08(토)</li>
        <li>부처님오신날</li>
      </ul>
    </div>
    <hr>

    <div class="day">
      <h2 class="month">4월</h2>
      <ul>
        <li>01(일)</li>
        <li>근로자의날</li>
        <li>05(수)</li>
        <li>어린이날</li>
        <li>08(토)</li>
        <li>부처님오신날</li>
      </ul>
    </div>
    <hr>

    <div class="day">
      <h2 class="month">5월</h2>
      <ul>
        <li>01(일)</li>
        <li>근로자의날</li>
        <li>05(수)</li>
        <li>어린이날</li>
        <li>08(토)</li>
        <li>부처님오신날</li>
      </ul>
    </div>
    <hr>

    <div class="day">
      <h2 class="month">6월</h2>
      <ul>
        <li>01(일)</li>
        <li>근로자의날</li>
        <li>05(수)</li>
        <li>어린이날</li>
        <li>08(토)</li>
        <li>부처님오신날</li>
      </ul>
    </div>
    <hr>

    <div class="day">
      <h2 class="month">7월</h2>
      <ul>
        <li>01(일)</li>
        <li>근로자의날</li>
        <li>05(수)</li>
        <li>어린이날</li>
        <li>08(토)</li>
        <li>부처님오신날</li>
      </ul>
    </div>
    <hr>

    <div class="day">
      <h2 class="month">8월</h2>
      <ul>
        <li>01(일)</li>
        <li>근로자의날</li>
        <li>05(수)</li>
        <li>어린이날</li>
        <li>08(토)</li>
        <li>부처님오신날</li>
      </ul>
    </div>
    <hr>

    <div class="day">
      <h2 class="month">9월</h2>
      <ul>
        <li>01(일)</li>
        <li>근로자의날</li>
        <li>05(수)</li>
        <li>어린이날</li>
        <li>08(토)</li>
        <li>부처님오신날</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AcademicSchedule",
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

.Buttons > button:last-of-type{
  margin-top: 0;
}

.month{
  margin-left: 40px;
  float: left;
  margin-top: 0;
}

ul{
  margin:20px 0 20px 120px; padding: 0; list-style: none;
}

ul li:nth-child(odd){
  color: #C3C3C3;
}

ul li:nth-child(even){
  margin-bottom: 10px;
  font-weight: bold;
  color:var(--text-color);
}

hr{
  margin: 0 0 0 40px;
  width: 80%;
  height: 2px;
  border: 0;
  background-color: #D5D5D5;
}
</style>