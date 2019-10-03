import React from 'react';
import '../style/videoItem.css';


const VideoItem = ({video, onVideoSelect}) => { // {video} === props.video
  return (
    <div
      onClick={ () => onVideoSelect(video) }
      className="item video-item"
    >
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <h4 className="ui header">
          {video.snippet.title}
        </h4>
      </div>
    </div>
  );
}

export default VideoItem;
