import React, { useContext } from 'react';
import { string } from 'prop-types';

// Config
import { YT_VIDEOS } from '../../config';

// Context
import { HomeContext } from '../../contexts/Home';

// Ant Design Icons
import { ArrowLeftOutlined } from '@ant-design/icons';

const VideoPanel = () => {
  const {
    state: { videoId },
  } = useContext(HomeContext);

  return (
    <div className="video-panel">
      {videoId ? (
        <iframe
          width="100%"
          height="350"
          src={`${YT_VIDEOS}/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          autoplay="1"
        />
      ) : (
        <div className="select-video">
          <ArrowLeftOutlined />
          <p>Select a video to reproduce.</p>
        </div>
      )}
    </div>
  );
};

export default VideoPanel;
