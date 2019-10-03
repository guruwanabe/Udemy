import React from 'react';
import LanguageContext from '../context/languageContext';

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;
  render(){
    return(
      <div>
        Select language:
        <i className="flag us" onClick={() => this.context.onLangChange('en')}/>
        <i className="flag nl" onClick={() => this.context.onLangChange('nl')}/>
      </div>
    );
  }
}

export default LanguageSelector;
