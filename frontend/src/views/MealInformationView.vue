<template>
  <div>
    <h1>교내식당</h1>
  </div>
  <MealInformation></MealInformation>
</template>

<script>
import MealInformation from "@/components/meal/MealInformation";

export default {
  name: "MealInformationView",
  components: {
    MealInformation
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