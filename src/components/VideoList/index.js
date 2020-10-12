import React, { useContext } from 'react';
import { arrayOf, shape } from 'prop-types';

// Context
import { HomeContext } from '../../contexts/Home';

// Actions
import { selectVideo } from '../../contexts/Home/actions';

// Ant Design
import { Card } from 'antd';
const { Meta } = Card;

const VideoList = ({ items }) => {
  const { dispatch } = useContext(HomeContext);

  const handleSelectVideo = async videoId => {
    await selectVideo(dispatch, videoId);
  };

  return (
    <div className="video-list">
      {items.map(item => {
        const {
          id: { videoId },
          snippet: {
            channelTitle,
            description,
            thumbnails: { high: videoImg },
          },
        } = item;

        return (
          <Card
            key={videoId}
            hoverable
            style={{ width: 240 }}
            cover={<img alt={channelTitle} src={videoImg.url} />}
            className="video-list-item"
            onClick={() => handleSelectVideo(videoId)}
          >
            <Meta title={channelTitle} description={description} />
          </Card>
        );
      })}
    </div>
  );
};

VideoList.propTypes = {
  items: arrayOf(shape({})),
};

VideoList.defaultProps = {
  items: [],
};

export default VideoList;
