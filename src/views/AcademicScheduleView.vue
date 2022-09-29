<template>
    <div>
      <h1>학사일정</h1>
    </div>
    <AcademicSchedule></AcademicSchedule>
</template>
  
  <script>
import AcademicSchedule from "@/components/academic/AcademicSchedule";
  
  export default {
    name: "AcademicScheduleView",
    components: {
        AcademicSchedule
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