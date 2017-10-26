/**
 * Created by venkateshkoka on 10/15/17.
 */
import { combineReducers } from 'redux';
import  authReducer from './authReducer';

export default combineReducers({
    auth : authReducer
});