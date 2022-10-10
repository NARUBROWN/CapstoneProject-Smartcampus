<template>
  <div class="stuCard">
    <div>
      <!-- <img class="profilePhoto" src="@/assets/student/profile.png" alt="프로필"> -->
      <br>
    </div>
    {{ user_data }}
    <form @submit.prevent="updateProfile">
      <input type="text"
             v-model="user_data['name']"
             name="name"
             v-bind:placeholder="veux_userdata['name']"
      />
      <input type="text"
             v-model="user_data['stu_rank']"
             name="rank"
             v-bind:placeholder="veux_userdata['stu_rank']"
      />
      <input type="text"
             v-model="user_data['department']"
             name="department"
             v-bind:placeholder="veux_userdata['department']"
      />
      <input type="text"
             v-model="user_data['password']"
             name="password"
             v-bind:placeholder="veux_userdata['password']"
      />
      <button>확인</button>
    </form>
    <h1>{{ veux_userdata['name'] }}</h1>
    <h2>{{ veux_userdata['stu_rank'] }}</h2>
    <hr>
    <p>{{ veux_userdata['department'] }}</p>
    <a><img class="stuImg" src="@/assets/student/stuIcon.png" alt="학생증 아이콘"></a>
    <h3>학생카드</h3>
    <div>
      <!-- <img class="barcode" src="@/assets/student/barcode.png" alt="바코드"> -->
      <h3>{{ veux_userdata['stu_number"'] }}</h3>
    </div>
    <div>
      <div class="blackBox">
        <img class="jeiuLogo" src="@/assets/student/logoWhite.png" alt="학교 로고">
      </div>
    </div>
  </div>
  <div class="underButtonsArea">
    <div class="underButtons">
      <button @click="updateProfile">확인</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "StudentInformation",
  data() {
    return {
      user_data: {
        name: '',
        stu_num: '',
        department: '',
        password: '',
        stu_rank: ''
      }
    };
  },
  computed: {
    veux_userdata() {
      return this.$store.state.user_data
    }
  },
  methods: {
    updateProfile() {
      axios({
        method: "post", // 요청 방식
        url: process.env.VUE_APP_IP + "/post/profile_update", // 요청 주소
        data: {
          id: this.$store.state.user_data['id'],
          name: this.user_data['name'],
          department: this.user_data['department'],
          password: this.user_data['password'],
          rank: this.user_data['stu_rank']
        }
      }).then((res) => {
        // 회원정보 수정
        console.log("수정 성공" + res.data);

        // 수정된 정보를 Vuex Store에 저장하기
        this.$store.commit('login', this.user_data)

        this.$toast.success('계정을 성공적으로 수정했습니다.', {
          position: 'bottom'
        });

      })
          .catch((err) => {
            console.log(err); // 에러 처리 내용

            this.$toast.error('알 수 없는 오류가 발생했습니다.', {
              position: 'bottom'
            });
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

.stuCard > div > .blackBox {
  background: black;
  border-radius: 0 0 10px 10px;
  padding: 20px 20px;
}

.stuCard > div > .blackBox > .jeiuLogo {
  width: 17%;
}

.stuCard > div > .blackBox > .barcode {
  width: 70%;
  margin: 10px;
  border-radius: 5px;
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
}

</style>