<template>
    <div>
        <img v-bind:src="currentImage" class="main-image"/>
    </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    computed: {
      currentImage: function () {
        return 'file://' + this.$store.state.selectedImage
      }
    }
  }
</script>

<style lang="scss">
    body {
        color: white;
    }

    .main-image {
        height: 100vh;
        width: 100%;
        object-fit: scale-down;
    }
</style>
