import React, { Component } from 'react';
import { connect } from 'react-redux'
import Layout from  '../../components/Layout';
import {newsAction} from '../../actions/newsAction';
import {Container,Col, Row  } from 'react-bootstrap';


var parm = '';
class News extends Component {
 
  constructor(props) {
  
    super(props);
     this.state = {
       newsData :[]
    }
  }
  componentDidMount(){
    console.log(this.props)
     console.log(this.props.location.pathname , "giiiii ");
     if(this.props.location.pathname == "/news/bbc-news"){
          parm = 'bbcNews'
     }else{
          parm = 'news'
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

  render() {
     return (
    <>
         <Layout> 
              <div className = "newsMainContainer"> 
                {this.state.newData  !==  []  ? 
                    this.state.newsData.map((data,key) =>{
                       return(
                           <div className = "newsArticles">
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
                  }) :'hii'}
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
  newsAction: () => dispatch(newsAction(parm))
 })

export default connect(mapStateToProps, mapDispatchToProps)(News);
