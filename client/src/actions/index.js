/**
 * Created by venkateshkoka on 10/15/17.
 */
import axios from 'axios';
import {FETCH_USER} from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({type:FETCH_USER, payload: res.data});

};

export const handleToken = (token) => async dispatch =>{
    const  res = await  axios.post('/api/stripe',token);
    dispatch({type:FETCH_USER, payload: res.data});

}
    // instead of .then promise we refactored the code to
    // using async and await keywords.


