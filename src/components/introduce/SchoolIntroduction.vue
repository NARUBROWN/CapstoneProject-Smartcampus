<template>
  <div class="menu" @click="handler">
    <span>
      <h1>캠퍼스 소개<p>About Campus</p></h1>
    </span>
  </div>
  <div class="card" v-if="isShow">
    <h1>송림캠퍼스 소개</h1>
    <div class="uContent" id="songlim">
      <div class="addArea">
        <div class="add">주소</div>
        <p class="detailAdd">22573 인천광역시 동구 재능로 178(송림동 122번지)</p>
      </div>
    </div>
  </div>
  <div class="card" v-if="isShow">
    <h1>송도캠퍼스 소개</h1>
    <div class="uContent" id="songdo">
      <div class="addArea">
        <div class="add">주소</div>
        <p class="detailAdd">21987 인천 연수구 송도교육로 111-15(송도동 196-1)</p>
      </div>
    </div>
  </div>

  <div class="menu" id="menu2" @click="handler2">
    <span>
      <h1>이사장 소개<p>About Board President</p></h1>
    </span>
  </div>
  <div class="card" v-if="isShow2">
    <h1>송림캠퍼스 소개</h1>
    <div class="uContent" id="songlim">
      <div class="addArea">
        <div class="add">주소</div>
        <p class="detailAdd">22573 인천광역시 동구 재능로 178(송림동 122번지)</p>
      </div>
    </div>
  </div>
  <div class="card" v-if="isShow2">
    <h1>송도캠퍼스 소개</h1>
    <div class="uContent" id="songdo">
      <div class="addArea">
        <div class="add">주소</div>
        <p class="detailAdd">21987 인천 연수구 송도교육로 111-15(송도동 196-1)</p>
      </div>
    </div>
  </div>

  <div class="menu" id="menu3" @click="handler3">
    <span>
      <h1>총장 소개<p>About President</p></h1>
    </span>
  </div>
  <div class="card" v-if="isShow3">
    <h1>송림캠퍼스 소개</h1>
    <div class="uContent" id="songlim">
      <div class="addArea">
        <div class="add">주소</div>
        <p class="detailAdd">22573 인천광역시 동구 재능로 178(송림동 122번지)</p>
      </div>
    </div>
  </div>
  <div class="card" v-if="isShow3">
    <h1>송도캠퍼스 소개</h1>
    <div class="uContent" id="songdo">
      <div class="addArea">
        <div class="add">주소</div>
        <p class="detailAdd">21987 인천 연수구 송도교육로 111-15(송도동 196-1)</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SchoolIntroduction",
  data() {
    return {
      isShow: false,
      isShow2: false,
      isShow3: false, // true : 새로고침 시 바로 보임, false : 새로고침 시 클릭해야 보임!
    };
  },
  methods: {
    handler() {
      this.isShow = !this.isShow;
    },
    handler2() {
      this.isShow2 = !this.isShow2;
    },
    handler3() {
      this.isShow3 = !this.isShow3;
    },
  },
  };
</script>

<style scoped>
.menu{
    width:90%;
    height:140px;
    margin: 0 auto;
    border-radius: 20px;
    background-size: cover;
    background-image: url(@/assets/introduce/test1.png);
    position: relative;
}

#menu2{
    background-image: url(@/assets/introduce/test2.png);
    margin-top: 15px;
    margin-bottom: 15px;
}

#menu3{
    background-image: url(@/assets/introduce/test3.png);
}

.menu h1{
    font-size: 20pt;
    color: white;
    margin-top: 80px;
    margin-left: 20px;
    font-weight: 500;
    line-height: 20px;
    position: absolute;
    font-weight: bold;
}

.menu h1 p{
    font-size: 10pt;
    line-height: 0px;
    margin-left: 5px;
    font-weight: normal;
}

.card {
  margin: 10px auto;
  border-radius: 10px;
  width: 90%;
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

.uContent{
  margin: 20px auto;
  text-align: center;
  width: 85%;
  height: 300px;
  border-radius: 10px;
  background-image: url(@/assets/introduce/songlim.png);
  background-size: cover;
}

#songdo{
  background-image: url(@/assets/introduce/songdo.png);
}

.addArea {
  margin: 0 auto;
  text-align: center;
  width: 76.5%;
  height: 50px;
  background-color: rgba(50,50,50,0.7);
  color: white;
  border-radius: 0 0 10px 10px;
  margin-top: 250px;
  position: absolute;
}

.add{
  width: 38px;
  line-height: 25px;
  border-radius: 8px;
  font-size: 10pt;
  position: absolute;
  margin-top: 11px;
  margin-left: 10px;
  font-weight: bold;
  background-color: red;
}

.detailAdd{
  width: 100%;
  font-size: 8pt;
  margin-left: 20px;
  margin-top: 18px;
  font-weight: bold;
}
</style>