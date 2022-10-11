<template>
  <StudentLoginInfo></StudentLoginInfo>
  <NoticeSection></NoticeSection>
  <PlayGround></PlayGround>
  <ShortCut></ShortCut>
  <AllServiceList></AllServiceList>
</template>

<script>
import StudentLoginInfo from "@/components/main/StudentLoginInfo";
import NoticeSection from "@/components/main/NoticeSection";
import PlayGround from "@/components/main/PlayGround.vue";
import ShortCut from "@/components/main/ShortCut";
import AllServiceList from "@/components/main/AllServiceList";

export default {
  name: 'HomeView',
  components: {
    StudentLoginInfo,
    NoticeSection,
    ShortCut,
    AllServiceList,
    PlayGround,
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
