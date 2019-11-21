import React, { Component } from 'react'
import Layout from  '../../components/Layout';
import { connect } from 'react-redux'
import {newsAction} from '../../actions/newsAction';

class BBCNews extends Component {
    constructor(props) {
  
    super(props);
     this.state = {
       newsData :[]
    }
  }

  componentDidMount(){
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
        <div> 
        <Layout> 
              <div className = "news-main-container"> 
                {this.state.newData  !==  []  ? 
                    this.state.newsData.map((data,key) =>{
                       return(
                           <div className = "news-articles">
                             <div className = "title">{data.title} </div>
                             <div className = "description">  {data.description} </div>
                             <div className = "url"> <a href = {data.url} target="_blank"> {data.url} </a> </div>
                           </div>
                       )
                  }) :'hii'}
              </div>
        </Layout>
        </div>  
      </>
    )
  }
}

const mapStateToProps = state => ({
    ...state
   })
   
const mapDispatchToProps = dispatch => ({
     newsAction: () => dispatch(newsAction('bbcNews'))
    })
   
export default connect(mapStateToProps, mapDispatchToProps)(BBCNews);