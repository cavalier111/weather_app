import {List, Map} from 'immutable';


function setDay(state,day){

	return state.set('day',day)

}

export default function(state = Map({ day: "Hi" }), action) {
  switch (action.type) {
  case 'SET_DAY':

  		return setDay(state,action.day);
    }
  return state;

}