import React from 'react'
import PropTypes from 'prop-types'

class Result extends React.Component {

  render () {
    return (
        <div className='result'>
          <p>Sample response:</p>
          {this.props.text}
        </div>
      );
  }
}

export default Result;
