import React from 'react';
import VideoItem from './videoItem';

const VideoList = ({videos, onVideoSelect}) => {
  const renderVideoList = videos.map((video) => {
    return (
      <div className="ui items" key={video.id.videoId}>
        <VideoItem
          video={video}
          onVideoSelect={onVideoSelect}/>
      </div>
    )
  });

  return (
    <div>
      {renderVideoList}
    </div>
  );
};

export default VideoList
