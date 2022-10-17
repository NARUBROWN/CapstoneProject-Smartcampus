<template>
  <h1>로그인</h1>
  <LoginForm></LoginForm>
</template>

<script>
import LoginForm from "@/components/login/LoginForm";

export default {
  emits: ["event1", "event2"],
  name: "LoginView",
  components: {
    LoginForm
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
h1 {
  margin: 15% 0 15% 0;
  text-align: center;
  color: var(--text-color)
}
</style>