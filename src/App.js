import React, { Component } from 'react';
import Header from './components/header/Header';
import Filter from './components/main/Filter';
import Listings from './components/main/Listings';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section id="content-area">
          <Filter />
          <Listings />
        </section>
      </div>
    );
  }
}

export default App;
