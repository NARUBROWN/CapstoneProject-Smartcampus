<template>
  <StudentLoginInfo></StudentLoginInfo>
  <NoticeSection></NoticeSection>
  <ShortCut></ShortCut>
  <AllServiceList></AllServiceList>
  <footer>
    <p>Copyright © 2022 NARUBROWN. All right reserved</p>
    <p>JEIU is a trademark is registered trademark of JEI University in Republic of Korea</p>
  </footer>
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
