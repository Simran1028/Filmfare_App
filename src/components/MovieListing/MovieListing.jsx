import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { getAllMovies, getAllSeries } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/movieCard";
import "./MovieListing.scss";
import { settings } from "../../common/settings";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);
  let renderMovies,
    renderSeries = "";

  if (movies.Response === "True") {
    renderMovies = movies.Search.map((movie, index) => {
      return <MovieCard key={index} data={movie} />;
    });
  } else {
    renderMovies = (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );
  }

  if (series.Response === "True") {
    renderSeries = series.Search.map((movie, index) => {
      return <MovieCard key={index} data={movie} />;
    });
  } else {
    renderSeries = (
      <div className="series-error">
        <h3>{series.Error}</h3>
      </div>
    );
  }

  return (
    <>
      <div className="movie-wrapper">
        <div className="movie-list">
          <h2>Movies</h2>
          <div className="movie-container">
            <Slider {...settings}>{renderMovies}</Slider>
          </div>
        </div>
        <div className="movie-list">
          <h2>Series</h2>
          <div className="movie-container">
            {" "}
            <Slider {...settings}>{renderSeries}</Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieListing;
