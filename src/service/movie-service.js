import axios from 'axios';

const API_KEY = 'a0679b4ab8f61bde963499da4762960e';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
  include_adult: false,
};

export const getTrendingMovies = async () => {
  try {
    const { data } = await axios.get('trending/all/day');
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getSearchingMovies = async query => {
  try {
    const { data } = await axios.get(`search/movie?query=${query}`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getMoviesDetails = async id => {
  try {
    const { data } = await axios.get(`movie/${id}`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getCast = async id => {
  try {
    const { data } = await axios.get(`movie/${id}/credits`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getReviews = async id => {
  try {
    const { data } = await axios.get(`movie/${id}/reviews`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// import axios from 'axios';

// const getTrendingMovies = async () => {
//   const options = {
//     method: 'GET',
//     url: 'https://api.themoviedb.org/3/trending/all/day?language=en-US',
//     params: {
//       language: 'en-US',
//     },
//     headers: {
//       accept: 'application/json',
//       api_key: 'fb25b8f9a46bee713b124c118f253c1a',
//     },
//   };
//   try {
//     const response = await axios(options);
//     return response;
//   } catch (error) {
//     console.error('Error fetching trending movies:', error);
//     throw error;
//   }
// };

// export default getTrendingMovies();
