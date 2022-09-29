<template>
  <div @click="test" class="menu">
    <span>
      <h1>캠퍼스 소개<p>About Campus</p></h1>
    </span>
    <ul class="sub">
      <li>
        <a href="#"> 
          <h2>송림캠퍼스 소개</h2>
          <div class="uImg">
            <div class="adBtn">주소</div>
            <div class="deBar">
              <p>22573 인천광역시 동구 재능로 178(송림동 122번지)</p>
            </div>
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <h2>송도캠퍼스 소개</h2>
          <div class="uImg2">
            <div class="adBtn">주소</div>
            <div class="deBar">
              <p>21987 인천 연수구 송도교육로 111-15(송도동 196-1)</p>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>

  <div @click="test" class="menu">
    <span>
      <h1>이사장 소개<p>About Board President</p></h1>
    </span>
    <ul class="sub">
      <li>
        <a href="#"> 
          <h2>송림캠퍼스 소개</h2>
          <div class="uImg">
            <div class="adBtn">주소</div>
            <div class="deBar">
              <p>22573 인천광역시 동구 재능로 178(송림동 122번지)</p>
            </div>
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <h2>송도캠퍼스 소개</h2>
          <div class="uImg2">
            <div class="adBtn">주소</div>
            <div class="deBar">
              <p>21987 인천 연수구 송도교육로 111-15(송도동 196-1)</p>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>

  <div @click="test" class="menu">
    <span>
      <h1>총장 소개<p>About President</p></h1>
    </span>
    <ul class="sub">
      <li>
        <a href="#"> 
          <h2>송림캠퍼스 소개</h2>
          <div class="uImg">
            <div class="adBtn">주소</div>
            <div class="deBar">
              <p>22573 인천광역시 동구 재능로 178(송림동 122번지)</p>
            </div>
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <h2>송도캠퍼스 소개</h2>
          <div class="uImg2">
            <div class="adBtn">주소</div>
            <div class="deBar">
              <p>21987 인천 연수구 송도교육로 111-15(송도동 196-1)</p>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SchoolIntroduction",
}
</script>

<style scoped>
.menu{
    width:90%;
    height:140px;
    margin: 0 auto;
    border-radius: 20px;
    background-size: cover;
    background-image: url(@/assets/introduce/test1.png);
}
.menu:nth-of-type(3){
    background-image: url(@/assets/introduce/test2.png);
}
.menu:nth-of-type(4){
    background-image: url(@/assets/introduce/test3.png);
}
.menu h1{
    font-size: 20pt;
    color: white;
    margin-top: 60px;
    margin-left: 20px;
    font-weight: 500;
    position: absolute;
}
.menu h1 p{
    font-size: 10pt;
    line-height: 0px;
    margin-left: 5px;
}
.menu h2{
    font-size: 24pt;
    font-weight: bold;
    margin-top: 7%;
    margin-right: 55%;
}
.menu .uImg{
    width: 80%;
    height: 500px;
    margin: 5% auto;
    border-radius: 15px;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
}
.menu .uImg2{
    width: 80%;
    height: 500px;
    margin: 5% auto;
    border-radius: 15px;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
}
.menu>.sub{
    position: relative;
    height:0;
    list-style:none;
    overflow:hidden;
    transition:height ease-out 1s 0s;
}
.menu>.sub li{
    background-color: whitesmoke;
    border-top:1px white solid;
    border-radius: 25px;
    height: 700px;
    margin-top: 20px;
}
.menu>.sub li>a{
    text-decoration:none;
    color:black;
}
.menu>.sub .deBar{
    background-color: rgba(50,50,50,0.7);
    width: 100%;
    height: 50px;
    color: white;
    position: absolute;
    margin-top: 410px;
    border-radius: 0 0 20px 20px;
    padding-top: 40px;
}
.menu>.sub .deBar p{
    font-size: 14pt;
    margin-left: 50px;
}
.menu>.sub .adBtn{
    background-color: red;
    width: 60px;
    height: 40px;
    border-radius: 10px;
    position: absolute;
    color: white;
    line-height: 40px;
    margin-top: 440px;
    margin-left: 40px;
    z-index: 1;
}
</style>