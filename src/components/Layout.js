import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';

const Layout = props => {
  return (
    <>
      <div className="main-Wrapper">
        <Header />
        <div className="news-widget">
          <Row>
            <Col lg="3">
              {' '}
              <Sidebar history={props.history} />
            </Col>
            <Col lg="9">
              <div className="News-Sections">{props.children}</div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
export default Layout;
