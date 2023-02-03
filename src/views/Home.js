import React from "react";
import Card from "../components/Card/FilmCard";
import './Home.css';
import axios from 'axios';



class Home extends React.Component{
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
        fetch(
            "https://api.themoviedb.org/3/discover/movie/550?api_key=1bcabc0fa329a6f21493ce8ca670f65a&page=" + page
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
                    <Card film={film}/>
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

export default Home;