import React from 'react'
import PropTypes from 'prop-types'

class SubmitBtn extends React.Component {

  function handleClick(event) {
    event.preventDefault();
    console.log("btn clicked");
  }

  render () {
      <div>
        <a onClick={ (event) => { this.handleClick(event)} }> // "this" os bound w/ af
          Make POST request</a>
      </div>
  }
}

export default SubmitBtn;
