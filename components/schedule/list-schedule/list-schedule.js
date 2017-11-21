import React, { Component } from 'react';
import {
  ListView,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { ScheduleRow } from '../schedule-row';
import { ListScheduleStyle } from './style';
import { Utilitiesstyle } from '../../../styles/utilities';
import Icon from 'react-native-vector-icons/MaterialIcons';

export class ListSchedule extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    // this.openListSchedule.bind(this);
  }
  openListSchedule() {
    // this.props.navigation.navigate('ExamRoomScreen');
    this.props.openListSchedule();
  }
  render() {
    return (
      <SwipeListView
        dataSource={this.ds.cloneWithRows(this.props.listData)}
        renderRow={item => (
          <View style={ListScheduleStyle.wrapper}>
            <ScheduleRow title="Môn thi: " value={item.class} />
            <ScheduleRow title="Mã lớp: " value={item.idClass} />
            <ScheduleRow title="STT: " value={item.orderNumber} />
            <ScheduleRow title="Ngày thi: " value={item.date} />
            <ScheduleRow title="Ca thi: " value={`${item.shirt} - ${item.hours}`} />
            <ScheduleRow title="Phòng thi: " value={item.room} />
          </View>
        )}
        renderHiddenRow={data => (
          <View style={[Utilitiesstyle.layoutRow, ListScheduleStyle.frontBack]}>
            <TouchableOpacity activeOpacity={0.7} onPress={this.openListSchedule.bind(this)} style={ListScheduleStyle.frontBackLeft}>
                <Icon name="people" size={25} color="#fff" />
                <Text style={ListScheduleStyle.textfrontBack}>Danh sách phòng thi</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7} style={ListScheduleStyle.frontBackRight}>
              <Icon name="notifications" size={25} color="#fff" />
              <Text style={ListScheduleStyle.textfrontBack}>Thông báo</Text>
            </TouchableOpacity>
          </View>
        )}
        leftOpenValue={80}
        rightOpenValue={-80}
      />
    )
  }
}