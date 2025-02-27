import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import MovieDetails from "./../src/components/MovieDetails/MovieDetails";
import PageNotFound from "./../src/components/Page_Not_Found/PageNotFound";
import PageFooter from "./components/Footer/PageFooter";
import PageHome from "./components/Home/PageHome";
import HeaderPage from "./components/Header/HeaderPage";


function App() {
  return (
    <div className="App">
      <Router>
        <HeaderPage />
        <div className="container">
          <Routes>
            <Route path="/" element={<PageHome />} />
            <Route path="/movie/:imdbID" element={<MovieDetails />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <PageFooter />
      </Router>
    </div>
  );
}

export default App;
