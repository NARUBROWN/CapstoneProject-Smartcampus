<template>
  <h1>학생 정보 수정</h1>
  <StudentInformationEdit></StudentInformationEdit>
</template>

<script>
import StudentInformationEdit from "@/components/student/StudentInformationEdit";

export default {
  name: "StudentInformationEditView",
  components: {
    StudentInformationEdit
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