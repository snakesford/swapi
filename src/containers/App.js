import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox.js';
import SubmitButton from '../components/SubmitButton.js'
// import weatherApi from '../weatherApi.json';

class App extends Component {
  constructor() {
    super()
    this.state = {
      weatherData: [],
      searchField: 'Tigard'
      // word: ''
    }
  }

  async fetchApi() {
    fetch('http://api.weatherapi.com/v1/current.json?key=1db28ab95d2b4a37ac7171352222610&q='+this.state.searchField+'&aqi=yes')
    .then(response => response.json())
    .then(weather => this.setState({ weatherData: [weather]}))
  }
  componentDidMount() {
    console.log('didmount');
    console.log('did mount searchfield', this.state.searchField);
    this.fetchApi()
  }
  
  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }
  
  onButtonPress = (event) => {
    this.fetchApi()
  }

  componentWillUpdate(newProps, newState) {
  }
  
  componentDidUpdate(newProps, newState) {
    console.log('after render');
    console.log('before render');
    console.log('search field', this.state.searchField);
    console.log("word", newState.searchField);
  }

  // componentDidUpdate(newProps, newState) {
  //   console.log('after render');
  //   console.log("newProps", newProps);
  //   console.log("newState", newState);
  // }

  render() {
    console.log("render")
    const { weatherData } = this.state;
    // const filteredWeather = weatherData.filter(weather => {
    //   return weather.address.street.toLowerCase().includes(searchField.toLowerCase());
      // return weather.location.region.toLowerCase().includes(searchField.toLowerCase());
    // })
    return (
      <div className='tc'>
        {/* <h1>Weather data</h1> */}
          <SubmitButton buttonPress={this.onButtonPress}/>
          <SearchBox searchChange={this.onSearchChange}/>
        <CardList weatherData={weatherData}/>
      </div>
    );
  }
}

export default App;