import React, { Component } from 'react';
import {
  View,
  ToolbarAndroid,
  StyleSheet,
  StatusBar,
  Text
} from 'react-native';

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
