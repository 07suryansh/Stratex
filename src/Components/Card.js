import React from 'react'
import './card.css'

export default function Card(props) {
  return (
    <div className='card'>
        <img src={props.url} alt="" />
        <span className='movie_name'>{props.name}</span>
        <span className='movie_rating'>{props.rating}</span>
        <a href={props.imd} className='movie_imd'>IMDb</a>
    </div>
  )
}
