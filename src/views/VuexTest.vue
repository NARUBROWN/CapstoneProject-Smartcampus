<template>
  {{ massage }}
  {{ veux_userdata }}
  <button @click="testLogin">로그인</button>
  <button @click="testLogout">로그아웃</button>
  <ListTest></ListTest>
</template>

<script>
import ListTest from "@/components/notice/ListTest";

export default {
  name: "VuexTest",
  components: {
    ListTest
  },
  data() {
    return {
      massage: "test",
      user_data: {
        login_state: true,
        id: 1,
        name: "김원정",
        stu_number: 2018141009,
        department: "인공지능컴퓨터정보과",
        stu_rank: "학생"
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
  }
}
</script>

<style scoped>

</style>