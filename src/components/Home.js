import React, { Component } from 'react'
import Alert from 'react-bootstrap/Button';
export default class Home extends Component {
  render() {
    return (
      <>
       <div>
       <h1> coloe red</h1>
       <Alert variant='primary'>
           Hello Kinjal
        </Alert>
              { [
                'primary',
                'secondary',
                'success',
                'danger',
                'warning',
                'info',
                'light',
                'dark',
                ].map((variant, idx) => (
                <Alert key={idx} variant={variant}>
                    This is a {variant} alert—check it out!
                </Alert>
             ))}
       </div>
      </>
    )
  }
}