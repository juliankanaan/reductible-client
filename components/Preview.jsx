import React from 'react';


export default class Preview extends React.Component {

  render() {
    return (
    <div>
      {this.props.url}
      {this.props.json}
    </div>
    );
  }
}
