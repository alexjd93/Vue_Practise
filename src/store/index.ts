import { createStore } from 'vuex';
import { getPopularMovieData } from '../api/constant';
import axios from 'axios';
import { API_KEY, API_URL } from '../config';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../config';
export const store = createStore({
  state: {
    data: [],
    hero_image_url: '',
    overview: '',
    title: '',
    searchResult: '',
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
    SET_SEARCH(state, search) {
      state.data = search;
    },
  },
  actions: {
    async fetchMovieData({ commit }) {
      try {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US@page=1`;
        const { data } = await axios.get(endpoint);
        const newData = data.results.map((data: any) => {
          const url = data['poster_path'];
          data['poster_url'] = IMAGE_BASE_URL + POSTER_SIZE + url;

          return data;
        });
        commit('SET_MOVIE', newData);
      } catch (err) {
        alert(err);
        console.log(err);
      }
    },
    async searchMovie({ commit }, payload) {
      try {
        console.log(payload);
        const value = payload.searchValue;
        const endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${value}`;
        const { data } = await axios.get(endpoint);
        const newData = data.results.map((data: any) => {
          const url = data['poster_path'];
          data['poster_url'] = IMAGE_BASE_URL + POSTER_SIZE + url;

          return data;
        });
        console.log(data);
        commit('SET_SEARCH', newData);
      } catch (err) {
        console.log(err);
      }
    },
  },
  modules: {},
});
