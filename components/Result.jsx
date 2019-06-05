import React from 'react'
import PropTypes from 'prop-types'

class Result extends React.Component {

  render () {
    return (
        <div>
          {this.props.text}
        </div>
      );
  }
}

export default Result;
