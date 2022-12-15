import React, {Component} from 'react';
import CardList from '../components/Assembly/CardList';
import CardList2 from '../components/Assembly/CardList2';
import SearchBox from '../components/SearchBox.jsx';
import SubmitButton from '../components/SubmitButton.jsx'
import Forecast from '../components/Forecast/Forecast.jsx'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      weatherData: [],
      weatherData2: [],
      searchField: '45.57592, -122.85168',
      bool: false,
      url: 'https://weatherapi-com.p.rapidapi.com/current.json?q=',
      forecast: 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=',
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
      
      fetch(''+this.state.forecast+''+this.state.searchField+'', options)
      .then(response => response.json())
    .then(weather => this.setState({ weatherData: [weather]}))
    .catch(err => console.log('error', err));
    console.log(this.state.weatherData);
    //add check somewhere to make sure string is valid before rerendering
  }

  async fetchAeris() {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': ''+this.state.apiKey+'',
          'X-RapidAPI-Host': ''+this.state.apiHost1+''
        }
      };
      
      fetch(''+this.state.url1+''+this.state.searchField+'', options)
      .then(response => response.json())
      .then(weather => this.setState({ weatherData2: [weather]}))
      .catch(err => console.log('error', err));
  }

  // async fetch3DayCast() {
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': '3a836c49fdmshf423ee7c43600d9p130177jsn92668590654f',
  //       'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  //     }
  //   };
  
  // fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=45.57592%2C%20-122.85168&days=3', options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));
  // }

  changeTheField = () => {
    this.setState({
      searchField: ''
    })
  }

  changeToAe = () => {
    this.setState({
      bool: true
    })
    this.onButtonPressAApi()
  }

  changeToCom = () => {
    this.setState({
      bool: false
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


  onButtonPressAApi = () => {
    if (this.state.searchField !== '') {
        this.fetchAeris()
    } else {
      console.log("nothing in search field");
    }
  }


  onButtonPress = () => {
    if (this.state.searchField !== '') {
        this.fetchApi()
    } else {
      console.log("nothing in search field");
    }
  }

  render() {
    const { weatherData, weatherData2, bool } = this.state;
    return (
      <div className='tc'>
          <button onClick={() => { this.changeToCom()}} className="button button1">Use weatherapi-com</button>
          <button onClick={() => { this.changeToAe()}} className="button button2">Use aerisweather</button>
          {bool ?
          <SubmitButton buttonPress={this.onButtonPressAApi}/>
          :
          <SubmitButton buttonPress={this.onButtonPress}/>
          }
          <SearchBox searchChange={this.onSearchChange}/>
          {bool ?
            <CardList2 weatherData2={weatherData2}/>
          :  
            <CardList weatherData={weatherData}/>
          }
      </div>
    );
  }
}

export default App;