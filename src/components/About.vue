<template>
   <div class="about">
      <p>Mini Weather App is a simple weather app.</p>
      <p>It has been created for educational purposes.</p>
      <p>It uses OpenWeatherMap API.</p>
      <p>It uses Vue.js.</p>
      <p>It uses Vue Router.</p>      
   </div>

</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
   setup() {
      return {

      }
   }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about {
   background-image: url('../assets/about.png');
   background-size: cover;
   height: 100vh;
   background-position: bottom;
   background-repeat: no-repeat;
   padding-top: 30px;
}
.about p {
   padding: 18px 25px;
}
</style>
