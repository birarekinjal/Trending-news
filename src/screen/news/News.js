import React, { Component } from 'react';
import { connect } from 'react-redux'
import Layout from  '../../components/Layout';
import {newsAction} from '../../actions/newsAction';

class News extends Component {
 
  constructor(props) {
  
    super(props);
     this.state = {
       newsData :[]
    }
  }
  componentDidMount(){
    console.log(this.props)
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
                             <div className = "title">{data.title} </div>
                             <div className = "description">  {data.description} </div>
                             <div className = "url"> <a href = {data.url} target="_blank"> {data.url} </a> </div>
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
  newsAction: () => dispatch(newsAction('news'))
 })

export default connect(mapStateToProps, mapDispatchToProps)(News);
