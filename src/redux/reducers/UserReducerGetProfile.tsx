import UserConstant from '../constants/UserConstant';
import {IInfoStudent} from '../../api/User/ApiUser';

const initialState: any = {};
const UserReducerGetProfile = (
  state = initialState,
  action: {type: string; dataProfile: any},
): IInfoStudent => {
  switch (action.type) {
    case UserConstant.USER_GET_PROFILE:
      return {
        ...action.dataProfile,
      };
    default:
      return state;
  }
};

export default UserReducerGetProfile;
