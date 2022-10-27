<template>
  <h1>게시글 사진 수정</h1>
  <ImgEdit></ImgEdit>
</template>

<script>
import ImgEdit from "@/components/write/ImgEdit";


export default {
  name: "CommunityContentsImgEditView",
  components: {
    ImgEdit
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