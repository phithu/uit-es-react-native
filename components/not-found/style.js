import { AppConst } from '../../config/app-const';

export const NotFoundStyle = {
  container: {
    flex: 1,
    height: AppConst.height - 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  images: {
    width: 150,
    height: 150
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 30,
    color: AppConst.color.danger,
    textAlign: 'center',
  }
};