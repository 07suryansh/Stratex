import React from "react";
import Card from "./Card";
import "./movieList.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setFavourite,
  setUnFavourite,
  selectFavouriteMovies,
} from "../Stores/states/movieState";

export default function FavouriteList() {
  const dispatch = useDispatch();
  const favouriteMovieData = useSelector(selectFavouriteMovies);
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
        {favouriteMovieData?.map((val, index) => {
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
