import React from 'react';
import LanguageContext from '../context/languageContext';

class Field extends React.Component {
  //name is required
  static contextType = LanguageContext;

  render(){
    const text = this.context.language === 'en' ? 'Name' : 'Naam'
    return(
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
