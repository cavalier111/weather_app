import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import cloud from './cloud.svg';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class WeatherDay extends React.Component {

  render() {
  	const Home =  (
  		<div>
    		<h2>Home</h2>
  		</div>
);

    return (
    	
    <button className = "btn btn-primary custom">
    <div style  = {{color:"blue"}}>{this.props.day}</div>
    <img style={{width: 50, height: 50}} src={cloud}  />
    </button>
    

    );

  }

}



 

class WeatherWeek extends React.Component {

    constructor(props) {

    super(props);

  }

  renderDay(day) {

    return (<WeatherDay day = {day}/>

    		);

  }

 

  render() {

 	
    return (

    

     

        <div class = "week-row">
        	<div class = "day">{this.renderDay("Sunday")}</div>
           <div class = "day">{this.renderDay("Monday")}</div>
           <div class = "day">{this.renderDay("Tuesday")}</div>
           <div class = "day">{this.renderDay("Wednesday")}</div>
           <div class = "day">{this.renderDay("Thursday")}</div>
           <div class = "day">{this.renderDay("Friday")}</div>
           <div class = "day">{this.renderDay("Saturday")}</div>


        </div>

     
    

    );

  }

}

 



 


 

ReactDOM.render(



  <WeatherWeek />

 ,

  document.getElementById('root')

);