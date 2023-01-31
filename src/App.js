import React from 'react';
import './App.css';
import FilmList from './components/FilmList/FilmList';

class App extends React.Component {

  render(){
    return (
      <div className="App">
          <h1>Liste films</h1>
          <FilmList />
      </div>
    );
  }

}

export default App;
