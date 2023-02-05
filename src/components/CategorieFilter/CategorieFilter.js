import React from "react";
import './CategorieFilter.css';

function CategorieFilter(props) { 

  return (
    <div className="filter_global">
      {props.genrelist.map((genre) => (
        <button className="filter" onClick={ () => props.updategenre(genre.id) } key={genre.id}>{genre.name}</button>
      ))}
    </div>
  );
}

export default CategorieFilter;
