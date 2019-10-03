import React, { Component }  from 'react';
import ReactDOM from 'react-dom';

import Loader from './components/loader';
import SeasonDisplay from './components/seasonDisplay';

class App extends Component {
  // Not required, only if we need initial setup, better use component Lifecycle
  // Automatically generated by Babel anyways.
  constructor(props){
    // required if extends, to call the parent constructor
    super(props);

    // State is an JS object that contains data relevant to a component.
    // It must be initialized when a component is created.
    // update component state with setState() if you want to re-render!!!
    // initialize state (asignment)!
    this.state = {
      lat: null,
      errorMessage: ''
    };

    // Lifecycle methods - best practice to initialize
    //
    // componentWillMount
    // Called before the first render
    //
    // componentDidMount
    // Called when component first shows up - visible on screen
    //
    // componentDidUpdate
    // After setState - Sit and wait for updates
    //
    // componentWillUnmount
    // After cleanup - Sit and wait for until is no longer shown
  };

  // Babel implements constructor!!
  // state = {
  //   lat: null,
  //   errorMessage: ''
  // };

  componentDidMount(){
    //Lat gives the emsiphere!!!
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //only updates the given prop, dose not override other props
        this.setState({ lat: position.coords.latitude });
      },
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );
  }

  renderContent(){
    //Conditional rendering - should avoid, use a helper method
    if(this.state.errorMessage){
      return <div>{this.state.errorMessage}</div>;
    };

    if(this.state.lat){
      return <SeasonDisplay lat={this.state.lat}/>;
    }

    return <Loader message="Please accept location request"/>;
  }

  // Must be defined!!!
  // Render method is required, it's called everytime when we updated
  // returns JSX!
  render() {
    return(
      <div>{this.renderContent()}</div>
    );
  }
};

// Functional components can use state and Lifecycle methods
// only with hooks system!!!
// Use with only simple content!!!
// const App = () => {
//   const location = window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (error) => console.log(error)
//   );
//
//   return <div>Latitude: {location}</div>;
// }

ReactDOM.render(<App />, document.querySelector('#root'));
