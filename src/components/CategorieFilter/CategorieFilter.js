import React, { useEffect, useState } from "react";
import './CategorieFilter.css';

function CategorieFilter() {

  const [films, setFilms] = useState([]);
  const [genre, setGenre] = useState(null);
  const [pageResult, setPageResult] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const genrelist = [
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
      }
  ]

  useEffect(() => {
    fetchData(currentPage);
  })

  function fetchData(page) {
    fetch(
      'https://api.themoviedb.org/3/discover/movie?api_key=1bcabc0fa329a6f21493ce8ca670f65a&with_genres=' + genre + '&page=' + page
    )
      .then((response) => response.json())
      .then((filmsList) => {
        setFilms(filmsList["results"]);
        setPageResult(filmsList["total_pages"]);
      });
  }

  function updateGenre(new_genre) {
    setGenre(new_genre)
    fetchData()
  }

  function handlePrevious() {
    if(currentPage > 1){
      setCurrentPage(currentPage - 1)
      fetchData(currentPage - 1)
    }
  }

  function handleNext() {
    if(currentPage < pageResult){
      setCurrentPage(currentPage + 1)
      fetchData(currentPage + 1)

    }
  }

  return (
    <div className="container">
      <div className="filter_global">
        {genrelist.map((genre) => (
          <button className="filter" onClick={ () => updateGenre(genre.id) } key={genre.id}>{genre.name}</button>
        ))}
      </div>
      <div className="grid_two film_list">
        {films.map((film) => (
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
        <button onClick={ handlePrevious } >Previous</button>
        <p>{ currentPage }</p>
        <button onClick={ handleNext }>Next</button>
      </div>
    </div>
  );
}

export default CategorieFilter;
