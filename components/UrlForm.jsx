import React from 'react';
import processFormRequest from "../helpers/urlFormHelper"

export default class UrlForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    // bind "this"
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    
    event.preventDefault();
    // TODO: should create fetch() POST request after data is validated
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
