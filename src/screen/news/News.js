import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Layout from  '../../components/Layout';
import * as newsAction from '../../actions/newsAction'
import {Col, Row  } from 'react-bootstrap';
import FilterDropDown from './FilterDropDown';

var parm = '';
var currentNews = [];
class News extends Component {
  constructor(props) {
    super(props);
     this.state = {
       newsData : [],
       currentPage: 1,
       newsPerPage: 4,
       currentNews:[],
       pageNumbers:[]
    }
  }
  handleClick(event) {
     this.setState({
          currentPage: Number(event.target.id)
      });
   }
  filterHandleChange(value){
    this.props.newsAction.newsAction(parm,value,null);
  }
  languageHandleChange(value){
    this.props.newsAction.newsAction(parm,null ,value);
  }
  componentDidMount(){
     if(this.props.location.pathname == "/news/bbc-news"){
          parm = 'bbcNews'
     }else{
          parm = 'us'
     }
    this.props.newsAction.newsAction(parm,null,null);
  }
  componentWillReceiveProps(nextProps) {
   if(this.props !== nextProps){
        this.setState({
           newsData : nextProps.newsReducer.newsArticle
        })
    }
  }
 preLoader(){
  return(
      <div> 
        <div className="data">
           <div>
             <div className="news-articles">
                 <div className="row">
                   <div className="col-lg-7">
                      <div class="title loader-image"></div>
                       <div className = "description loader-image"> </div>
                       <div className = "url loader-image"> </div>
                    </div>
                  </div>
                </div>
                 <div className="news-articles">
                 <div className="row">
                   <div className="col-lg-7">
                      <div className="title loader-image"></div>
                       <div className = "description loader-image"> </div>
                       <div className = "url loader-image"> </div>
                    </div>
                  </div>
                </div>
                 <div className="news-articles">
                 <div className="row">
                   <div className="col-lg-7">
                      <div className="title loader-image"></div>
                       <div className = "description loader-image"> </div>
                       <div className = "url loader-image"> </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
  )
}
 render() {
    const {currentPage, newsPerPage } = this.state;
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const pageNumbers = [];
    currentNews =  this.state.newsData.slice(indexOfFirstNews, indexOfLastNews);
       for (let i = 1; i <= Math.ceil(this.state.newsData.length / newsPerPage); i++) {
          pageNumbers.push(i);
     }
    const renderNews = currentNews.map((data,key) =>{
              return(
                     <div className = "news-articles" key = {key}>
                         <Row> 
                              {data.urlToImage !== null ?
                                <Col lg = "3">
                                      <div className = "image-container">
                                             <img src = {data.urlToImage} alt = "no-data" />
                                       </div>
                                </Col> 
                                :''}
                                <Col  lg = {`${data.urlToImage != null ? '7 ' :'10'}`}>
                                        <div className = "title">{data.title} </div>
                                        <div className = "description">  {data.description} </div>
                                        <div className = "url"> <a href = {data.url} target="blank"> {data.url} </a> </div>
                                </Col>
                            </Row>
                            <Row> 
                               <Col lg = "10">
                                <div className = "view-more-wrapper"> <a href = {data.url} target = "_blank"> ReadMore>></a></div></Col>
                            </Row>
                       </div>
                                    
                  )
     })
    const renderPageNumbers = pageNumbers.map(number => {
          return (
                <li
                  key={number}
                  id={number}
                  onClick={this.handleClick.bind(this)}
                  className = {this.state.currentPage  == number ? 'active' : ''}
                >
                  {number} 
                </li>
            );
        });
   return (
    <>
         <Layout> 
            <div className = "news-main-container"> 
               <div className  = "filter-dropDown"> 
                      <div className="inner-filter">
                          <Row>
                             <Col> 
                                   <FilterDropDown
                                     filterHandleChange = {this.filterHandleChange.bind(this)} 
                                     languageHandleChange = {this.languageHandleChange.bind(this)}
                                    />
                             </Col> 
                          </Row>
                      </div>
               </div>
               <div class = "news-articlesWrapper"> 
                  {this.props.newsReducer.loading  == true ?
                     this.preLoader()
                    :
                     <div className = "data"> 
                        {currentNews.length > 0 ?
                            <div> 
                               {renderNews}
                            </div>
                          :  <h1 className = "no-post-found"> No News found</h1>} 
                     </div>
                   }  
                </div>
              </div>
              {currentNews.length > 0 ? 
                <ul id="page-numbers">
                    {renderPageNumbers}
                </ul>
            :''}
        </Layout>
    </>
    )
  }
}



const mapStateToProps = state => ({
 ...state
})

const mapDispatchToProps = dispatch => ({
   newsAction: bindActionCreators(newsAction, dispatch),
 })

export default connect(mapStateToProps, mapDispatchToProps)(News);
