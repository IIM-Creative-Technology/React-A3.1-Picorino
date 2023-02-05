import React from 'react';
import './App.css';
import Home from './views/Home';
import CategorieFilter from './components/CategorieFilter/CategorieFilter';

import { Route, Routes } from 'react-router-dom';
import Search from './components/Search/Search';
import SerieSingle from './views/Series/SerieSingle';
import Movie from './components/Movie/Movie'


function App(){
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/search' element={<Search/>} />
          <Route path='/filter' element={<CategorieFilter/>} />
          <Route path='/serie/:id' element={<SerieSingle />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Routes>
    </div>
  );
}

export default App;