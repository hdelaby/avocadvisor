import React, { Component } from 'react'

class FormPricing extends Component {
    constructor(props) {
      super(props);
      this.state = {
        matter: 'optionA',
        deliverableType: 'optionA'
      }
  
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleSubmit(event) {
      this.props.handleSubmit(this.state);
      event.preventDefault();
    }
  
    handleInputChange(event) {
      console.log(event.target.name, event.target.value);
      this.setState({
        [event.target.name]: event.target.value 
      });
    }
  
    render() {
      return (
        <form>
          Matter:
          <select name="matter" value={this.state.matter} onChange={this.handleInputChange}>
            <option value="optionA">Option A</option>
            <option value="optionB">Option B</option>
            <option value="optionC">Option C</option>
          </select>
          <br />
          <br />
          Deliverable type:
          <select name="deliverableType" value={this.state.deliverableType} onChange={this.handleInputChange}>
            <option value="optionA">Option A</option>
            <option value="optionB">Option B</option>
            <option value="optionC">Option C</option>
          </select>
          <br />
          <br />
          <input type="submit" value="Submit" onClick={this.handleSubmit}/>
        </form>
      );
    }
  }

  export default FormPricing;