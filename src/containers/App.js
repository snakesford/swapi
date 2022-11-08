import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox.js';
// import weatherApi from '../weatherApi.json';

class App extends Component {
  constructor() {
    super()
    this.state = {
      weatherData: [],
      searchField: ''
    }
  }
 
  componentDidMount() {
    fetch('http://api.weatherapi.com/v1/current.json?key=1db28ab95d2b4a37ac7171352222610&q=Tigard&aqi=yes')
    // fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(weather => this.setState({ weatherData: [weather]}))
  }
  
    // onSearchChange = (event) => {
    //   this.setState({ searchField: event.target.value })
    // }
    
  render() {
    const { weatherData } = this.state;
    // const filteredWeather = weatherData.filter(weather => {
    //   return weather.address.street.toLowerCase().includes(searchField.toLowerCase());
      // return weather.location.region.toLowerCase().includes(searchField.toLowerCase());
    // })
    return (
      <div className='tc'>
        <h1>Weather data</h1>
        {/* <SearchBox searchChange={this.onSearchChange}/> */}
        <SearchBox />
        <CardList weatherData={weatherData}/>
      </div>
    );
  }
}

export default App;