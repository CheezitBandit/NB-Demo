import React, { Component } from 'react';

export class FindLocation extends Component {
    static displayName = FindLocation.name;

  constructor(props) {
    super(props);
  }

    render() {
        const temp = {
            paddingTop: "100px",
            margin: "auto",
            width: "75%"
        };
        return (
            <div style={temp}>
                <h1>Coming Soon!</h1>
                <h2>This page to find locations has not been implemented yet!</h2>
            </div>
        );
  }
}
