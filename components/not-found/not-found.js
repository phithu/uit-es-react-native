import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  Animated
} from 'react-native';

import { NotFoundStyle } from './style';

export class NotFound extends Component {

  constructor(props) {
    super(props);

    this.state = {
      marginTop: new Animated.Value(20),
    }
  }

  componentDidMount() {
    this.startAnimation();

  }

  startAnimation() {

    Animated.timing(
      this.state.marginTop, {
        toValue: -50,
        duration: 1500
      }
    ).start(() => this.stopAnimation())
  }

  stopAnimation() {

    Animated.timing(
      this.state.marginTop, {
        toValue: 20,
        duration: 1500
      }
    ).start(() => this.startAnimation())
  }

  render() {
    const {marginTop} = this.state;
    return (
      <View style={NotFoundStyle.container}>
        <Animated.Image
          style={[NotFoundStyle.images, {marginTop: marginTop}]}
          source={require('../../assets/images/1.png')}
        />
        <Text style={NotFoundStyle.text}>{this.props.mesages}</Text>
      </View>
    )
  }
}