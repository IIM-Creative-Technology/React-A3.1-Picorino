import React from 'react';
import './App.css';
import Home from './views/Home';
import Movie from './components/Movie/Movie'

import { Route, Routes } from 'react-router-dom';

class App extends React.Component {
  render(){
    return (
      <div className="App">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/movie' element={<Movie/>} />
          </Routes>
      </div>
    );
  }
}

export default App;