<template>
  <NoticeSection></NoticeSection>
  <PlayGround></PlayGround>
  <ShortCut></ShortCut>
  <AllServiceList></AllServiceList>
</template>

<script>
import NoticeSection from "@/components/main/NoticeSection";
import PlayGround from "@/components/main/PlayGround.vue";
import ShortCut from "@/components/main/ShortCut";
import AllServiceList from "@/components/main/AllServiceList";

export default {
  name: 'HomeView',
  components: {
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
