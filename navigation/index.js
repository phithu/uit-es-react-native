import { HomeScreen, HomeOptions } from '../screen/home';
import { ExamScheduleScreen, ExamScheduleOptions } from '../screen/exam-schedule';
import { ExamRoomScreen, ExamRoomOptions } from '../screen/exam-room';
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