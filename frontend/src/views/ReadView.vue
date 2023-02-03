<template>
  <h1>게시글</h1>
  <ReadContents></ReadContents>
</template>

<script>
import ReadContents from "@/components/read/ReadContents";

export default {
  name: "ReadView",
  components: {
    ReadContents
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