/**
 * Created by venkateshkoka on 11/23/17.
 */

import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field} from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFIELDS from './formFields';

class SurveyForm extends Component{

    renderFields(){
        return _.map(formFIELDS, ({label, name}) => {
           return <Field key={name} component={SurveyField} type="text" label={label} name={name}/>
        });
    };

    render(){
        return(
            <div>
                SurveyForm !!
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text">Cancel</Link>
                    <button type="submit" className="teal btn-flat right white-text ">
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        );
    }
};

function validate(values) {
    const errors = {};

    _.each(formFIELDS,({name})=>{
        if(!values[name]){
            errors[name] = 'You must provide a value';
        };
    });

    // the || '' is added, to remove error occuring from validating the empty emails list,
    // when the page loads at first time and there are emails are yet to be filled.
    errors.recipients = validateEmails(values.recipients || '');

    return errors;
};
// Here destroyOnUnmount: false makes the fields persist with the data,
// rather than clearing the data, when we load formreview component. on cancel
// when we come back, the input data will be there.
export default reduxForm({
    validate,
    form : 'surveyForm',
    destroyOnUnmount:false
})(SurveyForm);