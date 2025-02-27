import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncSeries,
} from "../../features/movies/movieSlice";
import MovieListingPage from "../MovieListing/MovieListingPage";

const PageHome = () => {
  const dispatch = useDispatch();
  const movieText = "Harry";
  const seriesText = "Friends";
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncSeries(seriesText));
  }, [dispatch]);

  return (
    <>
      <div className="banner-img"></div>

      <MovieListingPage />
    </>
  );
};

export default PageHome;
