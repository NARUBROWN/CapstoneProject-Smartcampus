<template>
  <div class="signUp_card">
    <div class="signUp_wrap">
      <form @submit.prevent="sendPost">
        <div class="filebox">
          <!-- fileSelectMessage는 data()에 있는 값. 기본 값은 '사진을 선택해주세요'이고 v-on에 설정되어있는 fileSelect가 이벤트 처리되면
           FileSelectMessage의 값이 변경되게 되어 있음. 밑의 fileSelectButton도 마찬가지.
           값을 쓰고 싶다면 이렇게 하면 됨 태그 속성 안에선 <태그 v-bind:속성="접근할 데이터 이름", 태그 밖에선 {{ 접근할 데이터 이름 }}>
           fileSelect 이벤트(함수)가 어떻게 동작하는지 확인하고 싶다면 하단 method를 확인해볼것
           class upload-name 들어가있는 input 태그 label로 바꾸던가 해야 할 것 같은데. 아니면 입력이 안되게 하던지
           조치 취해주길 바람... -->
          <input class="upload-name" v-bind:value="fileSelectMessage">
          <input type="file" name="userfile" id="file" ref="user_img" v-on:change="fileSelect($event)">
          <label class="profile_label" for="file">{{ fileSelectButton }}</label>
          <label class="header">프로필 사진</label>
          <div class="highLight"></div>
        </div>
        <div class="row">
          <input type="text"
                v-model="name"
                name="name"
                placeholder="이름을 입력해 주세요."
          />
          <label class="header">이름</label>
          <div class="highLight"></div>
        </div>
        <div class="row">
          <input
              type="text"
              v-model="stu_num"
              name="stu_num"
              placeholder="학번을 입력해 주세요."
          />
          <label class="header">학번</label>
          <div class="highLight"></div>
        </div>
        <div class="row">
          <input
              type="password"
              v-model="password"
              name="password"
              maxlength="16"
              @blur="passwordValid"
              placeholder="비밀번호를 입력해 주세요."
          />
          <label class="header">비밀번호</label>
          <div class="highLight"></div>
        </div>
        <div class="pwValid">⚠ 대소문자 1개, 8자 이상 16자 이하</div>
        <div class="pw" v-if="!passwordValidFlag">유효하지 않은 비밀번호 입니다.</div>
        <div class="row">
          <input
              type="password"
              v-model="passwordCheck"
              name="passwordCheck"
              maxlength="16"
              @blur="passwordCheckValid"
              placeholder="비밀번호를 다시 입력해 주세요."
          />
          <label class="header">비밀번호 재확인</label>
          <div class="highLight"></div>
        </div>
        <div class="pwCheck" v-if="!passwordCheckFlag">비밀번호가 일치하지 않습니다.</div>
        <div class="row">
          <select class="depart" v-model="department">
            <option value="" disabled selected>소속 학부를(계열을) 선택해 주세요.</option>
            <option>AI학부</option>
            <option>인문사회계열</option>
            <option>자연과학계열</option>
            <option>예술디자인계열</option>
            <option>미래창업학부</option>
          </select>
          <label class="header">소속 학부(계열)</label>
        </div>
        <div class="row" v-if="this.$store.state.user_data['stu_rank'] === '관리자'">
          <div class="select">
            <input v-model="rank" type="radio" id="select" name="shop" value="학생"><label for="select">학생</label>
            <input v-model="rank" type="radio" id="select2" name="shop" value="관리자"><label for="select2">관리자</label>
          </div>
          <label class="header">권한</label>
        </div>
        <div class="row">
          <button type="submit">확인</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUpForm",
  data() {
    return {
      name: '',
      stu_num: '',
      department: '',
      password: '',
      passwordCheck: '',
      rank: '학생',
      image: '',
      passwordValidFlag: true,
      passwordCheckFlag: true,
      fileSelectMessage: '사진 업로드하기',
      fileSelectButton: '파일 선택'
    }
  },
  computed: {
    vuex_userdata() {
      return this.$store.state.user_data
    }
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

      // this.data()에 있는 fileSelectMessage에 선택된 이름의 파일이름을 자르고 확장명을 추가한 것을 대입
      this.fileSelectMessage = fileName.substr(0, 7) + "." + fileExt
      // 버튼 데이터를 다시 선택으로 변경
      this.fileSelectButton = "다시 선택"
      this.image = event.target.files[0];
    },
    passwordValid() {
      this.passwordValidFlag = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,16}$/.test(this.password);
    },
    passwordCheckValid() {
      this.passwordCheckFlag = this.password === this.passwordCheck;
    },
    sendPost() {
      const formData = new FormData();
      formData.append('profile_img', this.image);
      formData.append('name', this.name)
      formData.append('stu_num', this.stu_num)
      formData.append('department', this.department)
      formData.append('password', this.password)
      formData.append('rank', this.rank)

      axios({
        method: "post", // 요청 방식
        url: process.env.VUE_APP_IP + "/user/signup", // 요청 주소
        data: formData
      }).then((res) => {
        // 회원가입 성공
        console.log("회원가입 성공" + res);
        this.$router.push('/login');

        this.$toast.success('가입을 환영합니다. 다시 로그인 해주세요', {
          position: 'bottom'
        });

      })
          .catch(function (err) {
            console.log(err); // 에러 처리 내용
          });
    }
  }
}
</script>

