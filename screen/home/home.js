import React, { Component } from 'react';
import { FlatList, ScrollView, View, TextInput } from 'react-native';
import { SearchBar } from 'react-native-elements';
import axios from 'axios';
import * as _ from 'lodash';
import { StatusBarComponent } from '../../components/status-bar';
import { LogsComponent } from '../../components/logs';
import { Utilitiesstyle } from '../../styles/utilities';
import { AppConst } from '../../config/app-const';
import { HomeStyle } from './style';
import { LogsLoader } from '../../components/loading/logs-loader';

export class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false
    }
  }


  componentDidMount() {
    axios.get(`${AppConst.domain}/logs`)
      .then((response) => {
        if (typeof (response.data) !== 'string' && response.data.result) {
          this.setState({
            data: response.data.data,
            loading: true
          });
        } else {
          this.setState({
            data: [],
            loading: false
          });
        }
      }, (err) => {
        console.log('err', err)
      })
  }

  goSecond = () => {
    this.props.navigation.navigate('ExamScheduleScreen', {
      data: 'hahaha'
    });
  }

  searchStudent = (text) => {
    // console.log(text);
    this.props.navigation.navigate('ExamScheduleScreen', {
      idStudent: text
    });
  }

  render() {
    if (this.state.loading) {
      content = <FlatList data={this.state.data}
        keyExtractor={item => item.idStudent}
        renderItem={({ item }) => <LogsComponent time={item.time} idStudent={item.idStudent}
          nameStudent={item.nameStudent} />} />
    } else {
      content = <View>
        <LogsLoader widthWrapper={AppConst.width - 20} />
        <LogsLoader widthWrapper={AppConst.width - 20} />
        <LogsLoader widthWrapper={AppConst.width - 20} />
        <LogsLoader widthWrapper={AppConst.width - 20} />
        <LogsLoader widthWrapper={AppConst.width - 20} />
        <LogsLoader widthWrapper={AppConst.width - 20} />
      </View>
    }
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={Utilitiesstyle.margin10}>
        <StatusBarComponent />
        {/* <TextInput keyboardType="numeric" /> */}
        <SearchBar keyboardType="numeric" inputStyle={HomeStyle.SearchBarInput} containerStyle={HomeStyle.SearchBarContainer} lightTheme
          onChangeText={_.debounce(this.searchStudent, 500)}
          placeholder='Mã số sinh viên...' />
        <View width={'100%'} style={HomeStyle.wrapper}>
          {content}
        </View>
      </ScrollView>
    )
  }
}