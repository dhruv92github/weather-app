import React from 'react';

import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY="095cd010857945b7b2b61936180907";  



class App extends React.Component{

  state={

    temperature: undefined,
    temp: undefined,
    city: undefined,
    region: undefined,
    country: undefined,
    humidity: undefined,
    lastUpdated: undefined,
    
    error: undefined
  }

  getWeather= async(value)=>{
    //e.preventDefault(); //signifies single page application. prevent to load whole page.

    //const city=e.target.element.city.value;
    //const country=e.target.element.country.value; //cmd+d to select same name

    const api_call= await fetch('http://api.apixu.com/v1/current.json?key=095cd010857945b7b2b61936180907&q='+value);
    const data=await api_call.json(); // JSON converts the data returned by API into a readable format
    console.log(data);

    if(data.error){
      if(data.error.code===1003){

        this.setState({
           temperature: undefined,
    temp: undefined,
    city: undefined,
    region: undefined,
    country: undefined,
    humidity: undefined,
    lastUpdated: undefined,
          error:"Please enter a city"})
      }
      else{
      this.setState({
      temperature: undefined,
    temp: undefined,
    city: undefined,
    region: undefined,
    country: undefined,
    humidity: undefined,
    lastUpdated: undefined,
    
    error: data && data.error && data.error.message

    })
    }

    }else{

      this.setState({
      temperature: data && data.current && data.current.temp_c,
      temp:data && data.current && data.current.temp_f,
      city: data && data.location &&data.location.name,
      region: data && data.location &&data.location.region,
      country:data && data.location &&data.location.country,
      humidity:data && data.current && data.current.humidity,
      lastUpdated: data && data.current &&data.current.last_updated,
      error: ""

    })
    }

    

  }

  render(){

    return(<div className="container">
      
          <Titles />
          <Form getWeather={this.getWeather} />
          <Weather 

            temperature={this.state.temperature}
            temp= {this.state.temp}
            city={this.state.city}
            region={this.state.region}
            country={this.state.country}
            humidity={this.state.humidity}
            lastUpdated={this.state.lastUpdated}
            error={this.state.error}
          />

      </div>

      )
  }
}

export default App;
