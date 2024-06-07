<template>
   <Weather />
</template>

<script>
import { defineComponent } from 'vue'
import Weather from './Weather.vue'
export default defineComponent({
   components: {
      Weather
   }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
