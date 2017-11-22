import { Dimensions } from 'react-native';

export const AppConst = {
  domain: 'http://uit-es.herokuapp.com',
  color: {
    primary: '#009688',
    second: '#3498DB',
    danger: '#FF4F5E',
  },
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  regexStudentId: /^[0-9]{8}$/
}