import React from 'react';

class Weather extends React.Component{

  render(){

    return(<div>
    	<br />
    	{this.props.temperature && <p>Temperature (C) : {this.props.temperature} </p>}
    	{this.props.temp && <p>Temperature (F) : {this.props.temp} </p>}
    	{this.props.city && <p>City : {this.props.city} </p>}
    	{this.props.region && <p>State : {this.props.region} </p>}
    	{this.props.country && <p>Country : {this.props.country} </p>}
    	{this.props.humidity && <p>Humidity : {this.props.humidity} </p>}
      		
        {this.props.lastUpdated && <p>Last Updated : {this.props.lastUpdated} </p>}
        {this.props.error && <p>Error : {this.props.error} </p>}
      		
      		
      		
      		
      		

      </div>

      )
  }
}

export default Weather;