import { StyleSheet } from 'react-native';
import { AppConst } from '../../config/app-const';

export const ToolbarStyle = StyleSheet.create({
  toolbar: {
    height: 50,
    backgroundColor: AppConst.color.primary,
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
    lineHeight: 40,
    fontWeight: 'bold'
  }
})