import React, { Component } from 'react';

export default class MenuItem extends Component {
    render() {
        let text = this.props.text;
        return (
            <div className="menu-item" onClick={this.props.handleClick} id={this.props.id} >
              {text}
              {
                  this.props.text === 'First' ? <div>New Div</div> : null
              }
              {
                  this.props.text === 'Second' ? <div>Some other text</div> : null
              }
            </div>
        );
    }
}
