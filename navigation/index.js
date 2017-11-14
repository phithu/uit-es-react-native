import React from 'react';
import { HomeScreen, HomeOptions } from '../screen/home';
import { ExamScheduleOptions, ExamScheduleScreen } from '../screen/exam-schedule';

export const MainNavigation = {
  HomeSreen: {
    screen: HomeScreen,
    navigationOptions: HomeOptions
  },
  ExamScheduleScreen: {
    screen: ExamScheduleScreen,
  }
}