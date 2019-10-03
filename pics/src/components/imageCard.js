import React, { Component } from 'react';

class ImageCard extends Component {

  imageRef = React.createRef();
  state = { spans: 0 };

  componentDidMount(){
      this.imageRef.current.addEventListener('load', () => {
         const height = this.imageRef.current.clientHeight;
         const spans = Math.ceil(height / 10);
         this.setState({spans});
      });
  }

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{gridRowEnd: `span ${this.state.spans}`}}>
        <img
          ref={this.imageRef}
          src={urls.regular}
          alt={description}
        />
      </div>
    );
  }
}

export default ImageCard;
