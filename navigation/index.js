import { HomeOptions, HomeScreen } from '../screen/home';
import { ExamScheduleScreen } from '../screen/exam-schedule';
import { ExamRoomOptions, ExamRoomScreen } from '../screen/exam-room';

export const MainNavigation = {
  HomeSreen: {
    screen: HomeScreen,
    navigationOptions: HomeOptions
  },
  ExamScheduleScreen: {
    screen: ExamScheduleScreen,
  },
  ExamRoomScreen: {
    screen: ExamRoomScreen,
    navigationOptions: ExamRoomOptions
  }
}