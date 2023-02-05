import React, { useEffect, useState } from "react";
import axios from "axios";
import Seasons from "../../components/Seasons/Seasons";
import { useParams } from "react-router-dom";
import './SerieSingle.css';

function SerieSingle(){
    const slug = useParams();
    const [serie, setSerie] = useState([]);

    useEffect(() => {
        axios
            .get("https://api.themoviedb.org/3/tv/" + slug.id + "?api_key=1bcabc0fa329a6f21493ce8ca670f65a")
            .then(response => setSerie(response.data))
    }, []);

    function showSeason(){
        if(serie.seasons !== undefined){
            return serie.seasons.map((season) => (
                <div className="seasons">
                    <h2>{ season.name }</h2>
                    <ul>
                        <Seasons id={slug.id} season_number={season.season_number} />
                    </ul>
                </div>
            ))
        }
    }

    return(
        <div>
            <div className="serieSingle">
                <div>
                    <img src={"https://image.tmdb.org/t/p/original/" + serie.poster_path } alt={ serie.name } className="poster" />
                </div>
                <div>
                    <h1>{ serie.name }</h1>
                    <p className="info">{ serie.overview }</p>
                    <div>
                        <p className="info"><span>Number of episodes :</span> { serie.number_of_episodes } </p>
                        <p className="info"><span>Number of seasons :</span> { serie.number_of_seasons }</p>
                    </div>
                    <p className="info"><span>Status of the serie :</span> { serie.status }</p>
                </div>
            </div>
            <div>
                { showSeason() }
            </div>
        </div>
    )
}

export default SerieSingle;