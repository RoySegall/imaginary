<template>
    <div class="home container-fluid">
        <button type="button" class="btn btn-primary" v-on:click="selectFiles()">
            <font-awesome-icon :icon="['fal', 'copy']"/>
            Pick files
        </button>
    </div>
</template>

<script>
  const {dialog} = require('electron').remote;

  export default {
    name: 'home',

    methods: {
      selectFiles () {

        const files = dialog.showOpenDialog({
          properties: ['openFile', 'openDirectory', 'multiSelections'],
          filters: [
            {name: 'Images', extensions: ['jpg', 'png', 'gif']},
            {name: 'Movies', extensions: ['avi', 'mp4']},
          ],
        })

        this.$store.commit('setImages', files)
        this.$store.commit('setSelectedImage', {image: files[0], key: 0})
        this.$router.push('view')

        console.log(this.$store.state);
      }
    }
  }
</script>

<style lang="scss">

    .btn.btn-primary {
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-25%, -100%);
        font-size: 2.5em;
        display: inline-block;
        font-weight: 400;
        text-align: center;
        vertical-align: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        padding: .375rem .75rem;
        line-height: 1.5;
        border-radius: .25rem;
        transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    }

</style>

