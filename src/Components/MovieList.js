import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import './movieList.css'

export default function MovieList() {
  const [movieData, SetMovieData] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyapi.online/api/movies")
      .then((response) => {
        SetMovieData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="movie_list">
      <ul className="movie_data">
        {movieData.map((val, index) => {
          return (
            <Card
              name={val.movie}
              key={val.id}
              rating={val.rating}
              imd={val.imdb_url}
              url={val.image}
            />
          );
        })}
      </ul>
    </div>
  );
}
