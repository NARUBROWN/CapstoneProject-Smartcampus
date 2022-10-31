<template>
  <h1>메인</h1>
  <div class="card" @click="handler">
    <h1>AI학부</h1>
  </div>
  <transition name="slide-fade">
    <div v-if="isShow">
      <div class="in_card" id="ai">
        <ul>
          <li>컴퓨터시스템 전공</li>
          <li>컴퓨터정보 전공</li>
          <li>정보보안 전공</li>
          <li>사물인터넷 전공</li>
          <li>드론영상 전공</li>
        </ul>
        <ul>
          <li>의료소프트웨어 전공</li>
          <li>빅데이터공학 전공</li>
        </ul>
      </div>
      <div class="buttons">
        <button>바로가기</button>
      </div>
    </div>
  </transition>
  <!-- <transition name="slide-fade">
    <div class="buttons" v-if="isShow">
      <button>바로가기</button>
    </div>
  </transition> -->

  <div class="card" @click="handler2">
    <h1>인문사회계열</h1>
  </div>
  <transition name="slide-fade">
    <div class="in_card" id="human" v-if="isShow2">
      <ul>
        <li>뉴미디어마케팅과</li>
        <li>회계정보학과</li>
        <li>유통물류학과</li>
        <li>유아교육과</li>
        <li>사회복지과</li>
      </ul>
      <ul>
        <li>항공관광과</li>
        <li class="in_class">- 호텔리조트전공</li>
        <li class="in_class">- 항공서비스전공</li>
        <li class="in_class">- 글로벌관광면세전공</li>
      </ul>
    </div>
  </transition>
  <transition name="slide-fade">
    <div class="buttons" v-if="isShow2">
      <button>바로가기</button>
    </div>
  </transition>

  <div class="card" @click="handler3">
    <h1>자연과학계열</h1>
  </div>
  <transition name="slide-fade">
    <div class="in_card" id="nature" v-if="isShow3">
      <ul>
        <li>간호학과</li>
        <li>보건의료행정과</li>
        <li>건강관리과</li>
        <li>송도바이오생명과</li>
        <li>코스메틱개발과</li>
      </ul>
      <ul>
        <li>호텔외식조리과</li>
        <li class="in_class">- 호텔외식조리전공</li>
        <li class="in_class">- 베이커리카페전공</li>
      </ul>
    </div>
  </transition>
  <transition name="slide-fade">
    <div class="buttons" v-if="isShow3">
      <button>바로가기</button>
    </div>
  </transition>

  <div class="card" @click="handler4">
    <h1>예술디자인계열</h1>
  </div>
  <transition name="slide-fade">
    <div class="in_card" id="art" v-if="isShow4">
      <ul>
        <li>실용음악과</li>
        <li>사진영상미디어과</li>
        <li>게임아트디자인과</li>
      </ul>
      <ul>
        <li>뷰티스타일리스트과</li>
        <li>인테리어디자인과</li>
      </ul>
    </div>
  </transition>
  <transition name="slide-fade">
    <div class="buttons" v-if="isShow4">
      <button>바로가기</button>
    </div>
  </transition>

  <div class="card" @click="handler5">
    <h1>미래창업학부</h1>
  </div>
  <transition name="slide-fade">
    <div class="in_card" id="found" v-if="isShow5">
      <ul>
        <li>외식조리창업과</li>
        <li>복지케어과</li>
        <li class="in_class">- 사회복지경영전공</li>
        <li class="in_class">- 아동보육상담전공</li>
      </ul>
      <ul>
        <li>마케팅빅데이터과</li>
        <li class="in_class">- 빅데이터마케팅 전공</li>
        <li class="in_class">- 드론전공</li>
      </ul>
    </div>
  </transition>
  <transition name="slide-fade">
    <div class="buttons" v-if="isShow5">
      <button>바로가기</button>
    </div>
  </transition>
</template>
  
<script>

export default {
  name: "CampusCommunity",
  data() {
    return {
      isShow: false,
      isShow2: false,
      isShow3: false,
      isShow4: false,
      isShow5: false,
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
    handler4() {
      this.isShow4 = !this.isShow4;
    },
    handler5() {
      this.isShow5 = !this.isShow5;
    },
  }
}
</script>
  
<style scoped>
h1 {
  margin: 15% 0 15% 0;
  text-align: center;
  color: var(--text-color)
}

.card {
  margin: 10px auto;
  border-radius: 10px;
  width: 95.56%;
  height: 90px;
  background-color: var(--card);
  
}

.card h1 {
  margin: 0;
  padding: 0;
  margin-top: 30px;
  text-align: center;
  color: #4b4b4b;
  font-size: 18pt;
  
}

.in_card {
  margin: 10px auto;
  padding: 5px 0;
  border-radius: 10px;
  width: 95.56%;
  height: 150px;
  background-color: var(--card);
}

.in_card > ul {
  float: left;
  list-style: none;
}

.in_card > ul > li{
  margin-bottom: 7px;
  font-size: 11pt;
  font-weight: bold;
  color: #FFFFFF;
}

.in_card > ul > .in_class {
  font-size: 9pt;
}

.buttons {
  text-align: center;
}

button {
  width: 95.56%;
  height: 30px;
  border: 0;
  border-radius: 10px;
  color: var(--time-text);
  background: var(--card);
  font-weight: bolder;
  font-size: 14px;
}

#ai {
  background-color: #34C759;
}

#human {
  background-color: #FF9500;
}

#nature {
  background-color: #007AFF;
}

#art {
  background-color: #FF3B30;
}

#found {
  background-color: #FFCC00;
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