import React, { Component } from 'react';
import { Text, View } from 'react-native';
// import { StatusBarComponent } from '../components/status-bar';
import { StatusBarComponent } from '../../components/status-bar';

export class ExamScheduleScreen extends Component {

  // static navigationOption = ({navigation}) => {

  // }

  // static navigationOptions = {
  //   title: `${}`
  // }
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`,
  });

  render() {
    // console.log(this.props)
    const { params } = this.props.navigation.state
    return (
      <View>
        <StatusBarComponent />
        <Text>DATA: {params.data}</Text>
      </View>
    )

  }
}