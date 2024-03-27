import UserConstant from '../constants/UserConstant';

export default {
  userGetProfile: (dataProfile: any): {type: string; dataProfile: any} => {
    return {
      type: UserConstant.USER_GET_PROFILE,
      dataProfile,
    };
  },
};
