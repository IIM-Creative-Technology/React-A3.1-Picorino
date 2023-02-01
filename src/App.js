import React from 'react';
import './App.css';
import FilmList from './components/FilmList/FilmList';
import Search from './components/Search/Search';

class App extends React.Component {

  render(){
    return (
      <div className="App">
          <h1>Liste films</h1>
          <Search />
          <FilmList />
      </div>
    );
  }

}

export default App;
