import React, { useEffect, useState } from "react";
import axios from "axios";
import Seasons from "../../components/Seasons/Seasons";
import { useParams } from "react-router-dom";

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
                <div>
                    <p>{ season.name }</p>
                    <ul>
                        <Seasons id={slug.id} season_number={season.season_number} />
                    </ul>
                </div>
            ))
        }
    }

    return(
        <div>
            <h1>{ serie.name }</h1>
            <div>
                { showSeason() }
            </div>
        </div>
    )
}

export default SerieSingle;