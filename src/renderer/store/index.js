import Vue from 'vue'
import Vuex from 'vuex'

import { createPersistedState, createSharedMutations } from 'vuex-electron'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedImages: [],
    selectedImage: '',
    activeImage: 0,
  },
  mutations: {
    setImages: (state, payload) => {
      state.selectedImages = payload;
    },
    setSelectedImage: (state, payload) => {
      state.selectedImage = payload.image;
      state.activeImage = payload.key;
    },
  },
  actions: {
    previousImage: (context) => {
      const state = context.state;
      let end;

      if (state.activeImage === 0) {
        end = state.selectedImages.length - 1;
        context.commit('setSelectedImage', {image: state.selectedImages[end], key: end});
        return;
      }

      end = state.activeImage - 1;
      context.commit('setSelectedImage', {image: state.selectedImages[end], key: end});
    },
    nextImage: (context) => {
      const state = context.state;
      let end;

      if (state.activeImage === state.selectedImages.length - 1) {
        context.commit('setSelectedImage', {image: state.selectedImages[0], key: 0});
        return;
      }

      end = state.activeImage + 1;
      context.commit('setSelectedImage', {image: state.selectedImages[end], key: end});
    },

    firstImage: (context) => {
      const state = context.state;
      context.commit('setSelectedImage', {image: state.selectedImages[0], key: 0});
    },

    lastImage: (context) => {
      const state = context.state;
      const length = state.selectedImages.length - 1;

      context.commit('setSelectedImage', {image: state.selectedImages[length], key: length});
    },
  },
})
