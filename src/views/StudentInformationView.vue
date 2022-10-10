<template>
  <h1>학생정보</h1>
  <StudentInformation></StudentInformation>
</template>

<script>
import StudentInformation from "@/components/student/StudentInformation";

export default {
  name: "StudentInformationView",
  components: {
    StudentInformation
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