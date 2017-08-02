import React, { Component } from 'react';
import WeatherList from './containers/weather_list';
import SearchBar from './containers/search_bar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App col-xs-10 col-xs-offset-1">
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

export default App;
