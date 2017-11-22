import React, { Component } from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import axios from 'axios';

import { AppConst } from '../../config/app-const';
import { Utilitiesstyle } from '../../styles/utilities';
import { ListLogsLoader } from '../../components/loading/logs-loader';
import { BlockStudent } from '../../components/block-student';

export class ExamRoomScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      error: false,
      message: '',
      listData: []
    };

    // Get idStudent from params
    this.idStudent = this.props.navigation.state.params.idStudent;

  }

  componentDidMount() {
    this.getStudentInRoom();

  }

  /**
   * Get student in Room
   */
  getStudentInRoom() {
    let idClass = this.props.navigation.state.params.data.idClass;
    let room = this.props.navigation.state.params.data.room;

    // Call API from Service
    // Method: Post with 2 params is idClass and room
    axios.post(`${AppConst.domain}/class`, {idClass: idClass, room: room})
      .then((response) => {

        // success and have data
        if (response.data.result && response.data.data) {
          this.setState({listData: response.data.data})
        } else {
          this.setState({message: response.data.msg}) // <-- Set status for messsages
        }
        this.setState({loaded: true})
      })
      // handel errors
      .catch((err) => {
        this.setState({loaded: true, error: true})
      })
  }

  /**
   * Render list student in Room
   * @returns {XML}
   */
  renderListStudentInRoom() {

    const {loaded} = this.state; // <-- Get status's loaded
    const {listData} = this.state; // <-- Get status's listData

    /* if the var loaded have been loaded, listData have been exist and listData have length > 0
    then render list student in room
     */
    if (loaded && listData && listData.length > 0) {
      return (
        <FlatList data={this.state.listData}
                  keyExtractor={item => item.idStudent}
                  renderItem={({item}) => <BlockStudent idStudent={this.idStudent}
                                                        type='exam-room'
                                                        orderNumber={`STT: ${item.orderNumber}`}
                                                        idStudent={item.idStudent}
                                                        nameStudent={item.nameStudent}/>}/>
      )
    }
  }

  /**
   * Render list logs loader
   * @returns {XML}
   */
  renderListLogsLoader() {

    const {loaded} = this.state;  // <-- Get status's loaded

    // If The var loaded have not been loaded yet, then render list logs loader
    if (!loaded) {
      return (
        <ListLogsLoader number={12} widthWrapper={AppConst.width - 20}/>
      )
    }
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}
                  style={Utilitiesstyle.margin10}>
        <View style={{backgroundColor: '#fff'}}>
          {this.renderListLogsLoader()}
          {this.renderListStudentInRoom()}
        </View>
      </ScrollView>
    )
  }
}