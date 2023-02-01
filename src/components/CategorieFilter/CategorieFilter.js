import React from "react";
import './CategorieFilter.css';

class CategorieFilter extends React.Component {
  constructor() {
    super();
    this.state = {
      films: [],
      genre: Number,
      pageResult: 0,
      currentPage: 1
    };
    this.genrelist = [
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 16,
        "name": "Animation"
      },
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 99,
        "name": "Documentary"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10751,
        "name": "Family"
      },
      {
        "id": 14,
        "name": "Fantasy"
      },
      {
        "id": 36,
        "name": "History"
      },
      {
        "id": 27,
        "name": "Horror"
      },
      {
        "id": 10402,
        "name": "Music"
      },
      {
        "id": 9648,
        "name": "Mystery"
      },
      {
        "id": 10749,
        "name": "Romance"
      },
      {
        "id": 878,
        "name": "Science Fiction"
      },
      {
        "id": 10770,
        "name": "TV Movie"
      },
      {
        "id": 53,
        "name": "Thriller"
      },
      {
        "id": 10752,
        "name": "War"
      },
      {
        "id": 37,
        "name": "Western"
      }]
  }

  componentDidMount() {
    this.fetchData(this.state.currentPage);
  }

  fetchData = (page) => {
    fetch(
      'https://api.themoviedb.org/3/discover/movie?api_key=1bcabc0fa329a6f21493ce8ca670f65a&with_genres=' + this.state.genre + '&page=' + page
    )
      .then((response) => response.json())
      .then((filmsList) => {
        this.setState({ 
          films: filmsList["results"],
          pageResult: filmsList["total_pages"]
        });
      });
}

  updateGenre(new_genre) {
    this.setState({
      genre: new_genre
    });
    this.componentDidMount()
  }

  handlePrevious = () => {
    if(this.state.currentPage > 1){
      this.setState({ 
        currentPage: this.state.currentPage - 1
      });
      this.fetchData(this.state.currentPage - 1)
    }
  }

  handleNext = () => {
    if(this.state.currentPage < this.state.pageResult){
      this.setState({ 
        currentPage: this.state.currentPage + 1
      });
      this.fetchData(this.state.currentPage + 1)
    }
  }

  render() {
    return (
      <div className="container">
        <div className="filter_global">
          {this.genrelist.map((genre) => (
            <button className="filter" onClick={() => this.updateGenre(genre.id)} key={genre.id}>{genre.name}</button>
          ))}
        </div>
        <div className="grid_two film_list">
          {this.state.films.map((film) => (
            <div className="movie_card" key={film.id}>
              <div className="info_section">
                <div className="movie_header">
                  <img className="locandina" src={"https://image.tmdb.org/t/p/original/" + film.poster_path } alt="poster" />
                  <h1>{ film.title }</h1>
                  <h4>{ film.release_date }</h4>
                  <p className="type">{ film.genres }</p>
                </div>
                <div className="movie_desc">
                  <p className="text">{ film.overview.substring(0, 200) + '...' }</p>
                </div>
              </div>
              <div className="blur_back back" style={{ background: `url(https://image.tmdb.org/t/p/original/` + film.poster_path + `)`}}></div>
            </div>
          ))}
        </div>
        <div className="pagination">
          <button onClick={ this.handlePrevious } >Previous</button>
          <p>{ this.state.currentPage }</p>
          <button onClick={ this.handleNext }>Next</button>
        </div>
      </div>
    );
  }
}

export default CategorieFilter;
