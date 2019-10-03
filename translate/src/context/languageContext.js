import React from 'react';
//Default value
const Context = React.createContext('en');

export class LanguageStore extends React.Component {
  state = { language: 'en' };

  onLangChange = (lang) => {
    this.setState({language: lang});
  }

  render(){
    return(
      <Context.Provider value={{ ...this.state, onLangChange: this.onLangChange }}>
        {this.props.children}
      </Context.Provider>
    );
  }
};

export default Context;
