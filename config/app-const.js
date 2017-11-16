import { Dimensions } from 'react-native';
export const AppConst = {
  domain: 'http://uit-es.herokuapp.com',
  color: {
    primary: '#009688'
  },
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  regexStudentId: /^[0-9]{8}$/
}