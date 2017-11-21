import React,{ Component }from 'react';
import {
  FlatList,
  ScrollView,
  View,
  BackHandler
} from 'react-native';
import axios from 'axios';
import * as _ from 'lodash';

import { StatusBarComponent } from '../../components/status-bar';
import { BlockStudent } from '../../components/block-student';
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
      loaded: false,
      idStudent: ''
    }
  }

  /**
   * Get log
   * 
   * 
   * @memberOf HomeScreen
   */
  getLogs() {
    axios.get(`${AppConst.domain}/logs`)
      .then((response) => {
        if (typeof (response.data) !== 'string' && response.data.result) {
          this.setState({
            data: response.data.data,
          });
        }
        this.setState({loaded: true}) // <-- The data loaded
      }, (err) => {
        console.log('err', err)
      })
  }
  /**
   * 
   * 
   * @param {any} idStudent 
   * 
   * @memberOf HomeScreen
   */
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

  componentDidMount() {
    
    this.props.navigation.addListener('focus',this.onOpenScreen);
    this.props.navigation.addListener('blur',this.onCloseScreen);
  }

  onOpenScreen = () => {
    // console.log('_fetchData');
    this.getLogs();
  };

  onCloseScreen = () => {
    // do something when close screen
  };

  // onChangeStudent = (idStudent) => {
  //   this.openExamScheduleScreen(idStudent);
  // }

  onSubmitStudent = (idStudent) => {
    this.openExamScheduleScreen(idStudent);
  }

  renderListStudent() {
    // get status's loaded from stats
    const { loaded } = this.state;
    
    // if loaded done, then render list student
    if(loaded) {
      return (<FlatList 
                data={this.state.data}
                keyExtractor={item => item.idStudent}
                renderItem={({ item }) => <BlockStudent 
                                            type='logs' 
                                            time={item.time} 
                                            idStudent={item.idStudent}
                                            nameStudent={item.nameStudent} 
                                          />} 
              />)
    }
  }
  renderLogLoader() {

    // get status's loaded from stats
    const { loaded } = this.state;
    
    // If loaded have not yet, then render list log loader
    if(!loaded) {
      return (
        <ListLogsLoader number={12} widthWrapper={AppConst.width - 20} />
      )
    }

  }

  render() {
    return (
      <ScrollView 
          showsVerticalScrollIndicator={false}
          style={Utilitiesstyle.margin10}
      >
        <StatusBarComponent />
          <View>
            <SearchBar onSubmit={this.onSubmitStudent} />
          </View>
          <View style={HomeStyle.wrapper}>
            {this.renderLogLoader()}
            {this.renderListStudent()}
          </View>
      </ScrollView>
    )
  }
}