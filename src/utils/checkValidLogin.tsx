import store from 'src/redux/store';
import {showError} from './notification';

import jwt_decode from 'jwt-decode';
export function checkValidLogin() {
  const {user} = store.getState();
  if (!user) {
    return false;
  }
  const decoded: any = jwt_decode(user.token);
  const currentTimestamp = Math.floor(Date.now() / 1000);

  if (decoded.exp && decoded.exp >= currentTimestamp) {
    // const trangThaiHocTap = decoded.data[0]?.TrangThaiHocTap;

    // if (trangThaiHocTap === 'Đã tốt nghiệp') {
    //   showError('Bạn đã tốt nghiệp');
    //   return false;
    // }

    return true;
  }

  return false;
}
