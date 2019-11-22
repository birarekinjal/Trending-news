import React, { Component } from 'react'

export default class BookMarks extends Component {
  constructor(props) {
    super(props);
     this.state = {
       checkValue : false
    }
  }
  handleOnChange(list , e){
     console.log(e.target.checked , "_++++++++" ,list);
     this.props.bookMarkOnChange(e.target.checked ,list)
     this.setState({
         checkValue : e.target.checked
     })
   }
  render() {
      console.log(this.props.list)
    return (
      <>
        <div className = "bookmark"> 
            <form> 
              <div className = "row"> 
               <input type="checkbox" id="bookmark" name="bookmarkinput" onChange = {this.handleOnChange.bind(this,this.props.list)} />
                 <label for="bookmarkinput">
                   {this.state.checkValue == true  ? <i class="material-icons"> bookmark </i> : <i class="material-icons"> bookmark_border </i>}
                 </label>
              </div>
             
            </form>
         </div> 
      </>
    )
  }
}
