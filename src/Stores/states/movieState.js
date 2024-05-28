import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  favouriteMovies: [],
};
const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovie: (state, action) => {
      state.movies = action.payload;
    },
    setFavourite: (state, action) => {
      state.favouriteMovies = [...state.favouriteMovies, action.payload];
    },
    setUnFavourite: (state, action) => {
      state.favouriteMovies = state.favouriteMovies.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
});
export const { setFavourite, setMovie, setUnFavourite } = movieSlice.actions;
export const selectMovies = (state) => state.movie.movies;
export const selectFavouriteMovies = (state) => state.movie.favouriteMovies;
export default movieSlice.reducer;
