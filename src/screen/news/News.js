import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Layout from  '../../components/Layout';
import * as newsAction from '../../actions/newsAction'
import {Col, Row  } from 'react-bootstrap';
import FilterDropDown from './FilterDropDown';

var parm = '';
class News extends Component {
 
  constructor(props) {
    super(props);
     this.state = {
       newsData : []
    }
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
        <div class="data">
           <div>
             <div class="news-articles">
                 <div class="row">
                   <div class="col-lg-7">
                      <div class="title loader-image"></div>
                       <div className = "description loader-image"> </div>
                       <div className = "url loader-image"> </div>
                    </div>
                  </div>
                </div>
                 <div class="news-articles">
                 <div class="row">
                   <div class="col-lg-7">
                      <div class="title loader-image"></div>
                       <div className = "description loader-image"> </div>
                       <div className = "url loader-image"> </div>
                    </div>
                  </div>
                </div>
                 <div class="news-articles">
                 <div class="row">
                   <div class="col-lg-7">
                      <div class="title loader-image"></div>
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
                        {this.state.newsData.length > 0 ?
                            <div> 
                            { 
                              this.state.newsData.map((data,key) =>{
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
  // newsAction: () => dispatch(newsAction(parm,cat))
 })

export default connect(mapStateToProps, mapDispatchToProps)(News);
