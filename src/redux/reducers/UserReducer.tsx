import UserConstant from '../constants/UserConstant';
import {IAccountInfo} from '../../api/User/ApiUser';

const initialState: IAccountInfo = {
  code: 0,
  message: '',
  token: '',
  refreshToken: '',
};
const UserReducer = (
  state = initialState,
  action: {type: string; user: IAccountInfo; dataProfile: any},
): IAccountInfo => {
  switch (action.type) {
    case UserConstant.USER_LOGIN:
      return {
        ...action.user,
      };
    case UserConstant.USER_LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default UserReducer;
