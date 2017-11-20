import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ScheduleRowStyle } from './style';
import { Utilitiesstyle } from '../../../styles/utilities'

export class ScheduleRow extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={[Utilitiesstyle.layoutRow, ScheduleRowStyle.wrapper]}>
        <Text style={[Utilitiesstyle.fontBold, Utilitiesstyle.fontSize16]}>{this.props.title}</Text>
        <Text style={[Utilitiesstyle.marginLeft2, Utilitiesstyle.fontSize16]}>{this.props.value}</Text>
      </View>
    )
  }
}