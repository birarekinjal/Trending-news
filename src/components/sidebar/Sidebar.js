import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <>
         <div className = "main-sidebar"> 
              <ul> 
                <li> <a href ="/"> Country</a></li>
                <li> <a href ="/news/bbc-news">BBC News</a></li>
               </ul>
         </div>
      </>
    )
  }
}
