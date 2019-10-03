import React, { useState, useEffect }  from 'react';
import ReactDOM from 'react-dom';

import Loader from './components/loader';
import SeasonDisplay from './components/seasonDisplay';
import useLocation from './useLocation';

const App = () => {
  const [lat, errorMessage] = useLocation();

  let content;
  if(errorMessage){
    content = <div>{errorMessage}</div>;
  }else if (lat) {
    content = <SeasonDisplay lat={lat}/>;
  }else {
    content = <Loader message="Please accept location request"/>;
  }

  return(
    <div>{content}</div>
  );

};

ReactDOM.render(<App />, document.querySelector('#root'));
