import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { ScheduleRow } from '../schedule-row';
import { ListScheduleStyle } from './style';
import { Utilitiesstyle } from '../../../styles/utilities';

export class ListSchedule extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
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