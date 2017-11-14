import React, { Component, } from 'react';
import { View } from 'react-native'
import ContentLoader from 'react-native-content-loader';
import { Circle, Rect } from 'react-native-svg';
import { AppConst } from '../../../config/app-const';
import { LogConfig } from './log-config';
export class LogsLoader extends Component {

  componentDidMount() {

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
      <View style={{marginBottom: 15}}>
        <ContentLoader primaryColor="#eaeaea"
          secondaryColor="#d4d6d8"
          duration={1100}
          height={80}>
          <Circle cx="30" cy="30" r="20" />
          <Rect x={60}
            y="12"
            rx={LogConfig.radius}
            ry={LogConfig.radius}
            rx={LogConfig.radius}
            width={250 - 60}
            height={LogConfig.heightRect} />
          <Rect x={60}
            y="27"
            rx={LogConfig.radius}
            ry={LogConfig.radius}
            rx={LogConfig.radius}
            width={170 - 60}
            height={LogConfig.heightRect} />
          <Rect x={13}
            y="65"
            rx={LogConfig.radius}
            ry={LogConfig.radius}
            rx={LogConfig.radius}
            width={this.setSize(LogConfig.widthPercent).width + 13}
            height={LogConfig.heightRect} />
        </ContentLoader>
      </View>
    )
  }
}