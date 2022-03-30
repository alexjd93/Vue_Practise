import { createStore } from 'vuex';
import { getPopularMovieData } from '../api/constant';
import axios from 'axios';
import { API_KEY, API_URL } from '../config';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../config';
export const store = createStore({
  state: {
    data: [],
    hero_image_url: '',
    overview: '',
    title: '',
  },
  getters: {
    getMovieContainer(state) {
      return state.data;
    },
    getImageUrl(state) {
      console.log(state);
      return `${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.hero_image_url}`;
    },
  },
  mutations: {
    SET_MOVIE(state, movie) {
      state.data = movie;
      state.hero_image_url = movie[0].backdrop_path;
      state.overview = movie[0].overview;
      state.title = movie[0].original_title;
    },
  },
  actions: {
    async fetchMovieData({ commit }) {
      try {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US@page=1`;
        const { data } = await axios.get(endpoint);
        console.log(data);
        commit('SET_MOVIE', data.results);
      } catch (err) {
        alert(err);
        console.log(err);
      }
    },
  },
  modules: {},
});