<style scoped>
.signUp_card{
  margin: 10px auto;
  border-radius: 10px;
  width: 95.56%;
  height: 100%;
  padding: 0 0 10px 0;
  background-color: var(--card);
}
.signUp_card > .signUp_wrap > form > .row{
  margin: 10px 0;
  position: relative;
}
.signUp_card > .signUp_wrap > form > .row > .header{
  font-size: 11pt;
  font-weight: bold;
  color: #007AFF;
  position: absolute;
  left: 0;
  top: 0;
  margin-left: 37px;
}
.signUp_card > .signUp_wrap > form > .row > .highLight{
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 0.1em;
  background: #D4D4D4;
  width: 80%;
  margin: 0 auto;
}
.signUp_card > .signUp_wrap > form > .row >  input,
.signUp_card > .signUp_wrap > form > .row >  button[type=submit]{
  width: 80%;
  font: inherit;
  padding: 12px 0;
  font-weight: normal;
  outline: none;
  border: 0;
  margin-left: 37px;
  margin-top: 15px;
}
.signUp_card > .signUp_wrap > form > .row >  input{
  font-size: 11pt;
  background: var(--card);
}
.signUp_card > .signUp_wrap > form > .row >  input::placeholder{
  color: #A4A4A4;
}
.signUp_card > .signUp_wrap > form > .row >  button[type=submit]{
  border-radius: 10px;
  border: none;
  font-size: 14pt;
  font-weight: bold;
  color: #F4F4F4;
  cursor: pointer;
  background-color: #007AFF;
}
.depart{
  width: 81%;
  height: 45px;
  margin-top: 30px;
  margin-left: 35px;
  border: none;
  border-bottom: 1px solid #A4A4A4;
  font-weight: normal;
}
.select {
  padding: 35px 0 10px 0;
  margin-left: 40px;
}
.select input[type=radio]{
    display: none;
}
.select input[type=radio]+label {
  display: inline-block;
  cursor: pointer;
  height: 35px;
  width: 43.8%;
  line-height: 24px;
  text-align: center;
  font-weight: normal;
  font-size: 14px;
  padding-top: 10px;
  background-color: #3998FF;
  color: #ffffff;
}
.select input[type=radio]+label:first-of-type{
  border-radius: 10px 0 0 10px;
}
.select input[type=radio]+label:nth-of-type(2){
  border-radius: 0 10px 10px 0;
}
.select input[type=radio]:checked+label {
  background-color: #007AFF;
  color: #FFFFFF;
}
.pw {
  font-size: 9pt;
  color: #FF3B30;
  margin-left: 37px;
  margin-top: 0;
}
.pwCheck{
  font-size: 9pt;
  color: #FF3B30;
  margin-left: 37px;
  margin-top: -5px;
}
.pwValid{
  font-size: 9pt;
  margin-left: 37px;
  margin-top: 3px;
}
.filebox{
  position: relative;
}
.filebox .upload-name{
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
.filebox .profile_label{
  display: inline-block;
  padding: 10px 20px;
  color: #ffffff;
  vertical-align: middle;
  background-color: #007AFF;
  cursor: pointer;
  height: 20px;
  font-size: 11pt;
  margin: 53px 0 0 16px;
  border-radius: 10px;
  font-weight: bold;
}
.filebox input[type="file"]{
  width: 0;
  height: 0;
  padding: 0;
  border: 0;
  overflow: hidden;
  position: relative;
}
.filebox .highLight{
  position: absolute;
  left: 0;
  bottom: 0;
  right: 100px;
  height: 0.1em;
  background: #D4D4D4;
  width: 53%;
  margin: 0 auto;
}
.filebox .header{
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