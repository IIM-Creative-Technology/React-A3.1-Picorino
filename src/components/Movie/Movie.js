import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Movie.css';

const Movie = (props) => {
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const slug = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const movieResponse = await fetch(`https://api.themoviedb.org/3/movie/`+ slug.id + `?api_key=cb7d0d8ed40c06a214b50e559c819c76`);
      const movieData = await movieResponse.json();
      setMovie(movieData);

      const creditsResponse = await fetch(`https://api.themoviedb.org/3/movie/`+ slug.id + `/credits?api_key=cb7d0d8ed40c06a214b50e559c819c76`);
      const creditsData = await creditsResponse.json();
      setCredits(creditsData);
    };
    fetchData();
  }, [slug.id]);

  return (
    <div>
       {movie && credits ? (
        <div>
           <div className="movie_card_info" key={movie.id}>
           <h1 >{movie.title}</h1>
          <img className='movie_card_info_image' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
         
          <p >{movie.overview}</p>
          <p>Action, Crime, Fantasy</p>
          <p >Original language : {movie.original_language}</p>
          <p >Popularity {movie.popularity}</p>
          <p >Release date : {movie.release_date}</p>
          <p >Vote average : {movie.vote_average} / 10</p>
          <h3>Casting</h3>
          <ul>
            {credits.cast.slice(0, 15).map((castMember, index) => (
              <li key={index}>
                <img src={`https://image.tmdb.org/t/p/w185/${castMember.profile_path}`} alt={castMember.name} />
                {castMember.name}
                </li>
            ))}
          </ul>
        </div>
        </div> 
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Movie;
