import React from 'react';

// Context
import { HomeProvider } from '../../contexts/Home';

// Components
import LeftPanel from '../../components/LeftPanel';
import RightPanel from '../../components/RightPanel';

// Ant Design
import { Col, Row } from 'antd';

const HomePage = () => (
  <HomeProvider>
    <div className="home-page">
      <Row className="home-page-header">
        <Col span={24}>
          <h4>Youtube Playlist</h4>
        </Col>
      </Row>

      <Row>
        <Col xs={{ span: 24, order: 1 }} sm={{ span: 24, order: 1 }} md={{ span: 12, order: 0 }}>
          <LeftPanel />
        </Col>

        <Col xs={{ span: 24, order: 0 }} sm={{ span: 24, order: 0 }} md={{ span: 12, order: 1 }}>
          <RightPanel />
        </Col>
      </Row>
    </div>
  </HomeProvider>
);

export default HomePage;
