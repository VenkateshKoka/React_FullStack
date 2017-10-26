/**
 * Created by venkateshkoka on 10/15/17.
 */

import { FETCH_USER } from '../actions/types';

export default function (state = null, action) {
    console.log(action);
    //console.log(FETCH_USER);
    //console.log(state);
    switch (action.type){
        case FETCH_USER:
            console.log("koka");
            return action.payload || false;
        default :
            return state;
    }
}