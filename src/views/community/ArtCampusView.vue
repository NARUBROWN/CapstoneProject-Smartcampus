<template>
    <div class="page-scroll">
      <ul>
        <li><router-link to="/campus-community">메인</router-link></li>
        <li><router-link to="/ai-campus">AI</router-link></li>
        <li><router-link to="/humanities-campus">인문</router-link></li>
        <li><router-link to="/nature-campus">자연</router-link></li>
        <li><router-link to="/art-campus">예술</router-link></li>
        <li><router-link to="/founded-campus">창업</router-link></li>
      </ul>
    </div>
    <div>
      <h1>예술</h1>
    </div>
      <ArtCampus></ArtCampus>
  </template>
  
  <script>
    import ArtCampus from "@/components/community/ArtCampus.vue";
  
  export default {
    name: "ArtCampusView",
    components: {
    ArtCampus
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
  height: 51px;
  background: var(--card);
  overflow-x: auto;
  white-space: nowrap;
  margin: 0 auto;
}
.page-scroll ul{
  margin: 0;
  padding: 0;
}
.page-scroll ul li{
  display: inline-block;
  font-size: 18px;
  width: 110px;
  line-height: 47px;
  text-align: center;
}
.page-scroll ul li:hover{
  border-bottom: 4px solid var(--blue-card);
}
.page-scroll::-webkit-scrollbar{
  display: none;
}
  </style>