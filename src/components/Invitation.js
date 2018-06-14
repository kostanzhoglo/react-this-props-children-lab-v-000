// Code Invitation Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class Invitation extends React.Component {
  render () {

    return (
      <div className="invite">
        <h1>You&#x27;ve been invited!</h1>
          {this.props.children}
      </div>
    )
  }
}
