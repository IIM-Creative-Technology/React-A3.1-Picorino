import React from 'react';
import './App.css';
import Home from './views/Home';
import CategorieFilter from './components/CategorieFilter/CategorieFilter';

import { Route, Routes } from 'react-router-dom';

class App extends React.Component {
  render(){
    return (
      <div className="App">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/filter' element={<CategorieFilter/>} />
          </Routes>
      </div>
    );
  }
}

export default App;