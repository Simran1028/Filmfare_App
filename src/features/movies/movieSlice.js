import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieapi from "../../common/apis/movieapi";
import { APIKey } from "../../common/apis/movieapikey";

export const fetchAsyncMovies = createAsyncThunk(
  "movie/fetchAsyncMovies",
  async () => {
    const movieText = "Harry";
    const response = await movieapi.get(
      `?apiKey=${APIKey}&s=${movieText}&type=movie`
    );

    return response.data;
  }
);
export const fetchAsyncSeries = createAsyncThunk(
  "movie/fetchAsyncSeries",
  async () => {
    const seriesText = "Friends";
    const response = await movieapi.get(
      `?apiKey=${APIKey}&s=${seriesText}&type=series`
    );

    return response.data;
  }
);
const initialState = {
  movies: {},
  series: {},
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMovies.pending, () => {
        console.log("Pending...");
      })
      .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
        console.log("Fetched Successfully...");
        return { ...state, movies: payload };
      })
      .addCase(fetchAsyncMovies.rejected, () => {
        console.log("Rejected");
      })
      .addCase(fetchAsyncSeries.fulfilled, (state, { payload }) => {
        console.log("Fetched");
        return { ...state, series: payload };
      });
  },
});
export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.movies.series;
export default movieSlice.reducer;
