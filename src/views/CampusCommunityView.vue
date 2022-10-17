<template>
    <div class="page-scroll">
      <ul>
        <li>메인</li>
        <li>AI</li>
        <li>인문</li>
        <li>자연</li>
        <li>예술</li>
        <li>창업</li>
      </ul>
    </div>
    <div>
      <h1>학과 커뮤니티</h1>
    </div>
      <CampusCommunity></CampusCommunity>
  </template>
  
  <script>
    import CampusCommunity from "@/components/community/CampusCommunity.vue";
  
  export default {
    name: "CampusCommunityView",
    components: {
    CampusCommunity
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

.page-scroll{
  width: 100%;
  height: 47px;
  background: burlywood;
  overflow-x: auto;
}
.page-scroll ul{
  margin: 0;
  padding: 0;
}
  </style>