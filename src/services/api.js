const baseUrl = 'https://api.themoviedb.org/3';
const API_KEY = 'f5d4f829390c2e9bfbd659ded2adfd4a';

export async function FetchTrendingMovies() {
  try {
    const response = await fetch(
      `${baseUrl}/trending/movie/day?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return Promise.reject(new Error('Oops, something went wrong !'));
  }
}

export async function FetchMoviesByQuery(query) {
  try {
    const response = await fetch(
      `${baseUrl}/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${query}&include_adult=false`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return Promise.reject(new Error('Oops, something went wrong !'));
  }
}

export async function FetchMovieDetails(movieId) {
  try {
    const response = await fetch(
      `${baseUrl}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return Promise.reject(new Error('Oops, something went wrong !'));
  }
}

export async function FetchCast(movieId) {
  try {
    const response = await fetch(
      `${baseUrl}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return Promise.reject(new Error('Oops, something went wrong !'));
  }
}

export async function FetchReviews(movieId) {
  try {
    const response = await fetch(
      `${baseUrl}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return Promise.reject(new Error('Oops, something went wrong !'));
  }
}
