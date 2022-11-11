import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox.js';
import SubmitButton from '../components/SubmitButton.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      weatherData: [],
      searchField: '45.57592 -122.85168'
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
    //add check somewhere to make sure string is valid before rerendering
    //enter button to submit
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
    if (this.state.searchField !== '') {
      this.fetchApi()
    } else {
      // this.setState({ searchField: '45.57592 -122.85168'})
      console.log("nothing in search field");
    }
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
    return (
      <div className='tc'>
          <SubmitButton buttonPress={this.onButtonPress}/>
          <SearchBox searchChange={this.onSearchChange}/>
        <CardList weatherData={weatherData}/>
      </div>
    );
  }
}

export default App;