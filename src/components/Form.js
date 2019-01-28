import React from 'react';

class Form extends React.Component{


getW(e){
      console.log(e.target.value)
      this.props.getWeather(e.target.value)
    }

    getWthr=()=>{
     console.log(this.refs.city1.value) ;
      this.props.getWeather(this.refs.city1.value)
    }
  render(){
    

    return(<div>
    	
      		
      		
      		
      			
            <input type="text" name="city" ref="city1" placeholder="City" /> &nbsp;

             {/*  <input type="text" name="country" placeholder="country" />&nbsp;
              */} 
               <button onClick={this.getWthr}>Get Weather</button>

      	


      </div>

      )
  }
}

export default Form;