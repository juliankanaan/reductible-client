import React from 'react';
import helper from "../helpers/helper.js"
import Preview from "../components/Preview"
import Result from "../components/Result"

export default class UrlForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      schema: '',
      result: ''
    };
    // bind "this"
    this.handleUrlChange = this.handleUrlChange.bind(this);
    this.handleSchemaChange = this.handleSchemaChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUrlChange(event) {
    this.setState({url: event.target.value});
  }
  handleSchemaChange(event){
    this.setState({schema: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    //alert('A name was submitted: ' + this.state.url + " " + this.state.schema);

    const res = helper.callAsync(this.state.url, this.state.schema)
                .then(data => {
                  console.log(data)
                  this.setState({ result: JSON.stringify(data) })
                });

  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input className='form-control' type="text" name='url' value={this.state.url} onChange={this.handleUrlChange} placeholder="URL goes here" />
          </div>
          <div className="form-group">
            <textarea className='form-control' name="scehma" value={this.state.schema} onChange={this.handleSchemaChange} placeholder="Schema key goes here" />
          </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <Preview json={this.state.schema} url={this.state.url} />
      <Result text={this.state.result} />
      </div>
    );
  }
}
