import React, { Component } from 'react';
import {newsAction} from '../../actions/newsAction';
import { connect } from 'react-redux';
import {Col, Row  } from 'react-bootstrap';

class FilterDropDown extends Component {

  constructor(props) {
    super(props);
     this.state = {
      countries : [],
      lan:[]
    }
  }
   handleChange(e){ 
      this.props.filterHandleChange(e.target.value);
   }
   languageHandleChange(e){
       this.props.languageHandleChange(e.target.value); 
   }
   componentDidMount(){
     this.setState({
        countries: [ 'general' , 'health' , 'science' , 'sports' ,'technology'],
        lan: ['fr','he','it','nl','no','pt','ru','se']
  });
 }
  render() {
    return (
      <>
          <Row>
          <Col lg= "3">
           <div>
             <select onChange = {this.handleChange.bind(this)}>
                {
                    this.state.countries.map((category,key) => {
                        return(
                            <option  key = {key} value = {category}> {category} </option>
                        )
                    })
                }
               </select>
           </div>
          </Col>
          <Col lg= "3">
            <div>
             <select onChange = {this.languageHandleChange.bind(this)}>
                {
                    this.state.lan.map((lan,key) => {
                        return(
                            <option  key = {key} value = {lan}> {lan} </option>
                        )
                    })
                }
               </select>
           </div>
          </Col>
           </Row>
      </>
    )
  }
}
const mapStateToProps = state => ({
 ...state
})
const mapDispatchToProps = dispatch => ({
  newsAction: () => dispatch(newsAction(null))
 })
export default connect(mapStateToProps, mapDispatchToProps)(FilterDropDown);
