import React from "react";
import './Card.css';

class FilmList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="movie_card" key={this.props.film.id}>
        <div className="info_section">
          <div className="movie_header">
            <img className="locandina" src={"https://image.tmdb.org/t/p/original/" + this.props.film.poster_path } alt={ this.props.film.title } />
            <h1>{ this.props.film.title }</h1>
            <h4>{ this.props.film.release_date }</h4>
            <p className="type">Action, Crime, Fantasy</p>
          </div>
          <div className="movie_desc">
            <p className="text">{ this.props.film.overview.substring(0, 200) + '...' }</p>
          </div>
        </div>
        </div>
    );
  }
}

export default FilmList;
