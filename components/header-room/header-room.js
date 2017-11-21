import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { Utilitiesstyle } from '../../styles/utilities';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AppConst } from '../../config/app-const';
export class HeaderRoom extends Component {
  constructor(props) {
    super(props);
  }
  goBack() {
    this.props.goBack();
  }
  render() {
    return (
      <View style={style.styleHeader}>
        <Text style={style.text} >Danh sách phòng thi</Text>
        <TouchableNativeFeedback
          onPress={this.goBack.bind(this)}
          background={TouchableNativeFeedback.SelectableBackground()}>
          <View style={style.container}>
            <Icon style={{paddingVertical:15}} name="close" size={25} color="#fff" />
          </View>
        </TouchableNativeFeedback>

      </View>
    )
  }
}

const style = StyleSheet.create({
  styleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: AppConst.width,
  },
  text: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    paddingLeft: 15
  },
  container: {
    backgroundColor: 'transparent', 
    height:60, 
    width: 60,
    alignItems: 'center',
  }
})