import "./App.css";
import MovieList from "./Components/MovieList";
import { useState,useEffect } from "react";
import FavouriteList from "./Components/FavouriteList";

function App() {
  const [movieType, setMovieType] = useState("movie");
  const [movieBtn,setMovieBtn]=useState("#ffe2ff");
  const [favouriteBtn,setFavouriteBtn]=useState("#ffe2ff");
  useEffect(() => {
    if (movieType === "movie") {
      setMovieBtn("#ff80ff");
      setFavouriteBtn("#ffe2ff");
    } else {
      setFavouriteBtn("#ff80ff");
      setMovieBtn("#ffe2ff");
    }
  }, [movieType]);
  const handleMovieType = (state) => {
    setMovieType(state);
  };
  return (
    <div className="App">
      <span className="brand_name">STRATEX</span>
      <div className="category">
        <button className="btn btn-movie" style={{backgroundColor:movieBtn}} onClick={() => handleMovieType("movie")}>
          All Movies
        </button>
        <button className="btn btn-favourite" style={{backgroundColor:favouriteBtn}} onClick={() => handleMovieType("favorite")}>
          Favourite Movies
        </button>
      </div>
      {movieType === "movie" ? <MovieList /> : <FavouriteList />}
    </div>
  );
}

export default App;
