import React, { Component } from 'react';
import './Alert.css'

class Alert extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      isActive: true,
    }
  }

  hideAlert() {
    this.setState({
      isActive: false,
    });
  }

  render() {
    return (
      <div>
        {this.state.isActive && <div className="alert alert-warning alert-dismissible" role="alert">
          <button type="button" className="close" data-dismiss="alert" aria-label="Close"
                  onClick={() => this.hideAlert()}><span aria-hidden="true">&times;</span></button>
          {this.props.text}
        </div>}
      </div>
    );
  }
}
export default Alert;