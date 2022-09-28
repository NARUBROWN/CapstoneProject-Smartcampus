<template>
  <div>
    <h1>공지사항</h1>
  </div>
    <NoticeSection></NoticeSection>
</template>

<script>
import NoticeSection from "@/components/notice/NoticeSection";

export default {
  name: "NoticeView",
  components: {
    NoticeSection
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