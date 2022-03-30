import { API_KEY, API_URL } from '../config';
import axios from 'axios';

export const getPopularMovieData = async () => {
  try {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US@page=1`;
    const data = axios.get(endpoint);
    return data;
  } catch (err) {
    console.log(err);
  }
};
