import React, { Component } from 'react';
import { ScheduleLoader } from './schedule-loader';
import { View, FlatList, Text } from 'react-native';
export class ListScheduleLoader extends Component {
  constructor(props) {
    super(props);
    this.listData = Array(this.props.number).fill('').map((value, index) => {
      return {
        key: index
      }
    })
  }
  render() {
    return (
      <View>
        <FlatList data={this.listData} 
                  renderItem={({ item }) => <ScheduleLoader widthWrapper={this.props.widthWrapper}/>}>
        </FlatList>
      </View>
    )
  }
}