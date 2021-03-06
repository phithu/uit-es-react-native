import React, { Component } from 'react';
import { FlatList, View } from 'react-native';

import { LogsLoader } from './logs-loader';


export class ListLogsLoader extends Component {
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
                  renderItem={({item}) => <LogsLoader widthWrapper={this.props.widthWrapper}/>}>
        </FlatList>
      </View>
    )
  }
}