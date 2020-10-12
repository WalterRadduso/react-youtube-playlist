import React, { useContext } from 'react';
import classNames from 'classnames';

// Context
import { HomeContext } from '../../contexts/Home';

// Components
import Loader from '../Loader';
import VideoList from '../VideoList';

const LeftPanel = () => {
  const {
    state: { loading, videos },
  } = useContext(HomeContext);

  const leftPanelClassname = classNames({
    'left-panel-loading': loading,
    'left-panel': !loading,
  });

  return (
    <div className={leftPanelClassname}>
      {loading ? <Loader message="Loading..." /> : <VideoList {...videos} />}
    </div>
  );
};

export default LeftPanel;
