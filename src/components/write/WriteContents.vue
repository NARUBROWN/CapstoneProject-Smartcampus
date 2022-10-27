<template>
  <div class="card">
    <div class="wrap">
      <form>
        <div class="row">
          <input type="text"
                v-model="contents.title"
                name="title"
                placeholder="제목을 입력해주세요."
          />
          <label class="header">제목</label>
          <div class="highLight"></div>
        </div>
        <div class="row">
          <textarea
              v-model="contents.content"
              name="content"
              placeholder="내용을 입력해주세요."
          ></textarea>
          <label class="header">내용</label>
        </div>
        <div class="filebox">
          <!-- fileSelectMessage는 data()에 있는 값. 기본 값은 '사진을 선택해주세요'이고 v-on에 설정되어있는 fileSelect가 이벤트 처리되면
           FileSelectMessage의 값이 변경되게 되어 있음. 밑의 fileSelectButton도 마찬가지.
           값을 쓰고 싶다면 이렇게 하면 됨 태그 속성 안에선 <태그 v-bind:속성="접근할 데이터 이름", 태그 밖에선 {{ 접근할 데이터 이름 }}>
           fileSelect 이벤트(함수)가 어떻게 동작하는지 확인하고 싶다면 하단 method를 확인해볼것
           class upload-name 들어가있는 input 태그 label로 바꾸던가 해야 할 것 같은데. 아니면 입력이 안되게 하던지
           조치 취해주길 바람... -->

           <!-- disalbed = input태그 입력 비활성화 -->
          <input class="upload-name" v-bind:value="fileSelectMessage" disabled>
          <input type="file" name="userfile" id="file" ref="user_img" v-on:change="fileSelect($event)">
          <label class="profile_label" for="file">{{ fileSelectButton }}</label>
          <label class="header">게시글 사진</label>
          <div class="highLight"></div>
        </div>
      </form>
    </div>
  </div>
  <div class="underButtonsArea">
    <div class="underButtons">
      <button @click="back()">뒤로가기</button>
      <button @click="sendPost">제출</button>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "WriteContents",
  data() {
    return {
      // axios 를 통해 res.data 받은 객체를 대입 받을 곳
      contents: {
        id: null,
        title: null,
        user: null,
        date: null,
        content: null,
        image: null,
        table: null,
      },
      fileSelectMessage: '사진 업로드하기',
      fileSelectButton: '파일 선택'
    };
  },
  created() {
    // 현재 시간 가져오기
    const date = new Date();
    this.contents.date = date.toLocaleDateString('ko-kr');

    // 유저 아이디 부여
    this.contents.id = this.$store.getters.getUserStore.id;

    // 유저 이름 부여
    this.contents.user = this.$store.getters.getUserStore.name;

    // 테이블 부여
    this.contents.table = this.$store.getters.getUserStore.table;
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
      this.contents.image = event.target.files[0];
    },
    sendPost() {
      if (this.contents.title === null || this.contents.title === "") {
        this.$toast.warning('글 제목을 입력해주세요.', {
          position: 'bottom'
        });
      } else if (this.contents.content === null || this.contents.content === "") {
        this.$toast.warning('글 내용을 입력해주세요.', {
          position: 'bottom'
        });
      } else {

        const formData = new FormData();
        formData.append('table', this.contents.table);
        formData.append('title', this.contents.title);
        formData.append('stu_id', this.contents.id);
        formData.append('user', this.contents.user);
        formData.append('date', this.contents.date);
        formData.append('content', this.contents.content);
        formData.append('community_image', this.contents.image);

        axios({
          method: "post", // 요청 방식
          url: process.env.VUE_APP_IP + "/community/write", // 요청 주소
          data: formData
        }).then((res) => {
          console.log(res);
          this.$router.push(`/campus-community?table=${this.$store.getters.getUserStore.table}`);
        })
            .catch(function (err) {
              console.log(err); // 에러 처리 내용
            });
      }
    },
    back() {
      this.$router.push(`/campus-community?table=${this.$store.getters.getUserStore.table}`);
    }
  }
}
</script>

<style scoped>
.card > .wrap {
  margin: 10px auto;
  border-radius: 10px;
  width: 95.56%;
  height: 100%;
  padding: 5px 0 10px 0;
  background-color: var(--card);
}

.card > .wrap > form > .row{
  margin: 10px 0;
  position: relative;
}

.card > .wrap > form > .row > .header{
  font-size: 11pt;
  font-weight: bold;
  color: #007AFF;
  position: absolute;
  left: 0;
  top: 0;
  margin-left: 37px;
}

.card > .wrap > form > .row > .highLight{
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 0.1em;
  background: #D4D4D4;
  width: 80%;
  margin: 0 auto;
}

.card > .wrap > form > .row > input,
.card > .wrap > form > .row > textarea{
  width: 80%;
  font: inherit;
  padding: 12px 0;
  font-weight: normal;
  outline: none;
  border: 0;
  margin-left: 37px;
  margin-top: 15px;
  font-size: 11pt;
  background: var(--card);
  border-radius: 10px;
}

.card > .wrap > form > .row > textarea{
  width: 73%;
  height: 100px;
  border: 0.1em solid #D4D4D4;
  margin-top: 30px;
  padding-left: 12px;
  padding-right: 12px;
}

.card > .wrap > form > .row > input::placeholder,
.card > .wrap > form > .row > textarea::placeholder{
  color: #A4A4A4;
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
  margin-top: 20px;
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
  margin: 18px 0 0 16px;
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
  margin-top: 3px;
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