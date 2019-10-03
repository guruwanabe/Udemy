import React from 'react';

const Button = (props) => {
  return(
    <button {...props}>
      {props.icon ? <Icon className={props.icon}/> : ''}
      {props.text}
    </button>
  );
};

const Icon = (props) => {
  return <i className={props.className}/>;
};

Button.defaultProps = {
  icon: ''
};

export default Button;
