<template>
    <div class="page-scroll">
      
    </div>
    <div>
      <h1>학과 커뮤니티</h1>
    </div>
      <AiCampus></AiCampus>
  </template>
  
  <script>
    import AiCampus from "@/components/community/AiCampus.vue";
  
  export default {
    name: "AiCampusView",
    components: {
    AiCampus
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
}
  </style>