import React from 'react';
import Layout from '../../components/Layout';
import { Row, Col } from 'react-bootstrap';
import {FavNewsConsumer} from '../../components/context/FavNewsContext';

class ContextNews extends React.Component {
    // Assign a contextType to read the current theme context.
    // React will find the closest theme Provider above and use its value.
    // In this example, the current theme is "dark".
  
render() {
console.log(this.props, this.contextType)
return (
    <>
     <FavNewsConsumer> 
       { 
          data =>{
                     return (
                      <Layout>
                       <div className = "news-main-container">
                           {console.log(data , "data")}
                           {data  !=  undefined ?  data.map((data) => {
                                  return (
                                    <div className="news-articles" key={data.title}>
                                      <Row>
                                        {data.urlToImage !== null ? (
                                          <Col lg="3">
                                            <div className="image-container">
                                              <img src={data.urlToImage} alt="no-data" />
                                            </div>
                                          </Col>
                                        ) : (
                                          ''
                                        )}
                                        <Col lg={`${data.urlToImage != null ? '7 ' : '10'}`}>
                                          <div className="title">{data.title} </div>
                                          <div className="description"> {data.description} </div>
                                          <div className="url">
                                            {' '}
                                            <a href={data.url} target="blank" rel="noopener noreferrer">
                                              {' '}
                                              {data.url}{' '}
                                            </a>{' '}
                                          </div>
                                        </Col>
                                      </Row>
                                      <Row>
                                        <Col lg="10">
                                          <div className="view-more-wrapper">
                                            {' '}
                                            <a href={data.url} target="_blank" rel="noopener noreferrer"></a>
                                             </div>
                                         </Col>
                                    </Row>
                                    </div>
                                  );
                                
                           }) : <h1> No Data </h1>}   
                       </div> 
                      </Layout>
                     )
             }
        }
     </FavNewsConsumer>
     </>
  );
   }
 }
export default ContextNews



