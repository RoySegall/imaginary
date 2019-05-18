<template>
    <div class="home">
        <ImageView></ImageView>
        <ListOfImages></ListOfImages>
    </div>
</template>

<script>
  const {dialog} = require('electron').remote;
  import ImageView from './ImagesView/ImageView';
  import ListOfImages from './ImagesView/ListOfImages';


  export default {
    name: 'images-view',
    components: { ImageView, ListOfImages },
    methods: {
    }
  }
</script>

<style lang="scss">

    .home {
        padding: 0;
    }

</style>

