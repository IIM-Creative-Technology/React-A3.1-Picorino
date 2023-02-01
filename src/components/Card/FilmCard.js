import React from "react";
import './Card.css';

function FilmList(props){
  return (
    <div className="movie_card" key={props.film.id}>
      <div className="info_section">
        <div className="movie_header">
          <img className="locandina" src={"https://image.tmdb.org/t/p/original/" + props.film.poster_path } alt={ props.film.title } />
          <h1>{ props.film.title }</h1>
          <h4>{ props.film.release_date }</h4>
          <p className="type">Action, Crime, Fantasy</p>
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