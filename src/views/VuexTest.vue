<template>
  {{ massage }}
  {{ veux_userdata }}
  <button @click="testLogin">로그인</button>
  <button @click="testLogout">로그아웃</button>
  <ListTest></ListTest>
  <form @submit.prevent="sendImg()">
    <input type="file" name="userfile" id="file" ref="user_img" v-on:change="fileSelect($event)" class="displayNone">
    <input type="submit" id="submit">
  </form>
  <img v-bind:src="this.result.img">
  {{ this.result.img }}
</template>

<script>
import ListTest from "@/components/notice/ListTest";
import axios from "axios";

export default {
  name: "VuexTest",
  components: {
    ListTest
  },
  data() {
    return {
      massage: "test",
      fileSelectMessage: '사진 업로드하기',
      fullFileName: '',
      input: {
        image: ''
      },
      user_data: {
        login_state: true,
        id: 1,
        name: "김원정",
        stu_number: 2018141009,
        department: "인공지능컴퓨터정보과",
        stu_rank: "관리자",
        password: "1234"
      },
      result: {
        location: '',
        building: '',
        department: '',
        name: '',
        description: '',
        img: ''
      }
    }
  },
  computed: {
    veux_userdata() {
      // 상태 데이터 가져오기
      return this.$store.state.user_data
    },
    testLogin() {
      return this.$store.commit('login', this.user_data)
    },
    testLogout() {
      return this.$store.commit('logout')
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

      this.secondActionArea = true
      this.selectButton = false
      this.fileSelectMessage = fileName.substr(0, 3) + "." + fileExt
      this.input.image = event.target.files[0];
      this.fullFileName = fileName + "." + fileExt

    },
    async sendImg() {
      const formData = new FormData();
      formData.append('userfile', this.input.image);

      try {
        // 백엔드에 요청된 데이터를 가져오기
        let user = await axios({
          headers: {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*"
          },
          method: "post",
          url: process.env.VUE_APP_IP + "/upload",
          data: formData
        })

        this.result.img = process.env.VUE_APP_IP + '/users/' + this.fullFileName
        const img = this.createElement("img");
        img.src = process.env.VUE_APP_IP + '/users/' + this.fullFileName
        this.body.appendChild(img)

        console.log(this.result.img)

        // 받아온 데이터 저장
        this.result = user.data
      } catch (e) {
        console.log(e);
      }
    }
  }
}
</script>

<style scoped>

</style>