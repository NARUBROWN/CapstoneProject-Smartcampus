<template>
  <div class="menu" @click="handler">
    <span>
      <h1>캠퍼스 소개<p>About Campus</p></h1>
    </span>
  </div>
  <transition name="slide-fade">
    <div class="card" v-if="isShow">
      <h1>송림캠퍼스 소개</h1>
      <div class="uContent" id="songlim">
        <div class="addArea">
          <div class="add">주소</div>
          <p class="detailAdd">22573 인천광역시 동구 재능로 178(송림동 122번지)</p>
        </div>
      </div>
    </div>
  </transition>
  <transition name="slide-fade">
    <div class="card" v-if="isShow">
      <h1>송도캠퍼스 소개</h1>
      <div class="uContent" id="songdo">
        <div class="addArea">
          <div class="add">주소</div>
          <p class="detailAdd">21987 인천 연수구 송도교육로 111-15(송도동 196-1)</p>
        </div>
      </div>
    </div>
  </transition>

  <div class="menu" id="menu2" @click="handler2">
    <span>
      <h1>이사장 소개<p>About Board President</p></h1>
    </span>
  </div>
  <transition name="slide-fade">
    <div class="card" v-if="isShow2">
      <h1>이사장 소개</h1>
      <div class="uContent2">
        <h2>교육을 통한 보다 나은 삶을 추구합니다</h2>
        <div class="scrollBar">
            인천재능대학교는<br>
            "인간은 무한한 가능성과 자발적 본성에 기초하여 올바른 교육환경만 주어지면 누구든지 스스로 창의적인 인재로 변화할 수 있다"
            고 믿는 '재능교육스스로학습철학' 을 실현하는 곳입니다.<br>
            지식정보화 사회에서 대학은 창의력을 키워주고, 다양한 정보와 폭넓은 학습을 통하여 새로운 지식을 창출할 수 있는 인재를 양성해야 합니다.<br>
            인천재능대학교는 종합교육문화기업인 재능그룹의 전폭적인 지원 아래,
            첨단 실습장비를 갖추고 사회가 필요로 하는 실무 능력을 배양함은 물론,
            해외 유명 대학에 어학연수를 비롯한 학술교류를 시행하고 있습니다. 또한 자율적 학습환경을 구축하여,
            각자의 재능과 창의력을 최대한 계발하도록 지원함으로써 실무와 이론을 두루 갖춘 전문 직업인의 산실이 되고 있습니다.<br>
            인천재능대학교는 재능교육·재능방송·재능인쇄·재능유통·재능e아카데미·재능셀프러닝 등의 계열사 및 국내 우수기업과의 산학협동 체제를 구축하여 졸업 후 폭넓은 직업 선택의 기회를 제공하는 등 취업지원시스템을 갖추고 있습니다.<br>
            재능그룹은 인천재능대학교의 발전과 재능대학인의 보다 밝은 미래를 위해
            적극적인 성원과 지원을 아끼지 않을 것입니다.<br>
            감사합니다.
        </div>
      </div>
    </div>
  </transition>
  <div class="menu" id="menu3" @click="handler3">
    <span>
      <h1>총장 소개<p>About President</p></h1>
    </span>
  </div>
  <transition name="slide-fade">
    <div class="card" v-if="isShow3">
      <h1>총장 소개</h1>
      <div class="uContent3">
        <h2>인공지능이 만드는 미래를 준비합시다.</h2>
        <div class="scrollBar" id="president">
          인공지능은 이미 우리 경제와 사회 구석구석에, 그리고 우리의 삶 속에 깊숙이 들어와 있습니다.<br>
          인공지능 시대를 살아갈 미래세대는 인공지능을 잘 알고 활용해야 합니다. 어떠한 직업이나 업무에 종사하든지, 인공지능으로 자신의 타고난 능력을 증강해야 합니다.<br>
          인천재능대학교는 “인공지능과 바이오 선도 (AI & Bio Frontier) 대학” 으로서 직업의 미래를 개척해 나가고 있습니다.<br>
          인천재능대학교는 인공지능을 쉽게 잘 가르치고, 잘 활용하는 대학입니다. 모든 학생들이 자신의 업무 영역에서 데이터를 잘 모으고, 관리하여 활용하는 능력을 갖추게 될 것입니다.<br>
          즉 인공지능 시대를 앞장 서는 데이터 인재가 될 것입니다.<br>
          인천재능대학교에서는 학생들이 좋은 일자리에 취업하도록 자율·창의·봉사의 일자리 역량과 소명으로서 직업관을 갖추도록 교육하고 있습니다.<br>
          모든 학생들이 꿈을 갖고 열정으로 스스로 배울 수 있도록 많은 기회를 제공합니다. 글로벌 소양을 쌓을 수 있도록 외국 대학과 기관과도 긴밀히 협력하고 있습니다.<br>
          인천재능대학교에서 여러분의 미래를 준비하시길 바랍니다.<br>
        </div>
      </div>
    </div>
  </transition>
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
    width:83.95%;
    height:120px;
    margin: 0 auto;
    border-radius: 20px;
    background-size: cover;
    background-image: url(@/assets/introduce/test1.png);
    position: relative;
}

