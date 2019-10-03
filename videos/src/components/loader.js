import React from 'react';

const Loader = (props) => {
  return (
    <div className="ui active centered inverted dimmer">
      <div className="ui tiny text loader">
        {props.message}
      </div>
    </div>
  );
}

Loader.defaultProps = {
  message: 'Loading...'
}

export default Loader;
