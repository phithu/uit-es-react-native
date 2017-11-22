import React, { Component } from 'react';
import { View } from 'react-native'
import ContentLoader from 'react-native-content-loader';
import { Rect } from 'react-native-svg';

import { ScheduleLoaderStyle } from './style';

export class ScheduleLoader extends Component {

  constructor(props) {
    super(props);
  }

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
      <View style={ScheduleLoaderStyle.wrapper}>
        <ContentLoader primaryColor="#eaeaea"
                       secondaryColor="#d4d6d8"
                       duration={1100}
                       height={130}>
          <Rect x={13}
                y="15"
                rx={ScheduleLoaderStyle.radius}
                ry={ScheduleLoaderStyle.radius}
                rx={ScheduleLoaderStyle.radius}
                width={this.setSize(ScheduleLoaderStyle.widthPercent).width + 13}
                height={ScheduleLoaderStyle.heightRect}/>
          <Rect x={13}
                y="35"
                rx={ScheduleLoaderStyle.radius}
                ry={ScheduleLoaderStyle.radius}
                rx={ScheduleLoaderStyle.radius}
                width={this.setSize(ScheduleLoaderStyle.widthPercent).width + 13}
                height={ScheduleLoaderStyle.heightRect}/>
          <Rect x={13}
                y="55"
                rx={ScheduleLoaderStyle.radius}
                ry={ScheduleLoaderStyle.radius}
                rx={ScheduleLoaderStyle.radius}
                width={this.setSize(ScheduleLoaderStyle.widthPercent).width + 13}
                height={ScheduleLoaderStyle.heightRect}/>
          <Rect x={13}
                y="75"
                rx={ScheduleLoaderStyle.radius}
                ry={ScheduleLoaderStyle.radius}
                rx={ScheduleLoaderStyle.radius}
                width={this.setSize(ScheduleLoaderStyle.widthPercent).width + 13}
                height={ScheduleLoaderStyle.heightRect}/>
          <Rect x={13}
                y="95"
                rx={ScheduleLoaderStyle.radius}
                ry={ScheduleLoaderStyle.radius}
                rx={ScheduleLoaderStyle.radius}
                width={this.setSize(ScheduleLoaderStyle.widthPercent).width + 13}
                height={ScheduleLoaderStyle.heightRect}/>
          <Rect x={13}
                y="115"
                rx={ScheduleLoaderStyle.radius}
                ry={ScheduleLoaderStyle.radius}
                rx={ScheduleLoaderStyle.radius}
                width={this.setSize(ScheduleLoaderStyle.widthPercent).width + 13}
                height={ScheduleLoaderStyle.heightRect}/>
        </ContentLoader>
      </View>
    )
  }
}