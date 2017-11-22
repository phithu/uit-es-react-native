import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { ToolbarStyle } from './style';

export class Toolbar extends Component {
  render() {
    return (
      <View style={ToolbarStyle.toolbar}>
        <Text style={ToolbarStyle.text}>UIT-ES</Text>
      </View>
    )
  }
}
