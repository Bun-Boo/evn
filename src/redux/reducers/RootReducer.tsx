import {combineReducers} from 'redux';
import UserReducer from './UserReducer';
import UserReducerGetProfile from './UserReducerGetProfile';
import TenDotReducer from './TenDotReducer';

const rootReducer = combineReducers({
  user: UserReducer,
  userInfo: UserReducerGetProfile,
  tenDot: TenDotReducer,
});

export default rootReducer;

export type IRootState = ReturnType<typeof rootReducer>;
