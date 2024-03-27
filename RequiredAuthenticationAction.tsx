import {CommonReduxAction} from './src/types/common';
import RequiredAuthenticationConstant from './src/redux/constants/RequiredAuthenticationConstant';

export default {
  requiredLogin: (): CommonReduxAction => ({
    type: RequiredAuthenticationConstant.REQUIRED_AUTHENTICATION_LOGIN_TOGGLE,
  }),
  openModalLogin: (): CommonReduxAction => ({
    type: RequiredAuthenticationConstant.OPEN_MODAL_LOGIN,
  }),
  closeModalLogin: (): CommonReduxAction => ({
    type: RequiredAuthenticationConstant.CLOSE_MODAL_LOGIN,
  }),
};
