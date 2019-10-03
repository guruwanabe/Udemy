import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import Button from '../button';


class StreamForm extends Component {

  renderError(meta) {
    if(meta.touched && meta.error){
      return (
        <div className="ui pointing red basic label">
          {meta.error}
        </div>
      );
    }
  };

  renderInput = ({input, label, meta}) => {
    const className = `field ${meta.error && meta.touched ? ' error': ''}`;
    return(
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render(){
    return(
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
          <Field
            name="title"
            component={this.renderInput}
            label="Enter title"
          />
          <Field
            name="description"
            component={this.renderInput}
            label="Enter description"
          />
          <Button
            type="submit"
            className="ui button primary"
            text="Submit"
          />
        </form>
      </div>
    );
  };
};

const validate = (formValues) => {
  const errors = {};

  if(!formValues.title){
      errors.title = 'Please enter a title';
  }
  if(!formValues.description){
    errors.description = 'Please enter a description';
  }

  return errors;
};

export default reduxForm({
  form: 'StreamForm',
  validate: validate
})(StreamForm);
