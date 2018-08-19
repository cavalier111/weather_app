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
} from 'react-router-dom';
import { withRouter } from 'react-router';
import {createStore} from 'redux';
import reducer from './reducer';
import {Provider,connect} from 'react-redux';
import * as actionCreators from './action_creators';
import {List, Map} from 'immutable';


const store = createStore(reducer);


function mapStateToProps(state) {
  return {
    day: state.get('day'),
  };
}




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
    

    this.renderHourly = this.renderHourly.bind(this);

  }

  renderHourly(day){

  	 this.props.setDay(day);
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
		{this.props.day ?
           <WeatherHourlyWithRouter /> :
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

 

const WeatherWeekRedux = connect(
  mapStateToProps,
  actionCreators
)(WeatherWeek);

 


const Main = () => (
  <main>
    <Switch>
      <Route path='/:day' component={WeatherHourlyWithRouter}/>
    </Switch>
  </main>
)

const AppIndex = () => (
  <div>
    <header>
    	<WeatherWeekRedux />
  	</header>
    <Main />
  </div>
)

ReactDOM.render(
	(
	<Provider store={store}>
  		<HashRouter>
    		<AppIndex />
  		</HashRouter>
  	</Provider>
),
	document.getElementById('root')

);