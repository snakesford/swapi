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
      searchField: '45.57592 -122.85168',
      bool: false,
      url: 'https://weatherapi-com.p.rapidapi.com/current.json?q=',
      url0: 'https://weatherapi-com.p.rapidapi.com/current.json?q=',
      url1: 'https://aerisweather1.p.rapidapi.com/observations/',
      apiKey: '3a836c49fdmshf423ee7c43600d9p130177jsn92668590654f',
      apiHost0: 'weatherapi-com.p.rapidapi.com',
      apiHost1: 'aerisweather1.p.rapidapi.com'
    }
  }

  async fetchApi() {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': ''+this.state.apiKey+'',
          'X-RapidAPI-Host': ''+this.state.apiHost0+''
        }
      };
      
      fetch(''+this.state.url0+''+this.state.searchField+'', options)
      .then(response => response.json())
    .then(weather => this.setState({ weatherData: [weather]}))
    .catch(err => console.log('error', err));
    //add check somewhere to make sure string is valid before rerendering
  }

  changeTheField = () => {
    this.setState({
      searchField: ''
    })
  }

  changeToAe = () => {
    this.setState({
      url0: 'https://aerisweather1.p.rapidapi.com/observations/'
    })
    console.log("State is now using aeris", this.state.url0);
    
  }

  changeToCom = () => {
    this.setState({
      url0: 'https://weatherapi-com.p.rapidapi.com/current.json?q='
    })
  }

  componentDidMount() {
    this.fetchApi()
    this.changeTheField()
  }
  
  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }
  
  onButtonPress = () => {
    if (this.state.searchField !== '') {
      this.fetchApi()
    } else {
      console.log("nothing in search field");
    }
  }

  render() {
    const { weatherData } = this.state;
    return (
      <div className='tc'>
          <button onClick={this.changeToCom} className="button button1">Use weatherapi-com</button>
          <button onClick={this.changeToAe} className="button button2">Use aerisweather</button>
          <SubmitButton buttonPress={this.onButtonPress}/>
          <SearchBox searchChange={this.onSearchChange}/>
        <CardList weatherData={weatherData} bool={this.state.bool}/>
      </div>
    );
  }
}

export default App;