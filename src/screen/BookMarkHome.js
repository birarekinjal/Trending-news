import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'react-bootstrap';
import * as newsAction from '../actions/newsAction';

const BookMarkHome = props => {
  const { newsReducer } = props;
  const renderNews = newsReducer.bookMarkArticle.map(data => {
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
              <a href={data.url} target="_blank" rel="noopener noreferrer">
                {' '}
                ReadMore>>
              </a>
            </div>
          </Col>
        </Row>
      </div>
    );
  });
  return (
    <>
      <div className="news-main-container">{renderNews}</div>
    </>
  );
};

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  newsAction: bindActionCreators(newsAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(BookMarkHome);
