import React, {Component} from 'react';

import unsplash from '../api/unsplash';
import SearchBar from './searchBar';
import ImageList from './imageList';


class App extends Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const config = {
      params: { query: term }
    };
    const response = await unsplash.get('/search/photos', config);

    this.setState({images: response.data.results});
  }

  render(){
    return (
      <div className="ui container" style={{marginTop: '20px'}}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
