<template>
  <h1>캠퍼스 길잡이</h1>
  <file-upload></file-upload>
</template>

<script>
import fileUpload from "@/components/navigator/CampusNavigator";

export default {
  name: "CampusNavigatorView",
  components: {
    fileUpload
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