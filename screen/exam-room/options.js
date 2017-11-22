import React from 'react';
import { HeaderRoom } from '../../components/header-room';


export const ExamRoomOptions = ({navigation, screenProps}) => ({

  headerTitle: <HeaderRoom goBack={() => navigation.goBack()}/>,
  headerLeft: null
})