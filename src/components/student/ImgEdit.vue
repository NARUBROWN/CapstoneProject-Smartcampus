<template>
  <div>
    <!-- <img class="profilePhoto" src="@/assets/student/profile.png" alt="프로필"> -->
    <br>
  </div>
  <form @submit.prevent="updateProfile">
    <div class="signUp_card">
      <h1>사진 선택</h1>
      <div class="signUp_wrap">
        <input type="file" name="userfile" id="file" ref="user_img" v-on:change="fileSelect($event)">

      </div>
    </div>
    <div class="underButtonsArea">
      <div class="underButtons">
        <button type="submit">확인</button>
        <button @click="this.$router.push('/student-information-edit');">취소</button>
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
      user_data: {
        img: '',
        id: ''
      }
    };
  },
  created() {
    this.user_data.id = this.$store.state.user_data['id'];
    this.user_data.img = this.$store.state.user_data['img'];
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

      this.selectedImg = event.target.files[0];
      this.user_data.img = fileName + "." + fileExt;
    },
    updateProfile() {
      const formData = new FormData();
      formData.append('profile_img', this.selectedImg);
      formData.append('id', this.user_data.id);

      axios({
        method: "post", // 요청 방식
        url: process.env.VUE_APP_IP + "/post/profile_img_update", // 요청 주소
        data: formData
      }).then((res) => {
        // 회원정보 수정
        console.log("수정 성공" + res.data[0]);

        this.$toast.success('이미지를 성공적으로 교체하였습니다.<br> 다시 로그인 해주세요', {
          position: 'bottom'
        });
        //로그아웃 및 메인화면 이동
        this.$store.commit('logout')
        //컴포넌트 다시 렌더링
        this.$forceUpdate();
        this.$router.push('/login');
      })
          .catch((err) => {
            console.log(err); // 에러 처리 내용

            this.$toast.error(`알 수 없는 오류가 발생했습니다. <br> ${err} `, {
              position: 'bottom'
            });
          });
    }
  }
}
</script>

<style scoped>

.signUp_card {
  margin: 10px auto;
  border-radius: 10px;
  width: 95.56%;
  padding: 20px 0 10px 0;
  background-color: var(--card);
  color: var(--text-color);
}

.signUp_card > h1 {
  margin: 10px 0 15px 0;
  padding: 0 0 0 20px;
  font-size: 10pt;
  font-weight: bold;
}

.signUp_card > .signUp_wrap > .row {
  margin: 10px 0;
  position: relative;
}

.signUp_card > .signUp_wrap > .row > .header {
  font-size: 11pt;
  font-weight: bold;
  color: #007AFF;
  position: absolute;
  left: 0;
  top: 0;
  margin-left: 37px;
}

.signUp_card > .signUp_wrap > .row > .highLight {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 0.1em;
  background: #D4D4D4;
  width: 80%;
  margin: 0 auto;
}

.signUp_card > .signUp_wrap > .row > input,
.signUp_card > .signUp_wrap > .row > button {
  width: 35%;
  font: inherit;
  padding: 12px 0;
  font-weight: normal;
  outline: none;
  border: 0;
  margin-left: 37px;
  margin-top: 15px;
  margin-bottom: 10px;
}

.signUp_card > .signUp_wrap > .row > input {
  font-size: 11pt;
  background: var(--card);
}

.signUp_card > .signUp_wrap > .row > input::placeholder {
  color: #A4A4A4;
}

.signUp_card > .signUp_wrap > .row > button {
  border-radius: 10px;
  border: none;
  font-size: 14pt;
  font-weight: bold;
  color: #F4F4F4;
  cursor: pointer;
  background-color: #007AFF;
}

.depart {
  width: 80%;
  height: 45px;
  margin-top: 30px;
  margin-left: 40px;
  border: none;
  border-bottom: 1px solid #A4A4A4;
  font-weight: normal;
}

.select {
  padding: 35px 0 10px 0;
  margin-left: 40px;
}

.select input[type=radio] {
  display: none;
}

.select input[type=radio] + label {
  display: inline-block;
  cursor: pointer;
  height: 35px;
  width: 43.8%;
  border: 1px solid #A4A4A4;
  line-height: 24px;
  text-align: center;
  font-weight: normal;
  font-size: 14px;
  padding-top: 10px;
  background-color: #3998FF;
  color: #FFFFFF;
}

.select input[type=radio] + label:first-of-type {
  border-radius: 10px 0 0 10px;
}

.select input[type=radio] + label:nth-of-type(2) {
  border-radius: 0 10px 10px 0;
}

.select input[type=radio]:checked + label {
  background-color: #007AFF;
  color: #FFFFFF;
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