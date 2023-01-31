import React from "react";
import './FilmList.css';

class FilmList extends React.Component {
  constructor() {
    super();
    this.state = {
      films: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=1bcabc0fa329a6f21493ce8ca670f65a"
    )
      .then((response) => response.json())
      .then((filmsList) => {
        this.setState({ films: filmsList["results"] });
      });
  }

  render() {
    return (
      <div className="grid_two film_list">
        {console.log(this.state.films)}
        {this.state.films.map((film) => (
          <div class="movie_card" key={film.id}>
            <div class="info_section">
              <div class="movie_header">
                <img class="locandina" src={"https://image.tmdb.org/t/p/original/" + film.poster_path } />
                <h1>{ film.title }</h1>
                <h4>{ film.release_date }</h4>
                <p class="type">Action, Crime, Fantasy</p>
              </div>
              <div class="movie_desc">
                <p class="text">{ film.overview.substring(0, 200) + '...' }</p>
              </div>
            </div>
            <div class="blur_back back" style={{ background: `url(https://image.tmdb.org/t/p/original/` + film.poster_path + `)`}}></div>
          </div>
        ))}
      </div>
    );
  }
}

export default FilmList;
