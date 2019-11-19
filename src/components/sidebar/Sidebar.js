import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <>
         <div className = "main-sidebar"> 
              <ul> 
                <li> <a href ="/about"> Home</a></li>
                <li> <a href ="/about"> AboutUS</a></li>
               </ul>
         </div>
      </>
    )
  }
}
