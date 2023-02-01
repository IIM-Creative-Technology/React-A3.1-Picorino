import React from 'react';
import './App.css';
import Home from './views/Home';
import CategorieFilter from './components/CategorieFilter/CategorieFilter';

import { Route, Routes } from 'react-router-dom';
import Search from './components/Search/Search';

function App(){
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/search' element={<Search/>} />
          <Route path='/filter' element={<CategorieFilter/>} />
        </Routes>
    </div>
  );
}

export default App;