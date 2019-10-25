import counterReducer from './counter';
import loggedReducer from './isLogged';
import restaurantReducer from './restaurants';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    restaurant: restaurantReducer
})

export default allReducers;