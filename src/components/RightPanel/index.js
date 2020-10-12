import React from 'react';

// Components
import ListPanel from '../ListPanel';
import VideoPanel from '../VideoPanel';

// Ant Design
import { Col, Divider, Row } from 'antd';

const RightPanel = () => {
  return (
    <Row className="right-panel">
      <Col span={24}>
        <VideoPanel />
      </Col>

      <Divider className="right-panel-divider" />

      <Col span={24}>
        <ListPanel />
      </Col>
    </Row>
  );
};

export default RightPanel;
