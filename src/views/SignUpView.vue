<template>
  <h1>회원가입</h1>
  <SignUpForm></SignUpForm>
</template>

<script>
import SignUpForm from "@/components/login/SignUpForm";

export default {
  name: "LoginView",
  components: {
    SignUpForm
  },
  data() {
    return {}
  },
  mounted() {

  }
}
</script>

<style scoped>
h1 {
  margin: 15% 0 15% 0;
  text-align: center;
  color: var(--text-color)
}
</style>