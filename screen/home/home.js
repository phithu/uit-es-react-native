import React, { Component } from 'react';
import {
  Animated,
  Button,
  FlatList,
  ScrollView,
  Text,
  View
} from 'react-native';
import axios from 'axios';


import { StatusBarComponent } from '../../components/status-bar';
import { BlockStudent } from '../../components/block-student';
import { Utilitiesstyle } from '../../styles/utilities';
import { AppConst } from '../../config/app-const';
import { HomeStyle } from './style';
import { ListLogsLoader } from '../../components/loading/logs-loader';
import { SearchBar } from '../../components/search-bar';
import { NotFound } from "../../components/not-found";

export class HomeScreen extends Component {

  constructor(props) {
    super(props);

    // this.onClick = this.onClick.bind(this);

    this.state = {
      data: [],
      loaded: false,
      idStudent: '',
      validatorError: '',
      marginTop: new Animated.Value(20),
    }
  }

  componentDidMount() {

    this.props.navigation.addListener('focus', this.onOpenScreen);
    this.props.navigation.addListener('blur', this.onCloseScreen);
  }

  /**
   * Call when screen have been opened
   */
  onOpenScreen = () => {

    this.getLogs(); // Call again getLogs
  };

  /**
   * Call when screen have been navigated to screen other
   */
  onCloseScreen = () => {
    // do something when close screen
  };

  /**
   * Get logs
   * Call API from Server
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
   * Navigate to ExamSchedule Screen
   *
   * @param {any} idStudent
   *
   * @memberOf HomeScreen
   */
  openExamScheduleScreen(idStudent) {


    // If idStudent is valid, then navigation to ExamScheduleScreen
    if (AppConst.regexStudentId.test(idStudent)) {
      this.setState({
        validatorError: ''
      }, () => this.stopAnimatedListStudent());


      this.props.navigation.navigate('ExamScheduleScreen', {
        idStudent: idStudent
      });
    } else {
      let message = '';

      if (idStudent !== '') {
        message = 'Mã số sinh viên không hợp lệ';
      } else {
        message = 'Vui lòng nhập mã số sinh viên';
      }
      this.setState({
        validatorError: message
      }, () => this.startAnimatedListStudent());

    }
  }


  // onChangeStudent = (idStudent) => {
  //   this.openExamScheduleScreen(idStudent);
  // }

  /**
   * Call when submit button 'OK' on keyboard
   * @param idStudent
   */
  onSubmitStudent = (idStudent) => {

    // Navigate from ExamScheduleScreen
    this.openExamScheduleScreen(idStudent);
  };


  startAnimatedListStudent() {
    Animated.spring(
      this.state.marginTop, {
        toValue: 40,
        friction: 1
      }
    ).start();
  }

  stopAnimatedListStudent() {
    Animated.spring(
      this.state.marginTop, {
        toValue: 20,
        friction: 2
      }
    ).start();
  }

  renderListStudent() {
    // get status's loaded from stats
    const {loaded} = this.state;

    // if loaded done, then render list student
    if (loaded) {
      return (<FlatList
        data={this.state.data}
        keyExtractor={item => item.idStudent}
        renderItem={({item}) => <BlockStudent
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
    const {loaded} = this.state;

    // If loaded have not yet, then render list log loader
    if (!loaded) {
      return (
        <ListLogsLoader number={12} widthWrapper={AppConst.width - 20}/>
      )
    }

  }

  renderValidatorError() {
    const {validatorError} = this.state;

    // if validatorError, then render Block Errors
    if (validatorError) {
      return (
        <Animated.View style={[HomeStyle.validatorError]}>
          <Text style={HomeStyle.textError}>{this.state.validatorError}</Text>
        </Animated.View>
      )
    }

  }

  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={Utilitiesstyle.margin10}
      >
        <StatusBarComponent/>
        <SearchBar onSubmit={this.onSubmitStudent}/>
        {this.renderValidatorError()}
        <Animated.View style={[HomeStyle.wrapper, {marginTop: this.state.marginTop}]}>
        {this.renderLogLoader()}
        {this.renderListStudent()}
        </Animated.View>
      </ScrollView>

    )
  }
}

