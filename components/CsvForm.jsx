import React from 'react';
import csvHelper from "../helpers/CsvHelper.js"


export default class CsvForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'file': null
    };
    // bind "this"
    this.captureFile = this.captureFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event){
    const file = this.state.file;
    //console.log(this.state.file); // File obj
    event.preventDefault();
    csvHelper.readCsv(file);
  }
  captureFile(event){
    this.setState({file: event.target.files[0]});

  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='file' onChange={this.captureFile} />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}
