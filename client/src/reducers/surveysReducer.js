/**
 * Created by venkateshkoka on 11/25/17.
 */

import { FETCH_SURVEYS } from '../actions/types';

export default function (state =[], action) {

    switch (action.type){
        case FETCH_SURVEYS:
            // console.log(action.payload);
            return action.payload;
        default:
           // console.log(state);
            return state;
    }
    
}