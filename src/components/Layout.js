import React, { Component } from 'react'
import {Alert,Container,Row,Col} from 'react-bootstrap';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar'
import News from  '../screen/news/News'

export default class Layout extends Component {
  render() {
    return (
      <>
       <div className = "main-Wrapper">
       <Header />
       <div className = "news-widget"> </div>
       <Container> 
        <Row> 
          <Col lg = "4"> <Sidebar /></Col>
          <Col lg = "8"> 
             <div className = "News-Sections">
               <News/> 
             </div>
          </Col>
        </Row>
       </Container>
       </div>
      </>
    )
  }
}