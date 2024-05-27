import React from 'react'
import './card.css'
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

export default function Card(props) {
  return (
    <div className='card'>
        <img src={props.url} alt="" />
        <span className='movie_name'>{props.name}</span>
        <span className='movie_rating'>Rating: {props.rating}</span>
        <a href={props.imd} className='movie_imd'>IMDb Link</a>
        <FaRegStar />
        <FaStar />
    </div>
  )
}
