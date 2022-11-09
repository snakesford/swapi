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
    }
  }


  
  async fetchApi() {
    
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '3a836c49fdmshf423ee7c43600d9p130177jsn92668590654f',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };
    
    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q='+this.state.searchField+'', options)
      .then(response => response.json())
      .then(weather => this.setState({ weatherData: [weather]}))
      .catch(err => console.error('error', err));
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

  componentDidUpdate(newProps, newState) {
    console.log('after render');
    console.log('before render');
    console.log('search field', this.state.searchField);
    console.log("word", newState.searchField);
  }

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