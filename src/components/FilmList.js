import React from 'react';

class FilmList extends React.Component{
    state = {
        films: []
    }

    componentDidMount(){

    }

    render(){
        return(
            <ul>
                { this.state.films.map((film) => (
                    <li key={film.id}>film.title</li>
                ))}
            </ul>
        )
    }
}