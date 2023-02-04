import React, { useEffect, useState } from "react";
import axios from "axios";

function Seasons(props){
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        axios
            .get("https://api.themoviedb.org/3/tv/" + props.id + "/season/" + props.season_number + "?api_key=1bcabc0fa329a6f21493ce8ca670f65a")
            .then(response => setEpisodes(response.data.episodes))
    })

    return(
        <div>
            { episodes.map((episode) => (
                <li>{ episode.episode_number } - { episode.name } </li>
            ))}
        </div>
    )
}

export default Seasons;