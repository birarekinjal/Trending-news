import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <>
         <div className = "main-sidebar"> 
              <ul> 
                <li> <a href ="/"> Country</a></li>
                <li> <a href ="/news/bbc-news">BBC News</a></li>
                <li><span onClick={()=>this.props.history.push("/news/bookmark")}>BookMarks</span></li>
               </ul>
         </div>
      </>
    )
  }
}
