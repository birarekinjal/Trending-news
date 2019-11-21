import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as newsAction from '../actions/newsAction';

class Search extends Component {
   constructor(props) {
    super(props);
     this.state = {
       value :''
    }
  }
 handleChange(e){
     this.setState({
          value : e.target.value
     })
     this.props.newsAction.searchNews(e.target.value);
  }
 render() {
    return (
      <>
        <div class = "search-wrapper"> 
            <input type = "text" placeholder = "search.." value = {this.state.value} className = "search-input"  onChange={this.handleChange.bind(this)} />
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Search);
