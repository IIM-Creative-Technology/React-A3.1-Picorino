import React, { useEffect, useState } from "react";
import Card from "../components/Card/FilmCard";
import Filter from "../components/CategorieFilter/CategorieFilter";
import './Home.css';


function Home() {
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
    <div>
        <div>
            <Filter updategenre={updateGenre} genrelist={genrelist}/>
        </div>
        <div className="grid_two film_list">
            { films.map((film) => (
                <Card film={film}/>
            ))}
        </div>
        <div className="pagination">
            <button onClick={ handlePrevious } >Previous</button>
            <p>{ currentPage }</p>
            <button onClick={ handleNext }>Next</button>
        </div>
    </div>
  )
}

export default Home;