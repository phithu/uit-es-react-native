import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { logsStyle } from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
export class LogsComponent extends Component {
  render() {
    return (
      <View style={logsStyle.itemLogs}>
        <View style={logsStyle.logWrapper}>
          <Icon style={logsStyle.iconStyle} 
                name="account-circle" 
                size={25} 
                color={logsStyle.iconStyle.color} />
          <View>
            <Text>{this.props.idStudent}</Text>
            <Text>{this.props.nameStudent}</Text>
          </View>
        </View>
        <View style={logsStyle.timeWrapper}>
          <Text style={logsStyle.timeText}>{this.props.time}</Text>
        </View>
      </View>
    )
  }
}