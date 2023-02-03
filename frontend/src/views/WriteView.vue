<template>
  <h1>게시글 작성</h1>
  <WriteContents></WriteContents>
</template>

<script>
import WriteContents from "@/components/write/WriteContents";

export default {
  name: "WriteView",
  components: {
    WriteContents
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