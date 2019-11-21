import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Layout from  '../../components/Layout';
import * as newsAction from '../../actions/newsAction'
import {Col, Row  } from 'react-bootstrap';
import FilterDropDown from './FilterDropDown';

var parm = '';
var currentTodos = [];
class News extends Component {
  constructor(props) {
    super(props);
     this.state = {
       newsData : [],
       currentPage: 1,
       todosPerPage: 4
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
     this.setState({
        currentPage: Number(event.target.id)
     });
   }
  handlePageChange(pageNumber) {
    this.setState({activePage: pageNumber});
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
    const {currentPage, todosPerPage } = this.state;
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    currentTodos =  this.state.newsData.slice(indexOfFirstTodo, indexOfLastTodo);
    const pageNumbers = [];
       for (let i = 1; i <= Math.ceil(this.state.newsData.length / todosPerPage); i++) {
          pageNumbers.push(i);
     }
    const renderPageNumbers = pageNumbers.map(number => {
          return (
            <li
              key={number}
              id={number}
              onClick={this.handleClick}
            >
             <a href = "#"> {number} </a>
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
                  {/* new data */}
                  {this.props.newsReducer.loading  == true ?
                     this.preLoader()
                   :
                     <div className = "data"> 
                        {currentTodos.length > 0 ?
                            <div> 
                            { 
                              currentTodos.map((data,key) =>{
                                return(
                                    <div className = "news-articles" key = {key}>
                                      <Row> 
                                        {data.urlToImage !== null ?
                                          <Col lg = "3">
                                              <div className = "image-container">
                                                  <img src = {data.urlToImage} alt = "no-data" />
                                              </div>
                                          </Col> :''}
                                          <Col  lg = {`${data.urlToImage != null ? '7 ' :'9'}`}>
                                            <div className = "title">{data.title} </div>
                                            <div className = "description">  {data.description} </div>
                                            <div className = "url"> <a href = {data.url} target="blank"> {data.url} </a> </div>
                                          </Col>
                                      </Row>
                                      </div>
                                    
                                )
                            })  
                            }
                            </div>
                          :  <h1 className = "no-post-found"> No News found</h1>} 
                     </div>
                   }  
                </div>
              </div>
              {currentTodos.length > 0 ? 
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
