import React from 'react';

const Loader = (props) => {
  return (
    <div className="ui active centered dimmer">
      <div className="ui big text loader">
        {props.message}
      </div>
    </div>
  );
}

Loader.defaultProps = {
  message: 'Loading...'
}

export default Loader;
