import React, { useContext } from 'react';
import classNames from 'classnames';

// Context
import { HomeContext } from '../../contexts/Home';

// Components
import Loader from '../Loader';
import VideoList from '../VideoList';

const LeftPanel = () => {
  const {
    state: { loading, searchingVideos, videos },
  } = useContext(HomeContext);

  const leftPanelClassname = classNames({
    'left-panel-loading': loading || searchingVideos,
    'left-panel': !loading,
  });

  return (
    <div className={leftPanelClassname}>
      {loading || searchingVideos ? <Loader message="Loading..." /> : <VideoList {...videos} />}
    </div>
  );
};

export default LeftPanel;
