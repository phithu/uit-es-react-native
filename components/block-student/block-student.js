import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { BlockStudentStyle } from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';

export class BlockStudent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.type === 'logs') {
      content = <Text style={BlockStudentStyle.footerText}>{this.props.time}</Text>
    } else {
      content = <Text style={BlockStudentStyle.footerText}>{this.props.orderNumber}</Text>
    }
    return (
      <View style={BlockStudentStyle.itemLogs}>
        <View style={BlockStudentStyle.logWrapper}>
          <Icon style={BlockStudentStyle.iconStyle} 
                name="account-circle" 
                size={25} 
                color={BlockStudentStyle.iconStyle.color} />
          <View>
            <Text>{this.props.idStudent}</Text>
            <Text>{this.props.nameStudent}</Text>
          </View>
        </View>
        <View style={BlockStudentStyle.footer}>
          {content}
        </View>
      </View>
    )
  }
}