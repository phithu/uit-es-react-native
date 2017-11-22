import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { BlockStudentStyle } from './style';

export class BlockStudent extends Component {

  constructor(props) {
    super(props);
  }

  renderFooterLogs() {

    // if type is 'logs', then render BlockStudent with footer is logs
    if (this.props.type === 'logs') {
      return (
        <Text style={BlockStudentStyle.footerText}>{this.props.time}</Text>
      )
    }
  }

  renderFooterExamRoom() {

    // if type is 'exam-room', then render BlockStudent with footer is exam-room
    if (this.props.type === 'exam-room') {
      return (
        <Text style={BlockStudentStyle.footerText}>{this.props.orderNumber}</Text>
      )
    }
  }

  render() {
    return (
      <View style={BlockStudentStyle.itemLogs}>
        <View style={BlockStudentStyle.logWrapper}>
          <Icon style={BlockStudentStyle.iconStyle}
                name="account-circle"
                size={25}
                color={BlockStudentStyle.iconStyle.color}/>
          <View>
            <Text>{this.props.idStudent}</Text>
            <Text>{this.props.nameStudent}</Text>
          </View>
        </View>
        <View style={BlockStudentStyle.footer}>
          {this.renderFooterExamRoom()}
          {this.renderFooterLogs()}
        </View>
      </View>
    )
  }
}