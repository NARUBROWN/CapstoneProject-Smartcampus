<template>
  <div class="stuCard">
    <div>
      <img class="profilePhoto" v-bind:src="img" alt="프로필">
      <br>
    </div>
    <h1>{{ veux_userdata['name'] }}</h1>
    <h2>{{ veux_userdata['stu_rank'] }}</h2>
    <hr>
    <p>{{ veux_userdata['department'] }}</p>
    <a><img class="stuImg" src="@/assets/main/student/student.png" alt="학생증 아이콘"></a>
    <h3>학생카드</h3>
    <div>
        <VueBarcode v-bind:value="stu_number.toString()"
                    :options="{ height: 50, width: 2.5, background: `#0A84FF`, lineColor: `#FFFFFF`, fontSize: 18, font: 'NanumSquareNeo', fontOptions: 'bold', textMargin: 15}"></VueBarcode>
    </div>
    <div>
      <div class="blackBox">
        <img class="jeiuLogo" src="@/assets/student/logoWhite.png" alt="학교 로고">
      </div>
    </div>
  </div>
  <div class="underButtonsArea">
    <div class="underButtons">
      <button>
        <router-link to="/student-information-edit">프로필 수정</router-link>
      </button>
      <button @click="deleteProfile">회원 탈퇴</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import VueBarcode from '@chenfengyuan/vue-barcode';

export default {
  name: "StudentInformation",
  components: {
    VueBarcode
  },
  data() {
    return {
      img: "",
      stu_number: null
      /*user_data: [{
        name: "",
        rank: "",
        department: "",
        stu_number: ""
      }]*/
    };
  },
  computed: {
    veux_userdata() {
      return this.$store.state.user_data
    }
  },
  created() {
    this.img = process.env.VUE_APP_IP + '/profile_img/' + this.$store.state.user_data['img']
    this.stu_number = this.$store.getters.getUserStore.stu_number
  },
  mounted() {
  },
  methods: {
    /*// 백엔드에 데이터 요청하는 메소드
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
    }*/
    deleteProfile() {
      axios({
        method: "post", // 요청 방식
        url: process.env.VUE_APP_IP + "/user/delete", // 요청 주소
        data: {
          id: this.$store.state.user_data['id']
        }
      }).then((res) => {
        // 회원가입 성공
        console.log("삭제 성공" + res.data);

        this.$toast.success('계정을 성공적으로 삭제했습니다.', {
          position: 'bottom'
        });

        // 저장소 초기화
        this.$store.commit('logout')

        //메인화면으로 이동
        this.$router.push('/');
      })
          .catch((err) => {
            console.log(err); // 에러 처리 내용
          });

      this.$toast.error('알 수 없는 오류가 발생했습니다.', {
        position: 'bottom'
      });
    }
  }
}
</script>

<style scoped>

.stuCard {
  margin: 10% auto;
  border-radius: 10px;
  width: 80.56%;
  padding: 10px 0 0 0;
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
  margin: -69px 23px 0 0;
  padding: 0;
  width: 15%;
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

.stuCard > div > .blackBox {
  background: black;
  border-radius: 0 0 10px 10px;
  padding: 20px 20px;
}

.stuCard > div > .blackBox > .jeiuLogo {
  width: 17%;
}

.underButtonsArea {
  margin: 0 auto;
  text-align: center;
  width: 100%;
}

.underButtons > button {
  margin: 10px 5px 0 5px;
  width: 27%;
  height: 30px;
  border: 0;
  outline: 0;
  border-radius: 8px;
  color: var(--blue-card-text);
  background: var(--blue-card);
  font-weight: bolder;
  font-size: 13px;
  font-family: inherit;
}

</style>