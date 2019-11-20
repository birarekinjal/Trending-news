import React, { Component } from 'react';
import { connect } from 'react-redux'
import Layout from  '../../components/Layout';
import {newsAction} from '../../actions/newsAction';
import {Col, Row  } from 'react-bootstrap';
import FilterDropDown from './FilterDropDown';
import { type } from 'os';

var parm = '';
var cat = 'general';
class News extends Component {
 
  constructor(props) {
    super(props);
     this.state = {
       newsData : []
    }
  }
  filterHandleChange(value){
      cat  = value;
      this.props.newsAction();
  }
  componentDidMount(){
     if(this.props.location.pathname == "/news/bbc-news"){
          parm = 'bbcNews'
     }else{
          parm = 'uk'
     }
    this.props.newsAction();
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
             <div class="newsArticles">
                 <div class="row">
                   <div class="col-lg-7">
                      <div class="title loaderImage"></div>
                       <div className = "description loaderImage"> </div>
                       <div className = "url loaderImage"> </div>
                    </div>
                  </div>
                </div>
                 <div class="newsArticles">
                 <div class="row">
                   <div class="col-lg-7">
                      <div class="title loaderImage"></div>
                       <div className = "description loaderImage"> </div>
                       <div className = "url loaderImage"> </div>
                    </div>
                  </div>
                </div>
                 <div class="newsArticles">
                 <div class="row">
                   <div class="col-lg-7">
                      <div class="title loaderImage"></div>
                       <div className = "description loaderImage"> </div>
                       <div className = "url loaderImage"> </div>
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
              <div className = "newsMainContainer"> 
               <div className  = "filter-dropDown"> 
                      <div className="inner-filter">
                          <Row>
                             <Col> 
                                   <FilterDropDown
                                     filterHandleChange = {this.filterHandleChange.bind(this)} 
                                    
                                    />
                             </Col> 
                          </Row>
                      </div>
               </div>
               <div class = "newsArticlesWrapper"> 
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
                                    <div className = "newsArticles" key = {key}>
                                      <Row> 
                                        {data.urlToImage !== null ?
                                          <Col lg = "3">
                                              <div className = "image-container">
                                                  <img src = {data.urlToImage} alt = "no-data" />
                                              </div>
                                          </Col> :''}
                                          <Col lg = "7">
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
                          :  ' no post'} 
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
  newsAction: () => dispatch(newsAction(parm,cat))
 })

export default connect(mapStateToProps, mapDispatchToProps)(News);
