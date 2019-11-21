import React, { Component } from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import Search from '../../screen/Search';

export default class Header extends Component {
  render() {
    return (
      <>
        <div className="header">
               <Container>
                    <Row className = "inner-header"> 
                        <Col lg ="4" sm= "12" xs ="12" className = "logo">News</Col>
                         <Col lg ="8" sm= "12" xs ="12" className = "logo"> 
                            <Search/>
                        </Col>
                    </Row>
              </Container>
        </div>
      </>
    )
  }
}
