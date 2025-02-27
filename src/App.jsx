import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "../src/components/Footer/footer";
import Home from "./../src/components/Home/Home";
import MovieDetails from "./../src/components/MovieDetails/MovieDetails";
import PageNotFound from "./../src/components/Page_Not_Found/PageNotFound";
import Header from "./../src/components/Header/header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetails />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
