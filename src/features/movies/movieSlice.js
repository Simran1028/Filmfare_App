import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import movieapi from "../../common/apis/movieapi";
import movieapi from "../../common/apis/movieapi.jsx";
import { APIKey } from "../../common/apis/movieapikey.jsx";

export const fetchAsyncMovies = createAsyncThunk(
  "movie/fetchAsyncMovies",
  async (input) => {
    const response = await movieapi.get(
      `?apiKey=${APIKey}&s=${input}&type=movie`
    );

    return response.data;
  }
);
export const fetchAsyncSeries = createAsyncThunk(
  "movie/fetchAsyncSeries",
  async (input) => {
    const response = await movieapi.get(
      `?apiKey=${APIKey}&s=${input}&type=series`
    );

    return response.data;
  }
);

export const fetchAsyncDetails = createAsyncThunk(
  "movie/fetchAsyncDetails",
  async (id) => {
    const response = await movieapi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
  }
);
const initialState = {
  movies: {},
  series: {},
  details: {},
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    removeDetails: (state) => {
      state.removeDetails = {};
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
      })
      .addCase(fetchAsyncDetails.fulfilled, (state, { payload }) => {
        console.log("Fetched");
        return { ...state, details: payload };
      });
  },
});
export const { removeDetails } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.movies.series;
export const getAllDetails = (state) => state.movies.details;
export default movieSlice.reducer;
