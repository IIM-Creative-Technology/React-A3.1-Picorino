import React from 'react';
import './App.css';
import Home from './views/Home';
import CategorieFilter from './components/CategorieFilter/CategorieFilter';
import { Route, Routes } from 'react-router-dom';
import Search from './components/Search/Search';
import SerieSingle from './views/Series/SerieSingle';


function App(){
  return (
    <div className="App">
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/search' element={<Search/>} />
          <Route path='/filter' element={<CategorieFilter/>} />
          <Route path='/serie/:id' element={<SerieSingle />} />
        </Routes>
    </div>
  );
}

export default App;