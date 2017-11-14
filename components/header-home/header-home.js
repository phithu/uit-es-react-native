import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { HeaderHomeStyle } from './style';

export class HeaderHome extends Component {
  render() {
    return (
      <View style={HeaderHomeStyle.styleHeader}>
        <Icon name="event-note" size={30} color="#fff" />
        <Text style={HeaderHomeStyle.text}>UIT Exam Schedule</Text>
      </View>
    )
  }

}