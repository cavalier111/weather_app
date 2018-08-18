import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import cloud from './cloud.svg';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

import {

  HashRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom'



import { withRouter } from 'react-router'


class WeatherDay extends React.Component {

  render() {
  	const Home =  (
  		<div>
    		<h2>Home</h2>
  		</div>
);

    return (
    //Create the link to the correct url for that day
    <Link to= {'/' + this.props.day} >
    <button className = "btn btn-primary custom" onClick={this.props.onClick}>
    <div style  = {{color:"blue"}}>{this.props.day}</div>
    <img style={{width: 50, height: 50}} src={cloud}  />
    </button>
    </Link>
    
    

    );

  }

}

class WeatherHourly extends React.Component {
	render(){
		return(	
  
		<div>
<div> {this.props.match.params.day} </div>
</div>
		);
	}
}

//This allows you to access the parameters from the url (access day that is in url)
const WeatherHourlyWithRouter = withRouter(WeatherHourly)




 

class WeatherWeek extends React.Component {

    constructor(props) {

    super(props);
    this.state = {
      day: "",
    };

    this.renderHourly = this.renderHourly.bind(this);

  }

  renderHourly(day){
  
  	 this.setState({
      day: day,
    });  
    }


  renderDay(day) {

    return (
    	<div><WeatherDay day = {day} onClick = {()=> this.renderHourly(day)} />
    	 
    	 </div>

    	);

  }

  showHourly(){
  	return(
<div>
		{this.state.day ?
           <WeatherHourlyWithRouter day = {this.state.day} /> :
           null
        }
        </div>

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
           <div class = "day">{this.showHourly()}</div>


        </div>

     
    

    );

  }

}

 


 


const Main = () => (
  <main>
    <Switch>
      <Route path='/:day' component={WeatherHourly}/>
    </Switch>
  </main>
)

const AppIndex = () => (
  <div>
    <header>
    	<WeatherWeek />
  	</header>
    <Main />
  </div>
)

ReactDOM.render(
	(
  <HashRouter>
    <AppIndex />
  </HashRouter>
),
	document.getElementById('root')

);