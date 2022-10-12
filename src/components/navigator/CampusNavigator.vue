<template>
  <button @click="test">테스트 정보 주입</button>
  <div class="card">
    <h1>사진 업로드</h1>
    <div class="ButtonsContent">
      <div class="ButtonsArea">
        <!-- 파일 업로드 부분 -->
        <form @submit.prevent="sendImg()">
          <div class="file">
            <label for="file">{{ fileSelectMessage }}</label>
            <div class="zzz"></div>
            <input type="file" name="file" id="file" ref="user_img" v-on:change="fileSelect($event)" class="test">
            <label for="submit">업로드</label>
            <input type="submit" id="submit">
          </div>
        </form>
      </div>
    </div>
  </div>

  <div class="card2" v-if="resultCard">
    <div class="result">
      <h1>결과</h1>
      <!-- 출력 부분 -->
      <h2><a>{{ this.result.department }}</a>
        <a>{{ this.result.name }}</a></h2>
      <h3><a>{{ this.result.location }}</a>
        <a>{{ this.result.building }}</a></h3>
      <img v-bind:src="this.result.img">
      <p><a>{{ this.result.description }}</a></p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CampusNavigator",
  data() {
    return {
      fileSelectMessage: '파일 선택',
      resultCard: false,
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
    // 파일 전송
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

        //결과창 출력
        this.resultCard = true

        //파일 업로드 버튼 재 활성화
        this.fileSelectMessage = "파일 선택"

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

.card > .result > h1 {
  margin: 10px 0 15px 0;
  padding: 0 0 0 20px;
  font-size: 10pt;
  font-weight: bold;
}

.card2 {
  margin: 10px auto;
  border-radius: 10px;
  width: 95.56%;
  height: 500px;
  padding: 10px 0 10px 0;
  background-color: var(--card);
  color: var(--text-color);
}
.card2 > .result > h1 {
  margin: 10px 0 15px 0;
  padding: 0 0 0 20px;
  font-size: 10pt;
  font-weight: bold;
}
.ButtonsArea {
  margin: 0 auto;
  text-align: center;
  width: 100%;
  height: 100px;
}
.Buttons {
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
}
.file label,
input[type="submit"]{
  margin: 10px 5px 0 5px;
  display: inline-block;
  width: 37.5%;
  height: 35px;
  background-color: var(--blue-card);
  color: var(--blue-card-text);
  cursor: pointer;
  line-height: 35px;
  border: 0;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bolder;
  margin-bottom: 10px;
}
.file input[type="file"]{
  position: absolute;
  margin-top: 65px;
  margin-left: -47%;
}
#submit{
  display: none;
}
.zzz{
  position: absolute;
  width: 70px;
  height: 30px;
  /* background-color: var(--card); */
  z-index: 1;
  margin-left: 0px;
  margin-top: 5px;
}
.result > img{
  position: absolute;
  width: 320px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10px;
}
.result > h2{
  font-size: 20pt;
  margin-left: 40px;
  margin-top: -5px;
  font-weight: bold;
}
.result > h3{
  font-size: 11pt;
  font-weight: bold;
  color: var(--line);
  margin-left: 40px;
  margin-top: -20px;
}

.result > h3 > a {
  border-bottom: 1px solid var(--line);
}

.result > p {
  font-size: 11pt;
  font-weight: bold;
  color: var(--line);
  margin-left: 40px;
  margin-top: 350px;
}

.test {
  display: none;
}

</style>