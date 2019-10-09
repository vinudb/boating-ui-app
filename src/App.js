import React from 'react';
import 'normalize.css';
import './App.scss';
import BoatCardsList from './components/BoatCardsList';
import Filters from './components/Filters';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <Filters />
        <BoatCardsList />
      </div>
    </div>
  );
}

export default App;
