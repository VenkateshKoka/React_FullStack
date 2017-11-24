/**
 * Created by venkateshkoka on 11/24/17.
 */
import React from 'react';

export default ({ input, label, meta: {error, touched}}) => {

    return(

        <div>
            <label>{label}</label>
            <input {...input} style={{marginBottom:'5px'}}/>
             {/*if touched is true and a error exists. Then error meta is displayed.*/}
            <div className="red-text" style={{marginBottom:"20px"}}>
                {touched && error}
            </div>
        </div>
        );

};