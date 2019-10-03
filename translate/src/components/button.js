import React from 'react';
import LanguageContext from '../context/languageContext';
import ColorContext from '../context/colorContext';

class Button extends React.Component{

  render(){
    return (
      <ColorContext.Consumer>
        {(color) =>
          <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {(value) =>  value.language === 'en' ? 'Submit' : 'Voorleggen'}
            </LanguageContext.Consumer>
          </button>
        }
      </ColorContext.Consumer>
    );
  }
}

export default Button;
