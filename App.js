
import React from 'react';
import {
  AppRegistry,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { ScreenOptions } from './screen/screen-options';
import { MainNavigation } from './navigation'
export const App = StackNavigator(
  MainNavigation,
  {
    navigationOptions: ScreenOptions
  }
);
