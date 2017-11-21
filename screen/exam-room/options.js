import React from 'react';
import { HeaderRoom } from '../../components/header-room';

import Icon from 'react-native-vector-icons/MaterialIcons';
export const ExamRoomOptions = ({ navigation, screenProps }) => ({

  headerTitle: <HeaderRoom goBack={() => navigation.goBack()} />,
  headerLeft: null
})