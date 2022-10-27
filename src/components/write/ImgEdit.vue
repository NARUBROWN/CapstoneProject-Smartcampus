<template>
  <form @submit.prevent="updateProfile">
    <div class="signUp_card">
      <h1>사진 선택</h1>
      <div class="signUp_wrap">
        <div class="filebox">
          <input class="upload-name" v-bind:value="fileSelectMessage">
          <input type="file" name="userfile" id="file" ref="user_img" v-on:change="fileSelect($event)">
          <label class="profile_label" for="file">{{ fileSelectButton }}</label>
          <label class="header">게시글 사진 수정</label>
          <div class="highLight"></div>
        </div>
      </div>
    </div>
    <div class="underButtonsArea">
      <div class="underButtons">
        <button type="submit" v-if="sendButton" @click="updateImage">확인</button>
        <button @click="back()">취소</button>
      </div>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "ImgEdit",
  data() {
    return {
      fullLocationImg: '',
      selectedImg: '',
      fullFileName: '',
      sendButton: false,
      user_data: {
        img: null,
        id: null,
      },
      fileSelectMessage: '사진 업로드하기',
      fileSelectButton: '파일 선택'
    };
  },
  created() {
    // 게시글 아이디를 받아옴
    this.user_data.id = this.$route.query.number
  },
  computed: {
    vuex_userdata() {
      return this.$store.state.user_data
    }
  },
  methods: {
    fileSelect(event) {
      //input file 태그.
      const file = document.getElementById('file');
      //파일 경로.
      const filePath = file.value;
      //전체경로를 \ 나눔.
      const filePathSplit = filePath.split('\\');
      //전체경로를 \로 나눈 길이.
      const filePathLength = filePathSplit.length;
      //마지막 경로를 .으로 나눔.
      const fileNameSplit = filePathSplit[filePathLength - 1].split('.');
      //파일명 : .으로 나눈 앞부분
      const fileName = fileNameSplit[0];
      //파일 확장자 : .으로 나눈 뒷부분
      const fileExt = fileNameSplit[1];

      // this.data()에 있는 fileSelectMessage에 선택된 이름의 파일이름을 자르고 확장명을 추가한 것을 대입
      this.fileSelectMessage = fileName.substr(0, 7) + "." + fileExt
      // 버튼 데이터를 다시 선택으로 변경
      this.fileSelectButton = "다시 선택"

      this.selectedImg = event.target.files[0];
      this.user_data.img = fileName + "." + fileExt;

      // 파일이 없으면 업로드 버튼 비활성화
      this.sendButton = filePath !== "";
    },
    updateImage() {
      const formData = new FormData();
      formData.append('community_image', this.selectedImg);
      formData.append('id', this.$route.query.number);
      formData.append('table', this.$store.getters.getUserStore.table)
      axios({
        method: "post", // 요청 방식
        url: process.env.VUE_APP_IP + "/community/update-photo",
        data: formData
      }).then(() => {
      })
          .catch((err) => {
            console.log(err); // 에러 처리 내용

            this.$toast.error(`알 수 없는 오류가 발생했습니다. <br> ${err} `, {
              position: 'bottom'
            });
          });
      this.$router.push(`/read-contents?type=community&table=${this.$store.getters.getUserStore.table}&number=${this.$route.query.number}&request=reset`);
    },
    back() {
      this.$router.push(`/edit-contents?table=${this.$store.getters.getUserStore.table}&number=${this.$route.query.number}`);
    }
  }
}
</script>

<style scoped>

.signUp_card {
  margin: 10px auto;
  border-radius: 10px;
  width: 95.56%;
  padding: 20px 0 20px 0;
  background-color: var(--card);
  color: var(--text-color);
}

.signUp_card > h1 {
  margin: 10px 0 15px 0;
  padding: 0 0 0 20px;
  font-size: 10pt;
  font-weight: bold;
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

.filebox {
  position: relative;
}

.filebox .upload-name {
  display: inline-block;
  height: 40px;
  vertical-align: middle;
  border: none;
  width: 50%;
  font-family: inherit;
  font-size: 11pt;
  color: #A4A4A4;
  margin-top: 50px;
  margin-left: 35px;
}

.filebox .profile_label {
  display: inline-block;
  padding: 10px 20px;
  color: #ffffff;
  vertical-align: middle;
  background-color: #007AFF;
  cursor: pointer;
  height: 20px;
  font-size: 11pt;
  font-weight: bold;
  margin: 53px 0 0 16px;
  border-radius: 10px;
}

.filebox input[type="file"] {
  width: 0;
  height: 0;
  padding: 0;
  border: 0;
  overflow: hidden;
  position: relative;
}

.filebox .highLight {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 100px;
  height: 0.1em;
  background: #D4D4D4;
  width: 53%;
  margin: 0 auto;
}

.filebox .header {
  font-size: 11pt;
  font-weight: bold;
  color: #007AFF;
  position: absolute;
  left: 0;
  top: 0;
  margin-left: 37px;
  margin-top: 37px;
}
</style>