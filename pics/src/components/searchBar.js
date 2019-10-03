import React, {Component} from 'react';

class SearchBar extends Component {
  // controlled vs uncontrolled elements
  // controlled elements stores the data inside the component state,
  // rather than in the html element (DOM)

  // Constructor is defined and State is passed to constructor by babel ^^
  state = { term: '' };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.term);
    this.setState({ term: '' });
  }

  render(){
    return(
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
};

export default SearchBar;
