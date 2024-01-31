import axios from 'axios';

export const fetchMoviesApi = async searchKeyword => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=27cf9ca08224d5da159ec688a33b0bea&query=${searchKeyword}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};

export const fetchMovieDetails = async movieId => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=27cf9ca08224d5da159ec688a33b0bea`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/all/day',
      {
        params: {
          api_key: '27cf9ca08224d5da159ec688a33b0bea',
        },
      }
    );
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return [];
  }
};
