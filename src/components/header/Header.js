import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Search from '../../screen/Search';

const Header = () => {
  return (
    <>
      <div className="header">
        <Container>
          <Row className="inner-header">
            <Col lg="4" sm="12" xs="12" className="logo">
              News
            </Col>
            <Col lg="7" sm="12" xs="12" className="logo">
              {window.location.pathname === '/news' ? <Search /> : ''}
            </Col>
            <Col lg="6" sm="12" className="logout">
              <Link to="/logout"> Logout </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Header;
