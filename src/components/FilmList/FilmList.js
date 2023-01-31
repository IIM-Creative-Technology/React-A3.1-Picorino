import React from "react";
import './FilmList.css';

class FilmList extends React.Component {
  constructor() {
    super();
    this.state = {
      films: [],
      pageResult: 0,
      currentPage: 2
    };
  }

  componentDidMount() {
    this.fetchData(this.state.currentPage);
  }

  fetchData = (page) => {
      console.log(page)
      fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=1bcabc0fa329a6f21493ce8ca670f65a&page=" + page
      )
        .then((response) => response.json())
        .then((filmsList) => {
          this.setState({ 
            films: filmsList["results"],
            pageResult: filmsList["total_pages"]
          });
        });
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
      <div>
        <div className="grid_two film_list">
          {this.state.films.map((film) => (
            <div className="movie_card" key={film.id}>
              <div className="info_section">
                <div className="movie_header">
                  <img className="locandina" src={"https://image.tmdb.org/t/p/original/" + film.poster_path } alt={ film.title } />
                  <h1>{ film.title }</h1>
                  <h4>{ film.release_date }</h4>
                  <p className="type">Action, Crime, Fantasy</p>
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

export default FilmList;
