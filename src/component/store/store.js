import {applyMiddleware, combineReducers, createStore} from 'redux';
import {ADD_DATA} from './ActionType';
import {reducer} from './Reducer';
import thunk from 'redux-thunk';
export const rootReducer = combineReducers({homepage:reducer},applyMiddleware(thunk));
const store = createStore(rootReducer);
export default store;

