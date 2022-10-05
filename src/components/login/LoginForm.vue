<template>
  <form @submit.prevent="sendPost">
    <div>
      <label>Name</label>
      <input type="text"
             v-model="stu_num"
             name="stu_num"
             placeholder="학번을 입력해주세요"
      />
    </div>
    <div>
      <label>Age</label>
      <input
          type="text"
          v-model="password"
          name="password"
          placeholder="비밀번호를 입력해주세요"
      />
    </div>
    <button @click="sendPost">로그인</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginForm",
  data() {
    return {
      stu_num: '',
      password: ''
    }
  },
  methods: {
    sendPost() {
      axios({
        method: "post", // 요청 방식
        url: "http://172.16.0.100:3000/post/login", // 요청 주소
        data: {
          stu_num: "2018141009",
          password: "1234"
        }
      }).then(function (res) {
        console.log(res + "끝")
      })
          .catch(function (err) {
            console.log(err); // 에러 처리 내용
          });
    }
  }
}
</script>

<style scoped>

</style>