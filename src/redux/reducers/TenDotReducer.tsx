import TenDotConstant from '../constants/TenDotConstant';
import {ITenDot} from 'src/api/TenDot/ApiTenDot';

const initialState: ITenDot = {
  code: 0,
  arrayLength: 0,
  activeYear: 0,
  message: '',
  rowsAffected: [],
  body: [],
};
const TenDotReducer = (
  state = initialState,
  action: {type: string; tenDot: ITenDot},
): ITenDot => {
  switch (action.type) {
    case TenDotConstant.GET_TEN_DOT:
      return {
        ...action.tenDot,
      };
    default:
      return state;
  }
};

export default TenDotReducer;
