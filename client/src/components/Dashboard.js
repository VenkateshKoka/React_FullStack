/**
 * Created by venkateshkoka on 11/23/17.
 */
import React from 'react';
import { Link } from 'react-router-dom';
const  Dashboard = () => {
    return(
       <div>
           Dashboard!!koka
           <div className="fixed-action-btn">
               <Link to="/surveys/new" className="btn-floating btn-large red">
                   <i className="large material-icons">add</i>
               </Link>
           </div>
       </div>
    );
}

export default Dashboard;