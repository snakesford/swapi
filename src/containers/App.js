import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      weatherData: [],
      searchField: ''
    }
  }
 
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    // fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(weather => this.setState({ weatherData: weather}))
  }
  
    // onSearchChange = (event) => {
    //   this.setState({ searchField: event.target.value })
    // }
    
    render() {
      const { weatherData, searchField } = this.state;
      const filteredWeather = weatherData.filter(weather => {
        return weather.address.street.toLowerCase().includes(searchField.toLowerCase());
      })
    if (!weatherData.length) {
      <h1>Loading weather</h1>
    } else {
      return (
        <div className='tc'>
          <h1>Weather data</h1>
          {/* <SearchBox searchChange={this.onSearchChange}/> */}
          <SearchBox />
          <CardList weatherData={filteredWeather}/>
        </div>
      );
    }
  }
}

export default App;