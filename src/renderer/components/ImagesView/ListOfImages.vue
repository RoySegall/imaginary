<template>
    <div class="images-views" id="images">
        <ul class="images">
            <li
                    v-for="(image, key) in listOfImages"
                    v-bind:class="{
                    'active': key === activeImage,
                    'not-active': key !== activeImage,
                    'first': key === 0,
                    'last': (key + 1) === listOfImages.length
                }"
                    v-on:click="changeImage(image['path'], key)"
            >
                <img v-bind:src="image['base']"  />
            </li>
        </ul>

        <div class="controllers">
            <ul>
                <li><font-awesome-icon :icon="['fal', 'angle-double-left']" v-on:click="ControllerChangeImage('start')" /></li>
                <li><font-awesome-icon :icon="['fal', 'angle-left']" v-on:click="ControllerChangeImage('previous')" /></li>
                <li v-if="mode === 'pause'"><font-awesome-icon :icon="['fal', 'play']" v-on:click="playingMode('play')" /></li>
                <li v-if="mode === 'play'"><font-awesome-icon :icon="['fal', 'pause']" v-on:click="playingMode('pause')" /></li>
                <li><font-awesome-icon :icon="['fal', 'angle-right']" v-on:click="ControllerChangeImage('next')" /></li>
                <li><font-awesome-icon :icon="['fal', 'angle-double-right']" v-on:click="ControllerChangeImage('end')" /></li>
            </ul>
        </div>
    </div>

</template>

<script>
  export default {
    data () {
      return {
        mode: 'pause',
      }
    },

  mounted () {
    window.addEventListener('keyup', this.keyBoardHandler, true);
  },
  destroyed () {
    window.removeEventListener('keyup', this.keyBoardHandler);
  },
    methods: {
      keyBoardHandler: function(data) {
        const arrow = data.code
        if (['ArrowDown', 'ArrowLeft'].indexOf(arrow) !== -1) {
          this.$store.dispatch('previousImage');
        } else {
          this.$store.dispatch('nextImage');
        }
        this.moveScroller();
      },
      changeImage: function(item, key) {
        this.$store.commit('setSelectedImage', {image: item, key});
        this.moveScroller();
      },
      playingMode: function(mode) {
        this.mode = mode;

        if (mode === 'pause') {
          clearInterval(this.loop);
          return;
        }

        if (mode === 'play') {
          this.loop = setInterval(() => {
            if (this.mode === 'pause') {
              return;
            }

            this.$store.dispatch('nextImage');
            this.moveScroller();
          }, 3000);
        }
      },
      ControllerChangeImage: function(action) {
        switch (action) {
          case 'start':
            this.$store.dispatch('firstImage');
            break;
          case 'previous':
            this.$store.dispatch('previousImage');
            break;
          case 'next':
            this.$store.dispatch('nextImage');
            break;
          case 'end':
            this.$store.dispatch('lastImage');
            break;

        }

        this.moveScroller();
      },
      moveScroller: function() {

        const element = document.getElementById('images');
        const elements = document
          .querySelectorAll('.images-views .images li')[this.$store.state.activeImage];

        element.scrollLeft = elements.offsetLeft - 200;
      }

    },

    computed: {
      listOfImages() {
        return this.$store.state.selectedImages.map((item) => {
          return {
            base: 'file://' + item,
            path: item,
          };
        });
      },
      activeImage() {
        return this.$store.state.activeImage;
      }
    },
  }
</script>

<style scoped lang="scss">

    .images-views {
        width: 98vw;
        position: fixed;
        bottom: 4vh;
        overflow-y: scroll;
        right: 1vw;
        left: 1vw;

        &::-webkit-scrollbar {
            width: 0;
            background: transparent;
        }

        ul {
            width: 100vw;
            display: inline-flex;
            padding: 0;
            margin: 0;

            li {
                display: flex;
                cursor: pointer;
                margin-left: .5em;
                margin-right: .5em;

                &.active {
                    border: white solid 1px;
                }

                img {
                    height: 5em;
                }

                &.first {
                    margin-left: 0;
                }

                &.last {
                    margin-right: 0;
                }
            }
        }
    }

    .images {
        opacity: 0.1;
        transition: opacity 0.5s ease-in-out;

        &:hover {
            opacity: 10;
        }
    }

    .controllers {
        color: white;
        text-align: center;
        font-size: 1.25em;

        ul {
            background: black;
            width: auto;
            padding: .5em;
            border-radius: 1em;
            border: white solid 1px;
            position: fixed;
            bottom: 1vh;
            right: 50vw;
            transform: translate(4vw, 0);
        }
    }

</style>
