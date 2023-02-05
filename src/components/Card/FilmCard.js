import axios from "axios";
import React, { useState } from "react";
import './Card.css';
import { Link } from 'react-router-dom';

function FilmList(props){
  const [genreList, setGenreList] = useState([])

  callGenre()
  function callGenre(){
    axios
      .get("https://api.themoviedb.org/3/genre/movie/list?api_key=1bcabc0fa329a6f21493ce8ca670f65a")
      .then(response => setGenreList(response.data.genres))
  }

  function showGenre(genre,id){
    if(genre.id === id){
      return genre.name
    }
  }

  return (
    <div className="movie_card" key={props.film.id}>
      <div className="info_section">
        <div className="movie_header">
        <Link to={`/movie/${props.film.id}`}>
          <img className="locandina" src={"https://image.tmdb.org/t/p/original/" + props.film.poster_path } alt={ props.film.title } />
          <h1>{ props.film.title }</h1>
          <h4>{ props.film.release_date }</h4>
          </Link>
          <p className="type">{ props.film.genre_ids.map((genre_id) => (
            genreList.map((genre) => (
              <p> { showGenre(genre, genre_id) } </p>
            )) 
          )) }</p>
        </div>
        <div className="movie_desc">
          <p className="text">{ props.film.overview.substring(0, 200) + '...' }</p>
        </div>
      </div>
      <div className="blur_back back" style={{ background: `url(https://image.tmdb.org/t/p/original/` + props.film.poster_path + `)`}}></div>
    </div>
  );
}

export default FilmList;