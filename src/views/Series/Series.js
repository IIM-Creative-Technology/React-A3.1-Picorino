import React, { useEffect, useState } from "react";
import Card from "../../components/Card/SeriesCard";
import './Home.css';


function Series(){
    
    const [series, setSeries] = useState([]);
    const [pageResult, setPageResult] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    
    useEffect(() => {
        fetchData(currentPage);
    })
    
    function fetchData(page){
        fetch(
            "https://api.themoviedb.org/3/discover/tv?api_key=1bcabc0fa329a6f21493ce8ca670f65a&page=" + page
        )
            .then((response) => response.json())
            .then((seriesList) => {
                setSeries(seriesList["results"]);
                setPageResult(seriesList["total_pages"]);
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
            { series.map((serie) => (
                <Card serie={serie}/>
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

export default Series;