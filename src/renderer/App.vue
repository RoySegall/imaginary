<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'imaginary2'
  }
</script>

<style lang="scss">
  body {
    margin: 0;
    overflow: hidden;

    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background: black;
      height: 100vh;
      font-size: 16px;
    }
  }
</style>
