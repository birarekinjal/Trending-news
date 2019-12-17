import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Col, Row } from 'react-bootstrap';
import * as newsAction from '../../actions/newsAction';
import Favorite from './Favorite';
import {FavNewsProvider} from '../../components/context/FavNewsContext';
import FavoriteNews from './FavoriteNews';

var bookMarksNews = [];
class PaginationNews extends Component {
  constructor(props){
    super(props);
    this.state = {
      flag:false
    };
  }
  componentDidMount(){
        const { news } = this.props;
        news.fetchNewsAction('us', null, null);
   }
  bookMarkOnChange(value ,list){
   
    if (value === true) {
      bookMarksNews.push(list);
    } else {
      bookMarksNews.pop(list);
    };
   
    //<FavNewsContext.Provider   value = {bookMarksNews} />
    //news.bookMarkNews(bookMarksNews);
    }
    render() {
      console.log("hiii")
        const { history} = this.props;
        return (
          <FavNewsProvider value = {bookMarksNews}>
            <div>
                 <Layout history={history}>
                     {window.location.pathname == "/news/fav" ? 
                        <FavoriteNews />
                      :
                     <div className = "news-main-container"> 
                           {this.props.newsReducer.newsArticle.length > 0 ? 
                            this.props.newsReducer.newsArticle.map(data => {
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
                                          <Favorite  list={data} bookMarkOnChange={this.bookMarkOnChange} />
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
                              })
                          :''}
                     </div>}
                 </Layout>
            </div>
            </FavNewsProvider>
        );
    }
}

const mapStateToProps = state => ({
    ...state
  });
  
  const mapDispatchToProps = dispatch => ({
    news: bindActionCreators(newsAction, dispatch)
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(PaginationNews);
