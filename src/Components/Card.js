import React from "react";
import "./card.css";
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

export default function Card({ item, isFavourite, handleFavourite }) {
  return (
    <div className="card">
      <img
        className="img"
        src="https://lumiere-a.akamaihd.net/v1/images/p_junglecruise_21740_v2_bb7f0ae4.jpeg"
        alt=""
      />
      <div className="info">
        <span className="movie_name">{item?.movie}</span>
        <span className="movie_rating">Rating:{item?.rating}</span>
        <a href={item.imdb_url} className="movie_imd">
          IMDb Link
        </a>
        {isFavourite ? (
          <FaStar className="icon" onClick={() => handleFavourite(item)} />
        ) : (
          <FaRegStar className="icon" onClick={() => handleFavourite(item)} />
        )}
      </div>
    </div>
  );
}
