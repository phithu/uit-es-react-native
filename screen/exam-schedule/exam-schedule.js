import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import axios from 'axios';
import { AppConst } from '../../config/app-const';
import { ListSchedule } from '../../components/schedule/list-schedule';
import { Utilitiesstyle } from '../../styles/utilities';
import { ListScheduleLoader } from '../../components/loading/schedule-loader';
import * as _ from 'lodash';



export class ExamScheduleScreen extends Component {

  constructor(props) {
    super(props);
    // console.log(this.props);
    this.state = {
      idStudent: this.props.navigation.state.params.idStudent,
      loaded: false,
      isExistStudent: null // <-- Check idStudent exist // true: exist, false: not exist
    }
  }


  componentDidMount() {
    axios.post(`${AppConst.domain}/student`, { idStudent: this.state.idStudent })
      .then((response) => {
        let result = response.data;
        if (result.result) {
          if (result.data) { // <-- The student exist in database
            this.setState({
              isExistStudent: true,
              listData: result.data.examSchedule,
              nameStudent: result.data.nameStudent
            })
            this.props.navigation.setParams({ title: `Lịch thi ${this.state.nameStudent}` });
          } else {  // <-- The student haven't exist in database yet
            this.setState({
              isExistStudent: false,
              messages: result.data.msg
            });
            this.props.navigation.setParams({ title: 'Sinh viên không tìm thấy' });
          }
        }
        this.setState({ loaded: true });
      })
      .catch((err) => console.log(err));
  }

  openListSchedule = () => {
    // console.log(this.isOpen);
    // if(!this.isOpen) {
    //   this.props.navigation.navigate('ExamRoomScreen', {
    //     onNavigateBack: console.log('haha')
    //   });
    //   this.isOpen = true;
    // }
    this.props.navigation.navigate('ExamRoomScreen', {
      onNavigateBack: console.log('haha')
    });
    
  }
  handleOnNavigateBack() {
    console.log('haha')
  }


  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title || 'Loading...'
  });

  render() {
    if (this.state.loaded) { // <-- Have loaded
      if (this.state.isExistStudent) {
        // render exam schedule
        content = <ListSchedule openListSchedule={_.debounce(this.openListSchedule, 300)} listData={this.state.listData} />
        // content = <ListSchedule openListSchedule={this.openListSchedule} listData={this.state.listData} />
      } else {
        // render the student not found
      }
    } else {  // <-- Haven't loaded yet
      // render loading
      content = <ListScheduleLoader number={4} widthWrapper={AppConst.width - 20} />
    }

    return (
      <ScrollView showsVerticalScrollIndicator={false} style={Utilitiesstyle.margin10}>
        {content}
      </ScrollView>
    )
  }
}