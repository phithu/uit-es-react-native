import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import * as _ from 'lodash';
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

  getStudentInRoom() {
    let idClass = this.props.navigation.state.params.data.idClass;
    let room = this.props.navigation.state.params.data.room;
    axios.post(`${AppConst.domain}/class`, { idClass: idClass, room: room })
      .then((response) => {
        // success and have data
        if (response.data.result && response.data.data) {
          this.setState({ listData: response.data.data })
        } else {
          this.setState({ message: response.data.msg }) // <-- Set status for messsages
        }
        this.setState({ loaded: true })
      })
      .catch((err) => {
        this.setState({ loaded: true, error: true })
      })
  }

  render() {
    if (this.state.loaded) { // <-- The data loaded
      if (this.state.listData.length > 0) {
        content = <FlatList data={this.state.listData}
                            keyExtractor={item => item.idStudent}
                            renderItem={({ item }) => <BlockStudent idStudent={this.idStudent} 
                                                                    type='exam-room' 
                                                                    orderNumber={`STT: ${item.orderNumber}`} 
                                                                    idStudent={item.idStudent}
                                                                    nameStudent={item.nameStudent} />} />
      }
    } else { // <-- The data have not loaded yet
      content = <ListLogsLoader number={12} widthWrapper={AppConst.width - 20} />
    }
    return (
      <ScrollView showsVerticalScrollIndicator={false} 
                  style={Utilitiesstyle.margin10}>
        <View style={{ backgroundColor: '#fff' }}>
          {content}
        </View>
      </ScrollView>
    )
  }
}