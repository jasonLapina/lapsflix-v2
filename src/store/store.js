import { configureStore, createSlice } from '@reduxjs/toolkit';

const BASE_URL = 'https://api.themoviedb.org/3';

const initState = {
  BASE_URL,
  page: 1,
  params: {
    sort_by: 'popularity.desc',
    api_key: 'b294078ac9e5deee42e81781ed53a00c',
  },
};

const slice = createSlice({
  name: 'movies',
  initialState: initState,
  reducers: {
    getInitMovies() {},
    getMoviesByGenre() {},
    changePage(state, action) {
      state.params = {
        ...state.params,
        page: action.payload,
      };
    },
    search() {},
  },
});

const store = configureStore({
  reducer: slice.reducer,
});

export const actions = slice.actions;

export default store;
