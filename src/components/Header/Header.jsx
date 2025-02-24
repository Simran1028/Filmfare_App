import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.jpg";
import "./header.scss";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncSeries,
} from "../../features/movies/movieSlice";

const header = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (input === "") {
      return alert("Please enter the search input");
    }
    dispatch(fetchAsyncMovies(input));
    dispatch(fetchAsyncSeries(input));
    setInput("");
  };
  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to="/">Movie App </Link>
        </div>
        <div className="search-bar">
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Search Movies or Shows..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">
              {" "}
              <i className="fa fa-search"></i>{" "}
            </button>
          </form>
        </div>
        <div className="user-image">
          <img src={user} alt="User" />
        </div>
      </div>
    </>
  );
};

export default header;
