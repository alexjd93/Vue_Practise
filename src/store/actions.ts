import axios from 'axios';
import { API_KEY, API_URL } from '../config';

export const getPopularMovieData = async ({ commit }: any) => {
  try {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US@page=1`;
    const response = await axios.get(endpoint);
    commit('SET_DATA', response.data);
  } catch (err) {
    console.log(err);
  }
};
