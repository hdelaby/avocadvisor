import React, { Component } from 'react'

class FormResult extends Component {  
    render() {
      let result;
      if (!this.props.data.price) {
        result = '';
      } else {
        result = <h2>The price is {this.props.data.price}</h2>
      }
      return (
        <div>{result}</div>
      );
    }
  }

  export default FormResult;
