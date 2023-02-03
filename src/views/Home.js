import React, { useEffect, useState } from "react";
import Card from "../components/Card/FilmCard";
import './Home.css';

function Home(){
    
    const [films, setFilms] = useState([]);
    const [pageResult, setPageResult] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    
    useEffect(() => {
        fetchData(currentPage);
    })
    
    function fetchData(page){
        fetch(
            "https://api.themoviedb.org/3/discover/movie?api_key=1bcabc0fa329a6f21493ce8ca670f65a&page=" + page
        )
            .then((response) => response.json())
            .then((filmsList) => {
                setFilms(filmsList["results"]);
                setPageResult(filmsList["total_pages"]);
            });
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
    );
}

export default Home;