<template>
  <h1>게시글 수정</h1>
  <EditContents></EditContents>
</template>

<script>
import EditContents from "@/components/write/EditContents";

export default {
  name: "EditView",
  components: {
    EditContents
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