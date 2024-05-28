import React from "react";
import axios from "axios";
import { useEffect } from "react";
import Card from "./Card";
import "./movieList.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectMovies,
  setMovie,
  setFavourite,
  setUnFavourite,
  selectFavouriteMovies,
} from "../Stores/states/movieState";

export default function MovieList() {
  const dispatch = useDispatch();
  const movieData = useSelector(selectMovies);
  const favouriteMovieData = useSelector(selectFavouriteMovies);
  console.log("ye hai -> " + favouriteMovieData);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_KEY)
      .then((response) => {
        var value = response.data.sort((a, b) => b.rating - a.rating);
        dispatch(setMovie(value));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  const handleFavouriteMovie = (movie) => {
    if (favouriteMovieData.some((item) => item.id === movie.id)) {
      dispatch(setUnFavourite(movie.id));
    } else {
      console.log("movie", movie);
      dispatch(setFavourite(movie));
    }
  };
  return (
    <div className="movie_list">
      <ul className="movie_data">
        {movieData?.map((val, index) => {
          return (
            <Card
              key={index}
              item={val}
              isFavourite={favouriteMovieData?.some(
                (item) => item.id === val.id
              )}
              handleFavourite={handleFavouriteMovie}
            />
          );
        })}
      </ul>
    </div>
  );
}
