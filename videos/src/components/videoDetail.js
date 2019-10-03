import React from 'react';
import Loader from './loader';

const VideoDetail = ({video}) => {

  if(!video) {
    return <div className="ui embed"><Loader /></div>;
  }

  const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;

  return(
    <div>
      <div className="ui embed">
        <iframe
          title="Video player"
          src={videoUrl}
        />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>
          {video.snippet.description}
        </p>
      </div>
    </div>
  );
}

export default VideoDetail;
