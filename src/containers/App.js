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
      bool: false
    }
  }


  

  
  async fetchApi() {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '3a836c49fdmshf423ee7c43600d9p130177jsn92668590654f',
        'X-RapidAPI-Host': 'aerisweather1.p.rapidapi.com'
      }
    };
    
    fetch('https://aerisweather1.p.rapidapi.com/observations/'+this.state.searchField+'', options)
      .then(response => response.json())
      .then(weather => this.setState({ weatherData: [weather]}))
      .catch(err => console.log('error', err));
  }
  

  // async fetchApi() {

  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': '3a836c49fdmshf423ee7c43600d9p130177jsn92668590654f',
  //       'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  //     }
  //   };
    
  //   fetch('https://weatherapi-com.p.rapidapi.com/current.json?q='+this.state.searchField+'', options)
  //   .then(response => response.json())
  //   .then(weather => this.setState({ weatherData: [weather]}))
  //   .catch(err => console.log('error', err));
  //   //add check somewhere to make sure string is valid before rerendering
  // }

  componentDidMount() {
    this.fetchApi()
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
          <SubmitButton buttonPress={this.onButtonPress}/>
          <SearchBox searchChange={this.onSearchChange}/>
        <CardList weatherData={weatherData} bool={this.state.bool}/>
        <div className='tc pt4'>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    );
  }
}

export default App;