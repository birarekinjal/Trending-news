import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Search from '../../screen/Search';

const Header = () => {
  const token = localStorage.getItem('token');
  return (
    <>
      <div className="header">
        <Container>
          <Row className="inner-header">
            <Col lg="4" sm="12" xs="12" className="logo">
              News
            </Col>
            {token !== null ? (
              <Col lg="7" sm="12" xs="12" className="logo">
                <Search />
              </Col>
            ) : (
              ''
            )}
            {token !== null ? (
              <Col lg="1" sm="1" className="logout">
                <Link to="/logout" className="logout-wrapper">
                  {' '}
                  <span>
                    {' '}
                    <i className="material-icons"> power_settings_new </i>{' '}
                  </span>
                </Link>
              </Col>
            ) : (
              ''
            )}
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Header;
