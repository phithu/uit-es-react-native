import React, { Component } from 'react';
import { Text, View, ListView } from 'react-native';
import axios from 'axios';
import { AppConst } from '../../config/app-const';
import { SwipeListView } from 'react-native-swipe-list-view';

export class ExamScheduleScreen extends Component {

  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      idStudent: this.props.navigation.state.params.idStudent,
      loaded: false,
      response: null,
      isExistStudent: null // <-- Check idStudent exist // true: exist, false: not exist
    }
  }

  componentDidMount() {
    axios.post(`${AppConst.domain}/student`, { idStudent: this.state.idStudent })
      .then((response) => {
        let data = response.data;
        this.setState({ response: data, loaded: true });
        console.log(this.state.response.data.examSchedule)
        if (data.result) {
          if (data.data) { // <-- The student exist in database
            // console.log(data.data);
            this.setState({ isExistStudent: true });
            this.props.navigation.setParams({ title: `Lịch thi ${data.data.nameStudent}` });
          } else {  // <-- The student haven't exist in database yet
            // console.log(data.msg);
            this.setState({ isExistStudent: false });
            this.props.navigation.setParams({ title: 'Sinh viên không tìm thấy' });
          }
        }
      })
      .catch((err) => console.log(err));
  }



  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title || 'Loading...'
  });

  render() {
    const { params } = this.props.navigation.state
    const dataSource = [
      {
        id: 1,
        name: 'David'
      },
      {
        id: 2,
        name: 'Nguyen'
      },
      {
        id: 3,
        name: 'HAHAH'
      }
    ];
    // const {listExeamSchedule} = this.state.response.data.examSchedule;
    // console.log(this.state.response);
    if (this.state.loaded) {
      // console.log(this.state.response.data.examSchedule)
      let listExeamSchedule = this.state.response.data.examSchedule;
      content = <SwipeListView
        dataSource={ds.cloneWithRows(listExeamSchedule)}
        renderRow={data => (
          <View>
            <Text>I am {data} in a SwipeListView</Text>
          </View>
        )}
        renderHiddenRow={data => (
          <View>
            <Text>Left</Text>
            <Text>Right</Text>
          </View>
        )}
        leftOpenValue={75}
        rightOpenValue={-75}
      />
    } else {
      content = <Text>Loading</Text>
    }
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
      // <Text>HAHA</Text>
      // <View>
      //   {content}
      // </View>
      <SwipeListView
        dataSource={ds.cloneWithRows(dataSource)}
        renderRow={data => (
          <View>
            <Text>I am {data} in a SwipeListView</Text>
          </View>
        )}
        renderHiddenRow={data => (
          <View>
            <Text>Left</Text>
            <Text>Right</Text>
          </View>
        )}
        leftOpenValue={75}
        rightOpenValue={-75}
      />
    )
  }
}