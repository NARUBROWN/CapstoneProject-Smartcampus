<template>
  <StudentLoginInfo></StudentLoginInfo>
  <NoticeSection></NoticeSection>
  <ShortCut></ShortCut>
  <AllServiceList></AllServiceList>
</template>

<script>
import StudentLoginInfo from "@/components/main/StudentLoginInfo";
import NoticeSection from "@/components/main/NoticeSection";
import ShortCut from "@/components/main/ShortCut";
import AllServiceList from "@/components/main/AllServiceList";

export default {
  name: 'HomeView',
  components: {
    StudentLoginInfo,
    NoticeSection,
    ShortCut,
    AllServiceList,
  },
  created() {
  }
}
</script>

<style>
footer {
  padding: 0 0 10px 0;
  text-align: center;
  color: var(--text-color)
}
</style>
