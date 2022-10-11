<template>
  <button @click="test">테스트 정보 주입</button>

  <!-- 파일 업로드 부분 -->
  <form @submit.prevent="sendImg()">
    <input type="file" name="file" ref="user_img" v-on:change="fileSelect($event)">
    <input type="submit">
  </form>
  <!-- 출력 부분 -->
  <a>{{ this.result.location }}</a><br>
  <a>{{ this.result.building }}</a><br>
  <a>{{ this.result.department }}</a><br>
  <a>{{ this.result.name }}</a><br>
  <a>{{ this.result.description }}</a><br>
  <img v-bind:src="this.result.img">
</template>

<script>
import axios from "axios";

export default {
  name: "CampusNavigator",
  data() {
    return {
      input: {
        image: ''
      },
      result: {
        location: '',
        building: '',
        department: '',
        name: '',
        description: '',
        img: ''
      }
    };
  },
  methods: {
    fileSelect(event) {
      this.input.image = event.target.files[0];
    },
    async sendImg() {
      const formData = new FormData();
      formData.append('file', this.input.image);
      try {
        // 백엔드에 요청된 데이터를 가져오기
        let user = await axios({
          headers: {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*"
          },
          method: "post",
          url: process.env.VUE_APP_PYTHON + "/file_upload",
          data: formData
        })
        this.$toast.success('사진을 서버에 업로드 했습니다.', {
          position: 'bottom'
        });

        // 받아온 데이터 저장
        this.result = user.data[0]

        const path = user.data[0]['img'];
        this.result.img = require(`../../assets/campus_navigator/${path}.png`);

      } catch (e) {
        console.log("새로운 데이터를 불러오지 못했습니다. " + e);

        this.$toast.error('서버에 연결되지 않았습니다.', {
          position: 'bottom'
        });

      }
    },
    test() {
      this.result = {
        location: '인천재능대학교 송도캠퍼스',
        building: '강의동',
        department: 'AI학부',
        name: '로비',
        description: '정수기와 화장실, 계단이 있는 공간입니다.',
        img: 'ThirdFloor_Lobby'
      }
      this.result.img = require(`../../assets/campus_navigator/ThirdFloor_Lobby.png`);
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