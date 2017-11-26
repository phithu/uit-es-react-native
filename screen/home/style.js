import { AppConst } from "../../config/app-const";

export const HomeStyle = {
  SearchBarContainer: {
    backgroundColor: '#fff',
  },
  SearchBarInput: {
    backgroundColor: '#fff',
    paddingLeft: 35
  },
  wrapper: {
    backgroundColor: '#fff',
    // elevation: 10,
    marginTop: 20
  },
  textRecent: {
    paddingLeft: 15,
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  validatorError: {
    backgroundColor: AppConst.color.danger,
    marginTop: 10,
    borderRadius: 5,
    paddingVertical: 5,
  },
  textError: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold'
  }

}