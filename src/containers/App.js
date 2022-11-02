import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox.js';
import { weatherData } from '../weatherData';

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
      const { weatherData, searchField } = this.state;
    const filteredWeather = weatherData.filter(weather => {
        return weather.name.toLowerCase().includes(searchField.toLowerCase());
      })
    if (!weatherData.length) {
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