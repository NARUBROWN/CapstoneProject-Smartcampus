<template>
  {{ name }}
  {{ stu_num }}
  {{ department }}
  {{ password }}
  {{ rank }}
  <form @submit.prevent="sendPost">
    <div>
      <label>이름</label>
      <input type="text"
             v-model="name"
             name="name"
             placeholder="이름을 입력해주세요"
      />
    </div>
    <div>
      <label>학번</label>
      <input
          type="text"
          v-model="stu_num"
          name="stu_num"
          placeholder="학번을 입력해주세요"
      />
    </div>
    <div>
      <label>소속 학과</label>
      <input
          type="text"
          v-model="department"
          name="department"
          placeholder="학과를 입력해주세요"
      />
    </div>
    <div>
      <label>비밀번호</label>
      <input
          type="text"
          v-model="password"
          name="password"
          placeholder="비밀번호를 입력해주세요"
      />
    </div>
    <select v-model="rank">
      <option selected>학생</option>
      <option>관리자</option>
    </select>
    <button>가입</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginForm",
  data() {
    return {
      name: '',
      stu_num: '',
      department: '',
      password: '',
      rank: ''
    }
  },
  methods: {
    sendPost() {
      axios({
        method: "post", // 요청 방식
        url: process.env.VUE_APP_IP + "/post/signup", // 요청 주소
        data: {
          name: this.name,
          stu_num: this.stu_num,
          department: this.department,
          password: this.password,
          rank: this.rank
        }
      }).then(function (res) {
        // 회원가입 성공
        console.log("회원가입 성공" + res);
        this.$router.push('/login');
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