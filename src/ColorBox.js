import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.props.opacity >= 0.2 ? <ColorBox opacity={Math.round((this.props.opacity - 0.1) * 100) / 100}/> : null}
      </div>
    )
  }

}

