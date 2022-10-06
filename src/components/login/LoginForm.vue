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
    <button>로그인</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginForm",
  data() {
    return {
      stu_num: '',
      password: '',
      user_data: [{
        id: '',
        department: '',
        name: '',
        stu_number: 0,
        stu_rank: "",
        massage: ""
      }]
    }
  },
  methods: {
    async sendPost() {
      try {
        // 백엔드에 요청된 데이터를 가져오기
        let user = await axios({
          method: "post",
          url: process.env.VUE_APP_IP + "/post/login",
          data: {
            stu_num: this.stu_num,
            password: this.password
          }
        })
        this.user_data = user.data;
      } catch (e) {
        console.log("새로운 데이터를 불러오지 못했습니다. " + e);
      }
    }
  }
}
</script>

<style scoped>

</style>