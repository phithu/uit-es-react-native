import React, { Component } from 'react';
import { StatusBar } from 'react-native';

const configStatusBar = {
  backgroundColor: '#00675B',
  translucent: true
}

export class StatusBarComponent extends Component {
  render() {
    return (
      <StatusBar backgroundColor={configStatusBar.backgroundColor}></StatusBar>
    )
  }
}