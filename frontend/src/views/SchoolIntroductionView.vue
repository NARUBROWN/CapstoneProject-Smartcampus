<template>
  <div>
    <h1>학교소개</h1>
  </div>
  <SchoolIntroduction></SchoolIntroduction>
</template>

<script>
import SchoolIntroduction from "@/components/introduce/SchoolIntroduction";

export default {
  name: "SchoolIntroductionView",
  components: {
    SchoolIntroduction
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