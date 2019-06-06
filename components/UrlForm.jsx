import React from 'react';
import helper from "../helpers/helper.js"
import Preview from "../components/Preview"
import Result from "../components/Result"

export default class UrlForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      priceColumn: '',
      result: '',
      hospital: '',
      descStart: '',
      descEnd: ''
    };
    // bind "this"
    this.handleUrlChange = this.handleUrlChange.bind(this);
    this.handlepriceColumnChange = this.handlepriceColumnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleHospitalChange = this.handleHospitalChange.bind(this);
    this.handleDescStartChange = this.handleDescStartChange.bind(this);
    this.handleDescEndChange = this.handleDescEndChange.bind(this);
  }

  handleUrlChange(event) {
    this.setState({url: event.target.value});
  }
  handlepriceColumnChange(event){
    this.setState({priceColumn: event.target.value});
  }
  handleHospitalChange(event){
    this.setState({hospital: event.target.value});
  }
  handleDescStartChange(event){
    this.setState({descStart: event.target.value});
  }
  handleDescEndChange(event){
    this.setState({descEnd: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    //alert('A name was submitted: ' + this.state.url + " " + this.state.priceColumn);

    const res = helper.callAsync(this.state.url, this.state.descStart, this.state.descEnd, this.state.priceColumn, this.state.hospital)
                .then(data => {
                  //console.log(data)
                  this.setState({ result: JSON.stringify(data) })
                });

  } // submit

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input className='form-control' type="text" name='url' value={this.state.url} onChange={this.handleUrlChange} placeholder="URL" />
          </div>
          <div className="form-group">
            <input className='form-control' type='text' name='hospital' value={this.state.hospital} onChange={this.handleHospitalChange} placeholder='Hospital name' />
          </div>
          <div className="form-group">
            <input className='form-control' type='text' name='descStart' value={this.state.descStart} onChange={this.handleDescStartChange} placeholder='DescStart' />
          </div>
          <div className="form-group">
            <input className='form-control' type='text' name='descEnd' value={this.state.descEnd} onChange={this.handleDescEndChange} placeholder='DescEnd' />
          </div>
          <div className="form-group">
            <input className='form-control' name="priceColumn" value={this.state.priceColumn} onChange={this.handlepriceColumnChange} placeholder="Price position?" />
          </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <Preview json={this.state.priceColumn} url={this.state.url} />
      <Result text={this.state.result} />
      </div>
    );
  }
}
