import { StyleSheet } from 'react-native';
import { AppConst } from '../../../config/app-const';

export const ListScheduleStyle = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    borderBottomColor: '#eaeaea',
    borderBottomWidth: 1,
    paddingVertical: 10
  },
  frontBack: {
    // alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff'
  },
  frontBackRight: {
    backgroundColor: AppConst.color.danger,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textfrontBack: {
    color: '#fff',
    fontSize: 13,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  frontBackLeft: {
    backgroundColor: AppConst.color.second,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  }
})