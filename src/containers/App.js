import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox.js';
import SubmitButton from '../components/SubmitButton.js'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      weatherData: [], 
      searchField: '45.57592, -122.85168',
      bool: false,
      url: 'https://weatherapi-com.p.rapidapi.com/current.json?q=',
      url1: 'https://aerisweather1.p.rapidapi.com/observations/',
      apiKey: '3a836c49fdmshf423ee7c43600d9p130177jsn92668590654f',
      apiHost: 'weatherapi-com.p.rapidapi.com',
      apiHost0: 'weatherapi-com.p.rapidapi.com',
      apiHost1: 'aerisweather1.p.rapidapi.com'
    }
  }

  async fetchApi() {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': ''+this.state.apiKey+'',
          'X-RapidAPI-Host': ''+this.state.apiHost+''
        }
      };
      
      fetch(''+this.state.url+''+this.state.searchField+'', options)
      .then(response => response.json())
    .then(weather => this.setState({ weatherData: [weather]}))
    .catch(err => console.log('error', err));

    console.log("Fetch", this.state.weatherData)
    //add check somewhere to make sure string is valid before rerendering
  }

  async fetchAApi() {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': ''+this.state.apiKey+'',
          'X-RapidAPI-Host': ''+this.state.apiHost1+''
        }
      };
      
      fetch(''+this.state.url1+''+this.state.searchField+'', options)
      .then(response => response.json())
      .then(weather => this.setState({ weatherData: [weather]}))
      .catch(err => console.log('error', err));
      console.log("aapi", this.state.weatherData)
  }

  changeTheField = () => {
    this.setState({
      searchField: ''
    })
  }

  changeToAe = () => {
    this.setState({
      bool: true,
      url: 'https://aerisweather1.p.rapidapi.com/observations/',
      apiHost: this.state.apiHost1,
    })
    this.onButtonPress()
  }

  changeToCom = () => {
    this.setState({
      bool: false,
      url: 'https://weatherapi-com.p.rapidapi.com/current.json?q=',
      apiHost: this.state.apiHost0,
    })
    this.onButtonPress()
  }

  componentDidMount() {
    this.onButtonPress()
    this.changeTheField()
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }
  
  onButtonPress = () => {
    if (this.state.searchField !== '') {
      if (!this.state.bool) {
        this.fetchApi()
      } else {
        this.fetchAApi()
      }
    } else {
      console.log("nothing in search field");
    }
  }

  render() {
    const { weatherData } = this.state;
    return (
      <div className='tc'>
          <button onClick={() => { this.changeToCom()}} className="button button1">Use weatherapi-com</button>
          <button onClick={() => { this.changeToAe()}} className="button button2">Use aerisweather</button>
          <SubmitButton buttonPress={this.onButtonPress}/>
          <SearchBox searchChange={this.onSearchChange}/>
        <CardList weatherData={weatherData} bool={this.state.bool}/>
      </div>
    );
  }
}

export default App;