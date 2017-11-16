import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import * as _ from 'lodash';
import { AppConst } from '../../config/app-const';
import { Utilitiesstyle } from '../../styles/utilities';
import { SearchBarStyle } from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';

export class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      idStudent: ''
    }
  }
  onChangeText = (text) => {
    this.setState({ idStudent: text });
    // this.props.onChange(text);
  }

  onSubmitText = () => {
    this.props.onSubmit(this.state.idStudent);
  }

  render() {
    return (
      <View style={SearchBarStyle.wrapper}>
        <View>
          <Icon name="search" size={20} color="#333" />
        </View>
        <TextInput style={SearchBarStyle.input} keyboardType="numeric"
          underlineColorAndroid="transparent"
          placeholder="Mã số sinh viên"
          placeholderTextColor="#999"
          autoCapitalize="none"
          onChangeText={_.debounce(this.onChangeText, 300)}
          onSubmitEditing={_.debounce(this.onSubmitText, 300)} />
      </View>
    )
  }
}