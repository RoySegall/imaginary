<template>
    <div class="home">
        <ImageView></ImageView>
        <ListOfImages></ListOfImages>
    </div>
</template>

<script>
  import ImageView from './ImagesView/ImageView';
  import ListOfImages from './ImagesView/ListOfImages';


  export default {
    name: 'images-view',
    components: { ImageView, ListOfImages },
    created() {
      if (this.$store.state.selectedImages.length === 0) {
        this.$router.push('/');
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss">

    .home {
        padding: 0;
    }

</style>