#menu2{
    background-image: url(@/assets/introduce/test2.png);
    margin-top: 10px;
    margin-bottom: 10px;
}

#menu3{
    background-image: url(@/assets/introduce/test3.png);
}

.menu h1{
    font-size: 18pt;
    color: white;
    margin-top: 70px;
    margin-left: 20px;
    font-weight: 500;
    line-height: 15px;
    position: absolute;
    font-weight: bold;
}

.menu h1 p{
    font-size: 8pt;
    line-height: 0px;
    margin-left: 3px;
    font-weight: normal;
}

.card {
  margin: 10px auto;
  border-radius: 10px;
  width: 83.95%;
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

.uContent2{
  margin: 20px auto;
  text-align: center;
  width: 85%;
  height: 300px;
  border-radius: 10px;
  background-image: url(@/assets/introduce/chairman.png);
  background-size: contain;
  background-repeat: no-repeat;
}

.uContent2 > h2{
  position: absolute;
  margin: 155px 0 10px 0;
  font-size: 10pt;
  font-weight: bold;
}

.uContent3 > h2{
  position: absolute;
  margin: 155px 0 10px 0;
  font-size: 10pt;
  font-weight: bold;
  text-align: left;
}

.uContent3{
  margin: 20px auto;
  text-align: center;
  width: 85%;
  height: 300px;
  border-radius: 10px;
  background-image: url(@/assets/introduce/president.png);
  background-size: contain;
  background-repeat: no-repeat;
}

#songdo{
  background-image: url(@/assets/introduce/songdo.png);
}

.addArea {
  margin: 0 auto;
  text-align: center;
  width: 278px;
  height: 50px;
  background-color: rgba(50,50,50,0.7);
  color: white;
  border-radius: 0 0 10px 10px;
  margin-top: 250px;
  position: absolute;
}

.add{
  width: 30px;
  line-height: 20px;
  border-radius: 8px;
  font-size: 8pt;
  position: absolute;
  margin-top: 15px;
  margin-left: 10px;
  font-weight: bold;
  background-color: red;
}

.detailAdd{
  width: 100%;
  font-size: 7pt;
  margin-left: 20px;
  margin-top: 18px;
  font-weight: bold;
}

.scrollBar{ 
  position: absolute;
  width: 278px;
  height: 120px;
  overflow-y: scroll;
  font-size: 10pt;
  margin-top: 180px;
  text-align: left;
}

.scrollBar::-webkit-scrollbar{
    width: 10px;  /* 스크롤바의 너비 */
}

.scrollBar::-webkit-scrollbar-thumb{
    height: 30%; /* 스크롤바의 길이 */
    background: #F6B558; /* 스크롤바의 색상 */
    border-radius: 10px;
}

#president::-webkit-scrollbar-thumb{
  background: #EFD054;
}

.scrollBar::-webkit-scrollbar-track{
    background: #F2F2F7;  /*스크롤바 뒷 배경 색상*/
}

.slide-fade-enter-active{
  transition: all 0.4s ease-out;
}

.slide-fade-leave-active{
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to{
  transform: translateY(20px);
  opacity: 0;
}
</style>