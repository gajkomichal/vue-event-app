<template>
  <div class="container">
    <h1 data-testid="header">Home page of event app</h1>
    <img class="main-logo" :src="logo" />
  </div>
</template>

<script>
import logo from '../assets/logo.png';
export default {
  data() {
    return {
      logo: logo
    };
  }
};
</script>

<style lang="css" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1 {
  text-align: center;
}
img {
  width: 25%;
}
</style>
