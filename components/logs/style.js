import { StyleSheet, ViewStyle } from 'react-native';
import { AppConst } from '../../config/app-const';

export const logsStyle = StyleSheet.create({
  logWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemLogs: {
    marginVertical: 10,
    paddingHorizontal: 10
  },
  iconStyle: {
      marginRight: 10,
      color: '#555'
  },
  timeWrapper: {
    borderStyle: 'solid',
    borderTopColor: AppConst.color.primary,
    borderTopWidth: 2,
    marginTop: 10,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent: 'flex-end'
  },
  timeText: {
    backgroundColor: AppConst.color.primary,
    color: '#fff',
    textAlign: 'right',
    paddingHorizontal: 5,
    paddingVertical: 2,
    fontSize: 11,
    fontWeight: 'bold',
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  }
})