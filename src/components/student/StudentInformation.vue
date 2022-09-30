<template>
  <div class="stuCard" v-for="user in user_data" v-bind:key="user">
    <div>
      <!-- <img class="profilePhoto" src="@/assets/student/profile.png" alt="프로필"> -->
      <br>
    </div>
    <h1>{{ user.name }}</h1>
    <h2>{{ user.rank }}</h2>
    <hr>
    <p>{{ user.department }}</p>
    <a><img class="stuImg" src="@/assets/student/stuIcon.png" alt="학생증 아이콘"></a>
    <h3>학생카드</h3>
    <div>
      <!-- <img class="barcode" src="@/assets/student/barcode.png" alt="바코드"> -->
      <h3>{{ user.stu_number }}</h3>
    </div>
    <div>
      <img class="jeiuLogo" src="@/assets/student/logoWhite.png" alt="학교 로고">
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "StudentInformation",
  data() {
    return {
      user_data: [{
        name: "",
        rank: "",
        department: "",
        stu_number: ""
      }]
    };
  },
  created() {
    this.req_data();
  },
  methods: {
    // 백엔드에 데이터 요청하는 메소드
    async req_data() {
      try {
        // 백엔드에 요청된 데이터를 가져오기
        let user = await axios.get(process.env.VUE_APP_IP + "/proflie");
        console.log('user 데이터를 요청하였습니다. ');
        this.user_data = user.data;
        console.log(this.user_data)
      } catch (e) {
        console.log("새로운 데이터를 불러오지 못했습니다. " + e);
      }
    }
  }
}
</script>

<style scoped>

.stuCard {
  margin: 10% auto;
  border-radius: 10px;
  width: 80.56%;
  padding: 10px 0 20px 0;
  background-color: var(--blue-card);
  color: var(--blue-card-text);
}

.stuCard > hr {
  margin: 0 0 0 25px;
  width: 50%;
  border: var(--blue-card-hr) solid 0.5px;
}

.stuCard > h1 {
  float: left;
  margin: 20px 0 0 0;
  padding: 0 5px 0 25px;
  font-size: 15pt;
  font-weight: bold;
  color: var(--blue-card-text);
}

.stuCard > h2 {
  margin: 20px 0 5px 0;
  font-size: 15pt;
  font-weight: bold;
  color: var(--blue-card-text);
}

.stuCard > div > h3 {
  margin: 0 0 5px 0;
  font-size: 15pt;
  font-weight: bold;
  color: var(--blue-card-text);
}

.stuCard > p {
  margin: 7px 0 20px 0;
  padding: 0 0 0 25px;
  font-size: 9pt;
  color: var(--blue-card-text);
}

.stuCard > a > .stuImg {
  float: right;
  margin: -66px 25px 0 0;
  padding: 0;
  width: 12%;
}

.stuCard > h3 {
  float: right;
  margin: -30px 28px 0 0;
  font-size: 8pt;
  font-weight: bold;
  color: var(--blue-card-text);
}

.stuCard > div {
  text-align: center;
  margin: 20px 0 0 0;
}

.stuCard > div > .profilePhoto {
  width: 132px;
  height: 170px;
  background-color: var(--text-color);
  border-radius: 10px;
}

.stuCard > div > .jeiuLogo {
  width: 17%;
}

.stuCard > div > .barcode {
  width: 70%;
  margin: 10px;
  border-radius: 5px;
}

</style>