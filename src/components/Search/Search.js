import React, { useState } from 'react';
import axios from 'axios';

const API_KEY = '1bcabc0fa329a6f21493ce8ca670f65a';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
    setResults(res.data.results);
  };

  return (
    <div>
      <form onSubmit={searchMovies}>
        <input
          type="text"
          placeholder="Rechercher un film"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Rechercher</button>
      </form>
      <ul>
        {results.map((result) => (
          <div className="grid_two film_list">
            <div class="movie_card" key={result.id}>
              <div class="info_section">
                <div class="movie_header">
                  <img class="locandina" src={"https://image.tmdb.org/t/p/original/" + result.poster_path } />
                  <h1>{ result.title }</h1>
                  <h4>{ result.release_date }</h4>
                </div>
                <div class="movie_desc">
                  <p class="text">{ result.overview.substring(0, 200) + '...' }</p>
                </div>
              </div>
              <div class="blur_back back" style={{ background: `url(https://image.tmdb.org/t/p/original/` + result.poster_path + `)`}}></div>
          </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Search;
