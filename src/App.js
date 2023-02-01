import React from 'react';
import './App.css';
import Home from './views/Home';
import CategorieFilter from './components/CategorieFilter/CategorieFilter';

import { Route, Routes } from 'react-router-dom';

function App(){
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/filter' element={<CategorieFilter/>} />
        </Routes>
    </div>
  );
}

export default App;