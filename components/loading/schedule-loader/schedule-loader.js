import React, { Component } from 'react';
import { Text, View } from 'react-native';
import ContentLoader from 'react-native-content-loader';
import { Circle, Rect } from 'react-native-svg';
import { ScheduleConfig } from './schedule-config';

export class ScheduleLoader extends Component {
  setSize(percent) {
    percent = (percent / 100);
    let widthWrapper = (this.props.widthWrapper * percent);
    let marginLeft = (this.props.widthWrapper - widthWrapper);
    return {
      marginLeft: marginLeft,
      width: (widthWrapper - marginLeft)
    }
  }

  render() {

    return (
      <View style={{ backgroundColor: '#fff', borderBottomColor: '#eaeaea', borderBottomWidth: 1, }}>
        <ContentLoader primaryColor="#eaeaea"
          secondaryColor="#d4d6d8"
          duration={1100}
          height={130}>
          <Rect x={13}
            y="10"
            rx={ScheduleConfig.radius}
            ry={ScheduleConfig.radius}
            rx={ScheduleConfig.radius}
            width={this.setSize(ScheduleConfig.widthPercent).width + 13}
            height={ScheduleConfig.heightRect} />
          <Rect x={13}
            y="30"
            rx={ScheduleConfig.radius}
            ry={ScheduleConfig.radius}
            rx={ScheduleConfig.radius}
            width={this.setSize(ScheduleConfig.widthPercent).width + 13}
            height={ScheduleConfig.heightRect} />
          <Rect x={13}
            y="50"
            rx={ScheduleConfig.radius}
            ry={ScheduleConfig.radius}
            rx={ScheduleConfig.radius}
            width={this.setSize(ScheduleConfig.widthPercent).width + 13}
            height={ScheduleConfig.heightRect} />
          <Rect x={13}
            y="70"
            rx={ScheduleConfig.radius}
            ry={ScheduleConfig.radius}
            rx={ScheduleConfig.radius}
            width={this.setSize(ScheduleConfig.widthPercent).width + 13}
            height={ScheduleConfig.heightRect} />
          <Rect x={13}
            y="90"
            rx={ScheduleConfig.radius}
            ry={ScheduleConfig.radius}
            rx={ScheduleConfig.radius}
            width={this.setSize(ScheduleConfig.widthPercent).width + 13}
            height={ScheduleConfig.heightRect} />
          <Rect x={13}
            y="110"
            rx={ScheduleConfig.radius}
            ry={ScheduleConfig.radius}
            rx={ScheduleConfig.radius}
            width={this.setSize(ScheduleConfig.widthPercent).width + 13}
            height={ScheduleConfig.heightRect} />
        </ContentLoader>
      </View>
    )
  }
}