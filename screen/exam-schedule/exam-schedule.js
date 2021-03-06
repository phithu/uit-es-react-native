import React, { Component } from 'react';
import {
  ScrollView,
  DatePickerAndroid
} from 'react-native';
import axios from 'axios';

import { AppConst } from '../../config/app-const';
import { ListSchedule } from '../../components/schedule/list-schedule';
import { Utilitiesstyle } from '../../styles/utilities';
import { ListScheduleLoader } from '../../components/loading/schedule-loader';
import { NotFound } from '../../components/not-found';

export class ExamScheduleScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      idStudent: this.props.navigation.state.params.idStudent,
      loaded: false,
      isExistStudent: null // <-- Check idStudent exist // true: exist, false: not exist
    }
  }

  componentDidMount() {
    this.getExamSchedule();
    this.props.navigation.addListener('focus', this.onOpenScreen);
    this.props.navigation.addListener('blur', this.onCloseScreen);
  }

  onOpenScreen = () => {
    // do something when open screen
    this.isOpen = false;

  };

  onCloseScreen = () => {
    // do something when close screen
  };


  getExamSchedule() {
    axios.post(`${AppConst.domain}/student`, {idStudent: this.state.idStudent})
      .then((response) => {
        let result = response.data;

        if (result.result) {
          if (result.data) { // <-- The student exist in database
            this.setState({
              isExistStudent: true,
              listData: result.data.examSchedule,
              nameStudent: result.data.nameStudent
            });
            this.props.navigation.setParams({title: `Lịch thi ${this.state.nameStudent}`});
          }
          else {  // <-- The student haven't exist in database yet
            this.setState({
              isExistStudent: false,
              messages: result.msg
            });
            this.props.navigation.setParams({title: 'Sinh viên không tìm thấy'});
          }
        }

        this.setState({loaded: true});

      })
      .catch((err) => console.log(err));
  }

  openListSchedule = (data) => {
    if (!this.isOpen) {
      this.props.navigation.navigate('ExamRoomScreen', {data: data, idStudent: this.state.idStudent});
      this.isOpen = true;
    }
  };

  async openDatePicker(data) {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        // Use `new Date()` for current date.
        // May 25 2020. Month 0 is January.
        date: new Date()
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        // Do something when Ok clicked
      } else {
        // Do something when Cancel clicked

      }
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  }

  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.title || 'Loading...'
  });

  renderListShedule() {
    if (this.state.listData && this.state.listData.length > 0) {
      return (
        <ListSchedule
          openDatePicker={(data) => this.openDatePicker(data)}
          openListSchedule={this.openListSchedule}
          listData={this.state.listData}/>
      )
    }

  }

  renderStudentNotFound() {
    return <NotFound mesages="Sinh viên không tồn tại trong hệ thống"/>
  }

  renderContent() {
    const {loaded} = this.state; // <-- Get status's loaded
    const {isExistStudent} = this.state; // <-- Get status's isExistStudent

    if (loaded) {
      if (isExistStudent) {
        return this.renderListShedule()
      }
      return this.renderStudentNotFound();
    }
  }


  renderListScheduleLoader() {
    const {loaded} = this.state; // <-- Get status's loaded

    // if the var loaded have not been loaded yet, then render ListScheduleLoader component
    if (!loaded) {
      return (
        <ListScheduleLoader number={4}
                            widthWrapper={AppConst.width - 20}/>
      )
    }
  }

  render() {

    return (
      <ScrollView showsVerticalScrollIndicator={false}
                  style={Utilitiesstyle.margin10}>
        {this.renderListScheduleLoader()}
        {this.renderContent()}
      </ScrollView>
    )
  }
}