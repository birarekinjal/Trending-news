import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Col, Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Layout from '../../components/Layout';
import * as newsAction from '../../actions/newsAction';
import FilterDropDown from './FilterDropDown';
import BookMarks from '../BookMarks';
import BookMarkHome from '../BookMarkHome';

const parm = '';
let currentNews = [];
const bookMarksNews = [];
class News extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem('token');
    let loggedIn = true;
    if (token === null) {
      loggedIn = false;
    }
    this.state = {
      newsData: [],
      currentPage: 1,
      newsPerPage: 4,
      loggedIn
    };
  }

  componentDidMount() {
    const { location, news } = this.props;
    console.log(this.props);
    console.log(location);
    // if (location.pathname === '/news/bbc-news') {
    //   parm = 'bbcNews';
    // } else {
    //   parm = 'us';
    // }
    // news.fetchNewsAction(parm, null, null);
  }

  // eslint-disable-next-line
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState({
        newsData: nextProps.newsReducer.newsArticle
      });
    }
  }

  handleClick = event => {
    this.setState({
      currentPage: Number(event.target.value)
    });
  };

  filterHandleChange = value => {
    const { news } = this.props;
    news.fetchNewsAction(parm, value, null);
  };

  languageHandleChange = value => {
    const { news } = this.props;
    news.fetchNewsAction(parm, null, value);
  };

  preLoader = () => {
    return (
      <div>
        <div className="data">
          <div>
            <div className="news-articles">
              <div className="row">
                <div className="col-lg-7">
                  <div className="title loader-image" />
                  <div className="description loader-image"> </div>
                  <div className="url loader-image"> </div>
                </div>
              </div>
            </div>
            <div className="news-articles">
              <div className="row">
                <div className="col-lg-7">
                  <div className="title loader-image" />
                  <div className="description loader-image"> </div>
                  <div className="url loader-image"> </div>
                </div>
              </div>
            </div>
            <div className="news-articles">
              <div className="row">
                <div className="col-lg-7">
                  <div className="title loader-image" />
                  <div className="description loader-image"> </div>
                  <div className="url loader-image"> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  bookMarkOnChange = (value, list) => {
    const { news } = this.props;
    if (value === true) {
      bookMarksNews.push(list);
    } else {
      bookMarksNews.pop(list);
    }
    news.bookMarkNews(bookMarksNews);
  };

  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/" />;
    }
    const { currentPage, newsPerPage, newsData } = this.state;
    const { history, newsReducer } = this.props;
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const pageNumbers = [];
    currentNews = newsData.slice(indexOfFirstNews, indexOfLastNews);

    for (let i = 1; i <= Math.ceil(newsData.length / newsPerPage); i += 1) {
      pageNumbers.push(i);
    }
    const renderNews = currentNews.map(data => {
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
                <a href={data.url} target="_blank" rel="noopener noreferrer">
                  {' '}
                  {data.url}{' '}
                </a>{' '}
              </div>
            </Col>
            <Col lg="1">
              <BookMarks list={data} bookMarkOnChange={this.bookMarkOnChange} />
            </Col>
          </Row>
          <Row>
            <Col lg="10">
              <div className="view-more-wrapper">
                {' '}
                <a href={data.url} target="_blank" rel="noopener noreferrer">
                  ReadMore &gt;&gt;
                </a>
              </div>
            </Col>
          </Row>
        </div>
      );
    });

    const renderPageNumbers = pageNumbers.map(number => {
      const currentPageNo = currentPage === number ? 'active' : '';
      return (
        <li key={number} id={number} className={currentPageNo}>
          <button type="button" onClick={this.handleClick} value={number}>
            {' '}
            {number}{' '}
          </button>
        </li>
      );
    });
    return (
      <>
        <Layout history={history}>
          {window.location.pathname === '/news/bookmark' ? (
            <BookMarkHome />
          ) : (
            <div className="news-main-container">
              <div className="filter-dropDown">
                <div className="inner-filter">
                  <Row>
                    <Col>
                      <FilterDropDown
                        filterHandleChange={this.filterHandleChange}
                        languageHandleChange={this.languageHandleChange}
                      />
                    </Col>
                  </Row>
                </div>
              </div>
              <div className="news-articlesWrapper">
                {newsReducer.loading === true ? (
                  this.preLoader()
                ) : (
                  <div className="data">
                    {currentNews.length > 0 ? (
                      <div>{renderNews}</div>
                    ) : (
                      <h1 className="no-post-found"> No News found</h1>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {window.location.pathname !== '/news/bookmark' &&
          currentNews.length > 0 ? (
            <ul id="page-numbers">{renderPageNumbers}</ul>
          ) : (
            ''
          )}
        </Layout>
      </>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  news: bindActionCreators(newsAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(News);
