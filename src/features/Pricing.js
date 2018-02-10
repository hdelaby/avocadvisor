import React, { Component } from 'react'
import FormPricing from '../components/FormPricing'
import FormResult from '../components/FormResult'

class Pricing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {}
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    console.log(data);
    if (data.matter === 'optionA') {
      this.setState({
        data: {
          price: 254
        }
      });
    } else {
      this.setState({
        data: {
          price: 1500
        }
      });
    }
  }

  render() {
    return (
      <div>
        <h2>Hello pricing</h2>
        <FormPricing handleSubmit={this.handleSubmit} />
        <FormResult data={this.state.data} />
      </div>
    );
  }
}

export default Pricing;