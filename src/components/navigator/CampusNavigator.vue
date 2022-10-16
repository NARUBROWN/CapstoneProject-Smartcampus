<template>
  <button @click="test">테스트 정보 주입</button>

  <!-- 파일선택 전 -->
  <div class="firstAction" v-if="selectButton">
    <form @submit.prevent="sendImg()">
      <label for="file" v-on:change="fileSelect($event)"><h1>{{ fileSelectMessage }}</h1></label>
      <input type="file" name="file" id="file" ref="user_img" v-on:change="fileSelect($event)" class="displayNone">
    </form>
    <img src="@/assets/campus_navigator/TakePhoto.svg" alt="사진 업로드">
  </div>

  <!-- 파일선택 후 -->
  <div class="secondActionArea" v-if="secondActionArea">
    <form @submit.prevent="sendImg()">
      <div class="secondAction">
        <label for="file" v-on:change="fileSelect($event)"><h1>{{ fileSelectMessage }}</h1></label>
        <input type="file" name="file" id="file" ref="user_img" v-on:change="fileSelect($event)" class="displayNone">
        <img src="@/assets/campus_navigator/TakePhoto.svg" alt="전송">
      </div>
      <div class="sendAction">
        <label for="submit"><h1>보내기</h1></label>
        <input type="submit" id="submit">
        <img src="@/assets/campus_navigator/Submit.svg" alt="전송">
      </div>
    </form>
  </div>

  <div class="card">
    <div class="result">
      <h1>결과</h1>
      <img src="@/assets/campus_navigator/Empty.png" alt="사진을 업로드 해주세요" v-if="emptyImg">
      <img src="@/assets/campus_navigator/Load.png" alt="사진을 업로드 해주세요" v-if="load">
      <!-- 출력 부분 -->
      <h2><a>{{ this.result.department }}</a>
        <a>{{ this.result.name }}</a></h2>
      <h3><a>{{ this.result.location }}</a>
        <a> {{ this.result.building }}</a></h3>
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
      fileSelectMessage: '사진 업로드하기',
      selectButton: true,
      secondActionArea: false,
      emptyImg: true,
      load: false,
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
      //input file 태그.
      var file = document.getElementById('file');
      //파일 경로.
      var filePath = file.value;
      //전체경로를 \ 나눔.
      var filePathSplit = filePath.split('\\');
      //전체경로를 \로 나눈 길이.
      var filePathLength = filePathSplit.length;
      //마지막 경로를 .으로 나눔.
      var fileNameSplit = filePathSplit[filePathLength - 1].split('.');
      //파일명 : .으로 나눈 앞부분
      var fileName = fileNameSplit[0];
      //파일 확장자 : .으로 나눈 뒷부분
      var fileExt = fileNameSplit[1];

      if (fileName === "") {
        console.log("비어있습니다.")
      } else {
        if (fileExt !== "jpg") {
          this.fileSelectMessage = "다시 찍기"
          this.$toast.error('지원하지 않는 파일 형식입니다.', {
            position: 'bottom'
          });
        } else {
          this.secondActionArea = true
          this.selectButton = false
          this.fileSelectMessage = fileName.substr(0, 3) + "." + fileExt
          this.input.image = event.target.files[0];
        }
      }
    },
    // 파일 전송
    async sendImg() {
      const formData = new FormData();
      formData.append('file', this.input.image);

      // 기존 결과 값 초기화
      this.result = []

      try {
        //메소드가 실행되면, 로딩화면 보여주기
        this.load = true
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

        // 받아온 데이터 저장
        this.result = user.data[0]

        const path = user.data[0]['img'];
        this.result.img = require(`../../assets/campus_navigator/${path}.png`);

        //파일 업로드 버튼 재 활성화
        this.fileSelectMessage = "재촬영"

        //사진을 업로드 해주세요 사진 비활성화
        this.emptyImg = false

      } catch (e) {
        console.log("새로운 데이터를 불러오지 못했습니다. " + e);

        this.$toast.error('서버에 연결되지 않았습니다.', {
          position: 'bottom'
        });
      }
      // 메소드가 끝났으면, 로딩 화면 끄기
      this.load = false
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
      this.emptyImg = false
    }
  }
}
</script>

<style scoped>

.card {
  margin: 0 auto;
  border-radius: 10px;
  width: 95.56%;
  padding: 10px 0 10px 0;
  background-color: var(--card);
  color: var(--text-color);
}

.card > .result > h1 {
  margin: 10px 0 15px 0;
  padding: 0 0 0 20px;
  font-size: 10pt;
  font-weight: bold;
}

.file label,
input[type="submit"] {
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

.displayNone {
  display: none;
}

.firstAction {
  margin: 10px auto 0;
  border-radius: 10px 10px 0 0;
  width: 85.56%;
  height: 40px;
  padding: 2px 0 2px 0;
  background-color: #FF9500;
}

.firstAction > form > label > h1 {
  float: left;
  margin: 10px 0 0 0;
  padding: 0 5px 0 25px;
  font-size: 15pt;
  font-weight: bold;
  color: var(--blue-card-text);
}

.firstAction > img {
  float: right;
  margin: 5px 25px 0 0;
  padding: 0;
  width: 9%;
  filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(181deg) brightness(104%) contrast(102%);

}

.secondAction {
  border-radius: 10px 10px 0 0;
  width: 45.78%;
  height: 40px;
  padding: 2px 0 2px 0;
  background-color: #FF9500;
  display: inline-block;
  margin: 0 5px 0 8px;
}

.secondAction > label > h1 {
  float: left;
  margin: 10px 0 0 0;
  padding: 0 5px 0 25px;
  font-size: 15pt;
  font-weight: bold;
  color: var(--blue-card-text);
}

.secondAction > img {
  float: right;
  margin: 5px 25px 0 0;
  padding: 0;
  width: 18%;
  filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(181deg) brightness(104%) contrast(102%);
}

.sendAction {
  border-radius: 10px 10px 0 0;
  width: 45.78%;
  height: 40px;
  padding: 2px 0 2px 0;
  background-color: #34C759;
  display: inline-block;
  margin: 0 5px 0 5px;
}

.sendAction > label > h1 {
  float: left;
  margin: 10px 0 0 0;
  padding: 0 5px 0 25px;
  font-size: 15pt;
  font-weight: bold;
  color: var(--blue-card-text);
}

.sendAction > img {
  float: right;
  margin: 6px 25px 0 0;
  padding: 0;
  width: 19%;
  filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(181deg) brightness(104%) contrast(102%);
}

.secondActionArea {
  width: 85.56%;
  height: 40px;
  margin: 4px auto;
}

</style>