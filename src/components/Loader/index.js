import React from 'react';
import { string } from 'prop-types';

// Ant Design
import { Spin } from 'antd';

// Ant Design Icons
import { LoadingOutlined } from '@ant-design/icons';

const Loader = ({ message }) => {
  const antIcon = <LoadingOutlined className="loading-outlined" spin />;

  return <Spin indicator={antIcon} tip={message} />;
};

Loader.propTypes = {
  message: string,
};

Loader.defaultProps = {
  message: null,
};

export default Loader;
