import React, {Component} from 'react';
import CardList from './CardList.js';
import SearchBox from './SearchBox.js';
import { weatherData } from './weatherData';

class App extends Component {
  constructor() {
    super()
    this.state = {
      weatherData: weatherData,
      searchField: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }


  render() {
    const filteredWeather = this.state.weatherData.filter(weatherData => {
      return weatherData.text.toLowerCase().includes(this.state.searchField.toLowerCase());
    })
    return (
      <div className='tc'>
        <h1>Weather data</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList weatherData={filteredWeather}/>
      </div>
    );
  }
}

export default App;