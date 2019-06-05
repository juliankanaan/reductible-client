import React from 'react';


export default class Preview extends React.Component {

  render() {
    return (
    <div className='preview'>
      {this.props.url}
      {this.props.json}
    </div>
    );
  }
}
