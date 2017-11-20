import React,
{
  Component
}
  from 'react';
import {
  FlatList,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
// import { SearchBar } from 'react-native-elements';

import axios from 'axios';
import * as _ from 'lodash';
import { StatusBarComponent } from '../../components/status-bar';
import { LogsComponent } from '../../components/logs';
import { Utilitiesstyle } from '../../styles/utilities';
import { AppConst } from '../../config/app-const';
import { HomeStyle } from './style';
import { ListLogsLoader } from '../../components/loading/logs-loader';
import { SearchBar } from '../../components/search-bar';

export class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      idStudent: ''
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

  openExamScheduleScreen(idStudent) {
    if (AppConst.regexStudentId.test(idStudent)) {
      this.props.navigation.navigate('ExamScheduleScreen', {
        idStudent: idStudent
      });
    } else {
      // hander errror
      console.log('no');
    }
  }

  // onChangeStudent = (idStudent) => {
  //   this.openExamScheduleScreen(idStudent);
  // }

  onSubmitStudent = (idStudent) => {
    this.openExamScheduleScreen(idStudent);
  }

  render() {
    if (this.state.loading) {
      content = <FlatList data={this.state.data}
        keyExtractor={item => item.idStudent}
        renderItem={({ item }) => <LogsComponent time={item.time} idStudent={item.idStudent}
          nameStudent={item.nameStudent} />} />
    } else {
      content = <ListLogsLoader number={12} widthWrapper={AppConst.width - 20} />
    }
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={Utilitiesstyle.margin10}>
        <StatusBarComponent />
        <View>
          <SearchBar onSubmit={this.onSubmitStudent} />
        </View>
        <View width={'100%'} style={HomeStyle.wrapper}>
          {content}
        </View>
      </ScrollView>
    )
  }
}