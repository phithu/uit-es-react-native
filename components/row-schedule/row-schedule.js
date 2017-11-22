import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { Utilitiesstyle } from '../../styles/utilities';
import { RowScheduleStyle } from './style';

export class RowSchedule extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[ Utilitiesstyle.layoutRow, RowScheduleStyle.wrapper ]}>
        <Text style={[ Utilitiesstyle.marginRight5, RowScheduleStyle.textTitleRow ]}>
          {this.props.title}
        </Text>
        <Text>{this.props.value}</Text>
      </View>
    )
  }
}