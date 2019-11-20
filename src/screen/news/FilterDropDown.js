import React, { Component } from 'react';
import {newsAction} from '../../actions/newsAction';
import { connect } from 'react-redux'

class FilterDropDown extends Component {
    handleChange(e){ 
       this.props.filterHandleChange(e.target.value);
   }
  render() {
      console.log(this.props)
     return (
      <>
          <div>
             <select onChange = {this.handleChange.bind(this)}>
                    <option value = 'general'> general </option>
                    <option value = 'health'> health </option>
                    <option value = 'science'> science </option>
                    <option value = 'sports'> sports </option>
                    <option value = 'technology'> technology </option>
               </select>
           </div>
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
