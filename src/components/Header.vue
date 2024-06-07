<template>
  <header>
    <div class="header__container">
      <div class="header__logo">
        <a @click="goToMain" href="#">Mini Weather App</a>
      </div>
      <nav class="header__nav">
        <a @click="goToMain" href="#">Main</a>
        <a @click="goToAbout" href="#">About</a>
      </nav>
    </div>
  </header>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    const router = useRouter();
    const goToMain = () => {
      router.push({ name: 'Main' });
    }
    const goToAbout = () => {
      router.push({ name: 'About' });
    }
    return {
      goToMain,
      goToAbout
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.header__logo a {
  font-weight: 600;
}

.header__container {
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  justify-content: space-between;
  padding: 20px 28px;
  font-size: 18px;
  background-color: #b6c4d5;
}

.header__nav {
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  gap: 20px;
}
</style>
