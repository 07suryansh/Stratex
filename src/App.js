import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import Card from "./Components/Card";

function App() {
  const [movieData, SetMovieData] = useState([]);
  useEffect(()=>{axios
    .get('https://dummyapi.online/api/movies')
    .then((response) => {
      SetMovieData(response.data);
    })
    .catch((err) => {
      console.log(err);
    });},[])
  return (
    <div className="App">
      <ul className="movie_data">
        {movieData.map((val,index) => {
          return <Card name={val.movie}
          key={val.id}
            rating={val.rating}
            imd={val.imdb_url}
            url={val.image}
          />
        })}
      </ul>
    </div>
  );
}

export default App;
