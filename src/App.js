import React from 'react';
import './App.css';
import Home from './views/Home';

import { Route, Routes } from 'react-router-dom';
import Search from './components/Search/Search';

class App extends React.Component {
  render(){
    return (
      <div className="App">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/search' element={<Search/>} />
          </Routes>
      </div>
    );
  }
}

export default App;