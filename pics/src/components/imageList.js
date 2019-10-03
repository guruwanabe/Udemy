import React from 'react';

import '../style/imageList.css';
import ImageCard from './imageCard'


// class ImageList extends Component {
//   render(){
//     return(
//       <div>Image list</div>
//     );
//   }
// }

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />
  });

  return(
    <div className="image-list">{images}</div>
  );
}

export default ImageList;
