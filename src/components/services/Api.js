import axios from 'axios';

const API_KEY = '27cf9ca08224d5da159ec688a33b0bea';
const BASE_URL = 'https://api.themoviedb.org/3';
//export const fetchMoviesApi = async searchKeyword => {
//  try {
//    const response = await fetch(
//      `https://api.themoviedb.org/3/search/movie?api_key=27cf9ca08224d5da159ec688a33b0bea&query=${searchKeyword}`
//    );
//    const data = await response.json();
//    return data.results;
//  } catch (error) {
//    console.error('Error fetching movies:', error);
//    return [];
//  }
//};

//export const fetchMovieDetails = async movieId => {
//  try {
//    const response = await fetch(
//      `https://api.themoviedb.org/3/movie/${movieId}?api_key=27cf9ca08224d5da159ec688a33b0bea`
//    );
//    const data = await response.json();
//    return data;
//  } catch (error) {
//    console.error('Error fetching movie details:', error);
//    return null;
//  }
//};
export const fetchMoviesApi = async searchKeyword => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query: searchKeyword,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};

export const fetchMovieDetails = async movieId => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/trending/all/day`, {
      params: {
        api_key: '27cf9ca08224d5da159ec688a33b0bea',
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return [];
  }
};

export const fetchReviews = async movieId => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
};

export const fetchMovieCredits = async movieId => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.cast;
  } catch (error) {
    console.error('Error fetching movie credits:', error);
    throw error;
  }
};
