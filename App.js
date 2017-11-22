import React from 'react';
import { enhance } from 'react-navigation-addons';

import { StackNavigator } from 'react-navigation';
import { ScreenOptions } from './screen/screen-options';
import { MainNavigation } from './navigation';

export default App = enhance(StackNavigator)(
  MainNavigation, {
    navigationOptions: ScreenOptions
  }
);
