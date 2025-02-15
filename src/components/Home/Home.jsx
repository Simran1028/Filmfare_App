import React, { useEffect } from "react";
import MovieListing from "../MovieListing/movieListing";
import movieapi from "../../common/apis/movieapi";
import { APIKey } from "../../common/apis/movieapikey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";

const Home = () => {
  const movieText = "Harry";
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieapi
        .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log("error", err);
        });
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, []);

  return (
    <>
      <div className="banner-img"></div>
 
      <MovieListing />
    </>
  );
};

export default Home;
