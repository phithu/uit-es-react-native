
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { ScreenOptions } from './screen/screen-options';
import { MainNavigation } from './navigation';
import { enhance } from 'react-navigation-addons';

export default App = enhance(StackNavigator)(
  MainNavigation, {
    navigationOptions: ScreenOptions
  }

);
