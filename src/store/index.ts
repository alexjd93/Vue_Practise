import { createStore } from 'vuex';
import { getPopularMovieData } from '../api/constant';
import axios from 'axios';
import { API_KEY, API_URL } from '../config';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
export const store = createStore({
  state: {
    data: [],
    hero: {},
  },
  getters: {
    getMovieContainer(state) {
      return state.data;
    },
  },
  mutations: {
    SET_MOVIE(state, movie) {
      state.data = movie;
      state.hero = movie[0];
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
