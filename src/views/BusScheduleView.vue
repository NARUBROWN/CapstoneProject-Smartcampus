<template>
    <div>
      <h1>버스시간표</h1>
    </div>
    <BusSchedule></BusSchedule>
</template>
  
  <script>
import BusSchedule from "@/components/bus/BusSchedule";
  
  export default {
    name: "BusScheduleView",
    components: {
        BusSchedule
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