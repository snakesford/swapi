import React, {Component} from 'react';
import CardList from './CardList.js';
import SearchBox from './SearchBox.js';
import { weatherData } from './weatherData';

class App extends Component {
  constructor() {
    super()
    this.state = {
      weatherData: [],
      searchField: ''
    }
  }
 
  componentDidMount() {
    // fetch('http://api.weatherapi.com/v1/current.json?key=1db28ab95d2b4a37ac7171352222610&q=Tigard&aqi=no/')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(weather => this.setState({ weatherData: weather}))
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const filteredWeather = this.state.weatherData.filter(weatherData => {
      return weatherData.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })
    if (this.state.weatherData.length === 0) {
      <h1>Loading weather</h1>
    } else {
      return (
        <div className='tc'>
          <h1>Weather data</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <CardList weatherData={filteredWeather}/>
        </div>
      );
    }
  }
}

export default App;