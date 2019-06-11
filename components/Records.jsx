import React from 'react'
import PropTypes from 'prop-types'

const options = {
  method: 'GET',
  headers: {
    "Content-Type": "application/json"
  }
}

class Records extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      records: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:4000/api/records/lookup?procedureDescription=xray&limit=5&hospital=Mount+Sinai", options)
      .then(data => {
        return data.json();
      })
      .then(records => {
        this.setState({records})
        console.log(this.state.records);
      })
  }

  render () {
    return(
    <div>
        <h4>Recent inserts</h4>
        {this.state.records.map(record => (
          <p>{record.procedureDescription}</p>
        ))}
    </div>
  )
  }
}

export default Records;
