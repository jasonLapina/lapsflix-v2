import { configureStore, createSlice } from '@reduxjs/toolkit';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'b294078ac9e5deee42e81781ed53a00c';

const initState = {
  url: `${BASE_URL}/discover/movie?api_key=${API_KEY}`,
  page: 1,
  params: { sort_by: 'popularity.desc' },
};

const slice = createSlice({
  name: 'movies',
  initialState: initState,
  reducers: {
    getInitMovies() {},
    getMoviesByGenre() {},
    changePage() {},
    search() {},
  },
});

const store = configureStore({
  reducer: slice.reducer,
});

export const actions = slice.actions;

export default store;
