import {ITenDot} from 'src/api/TenDot/ApiTenDot';
import TenDotConstant from '../constants/TenDotConstant';

export default {
  getTenDot: (tenDot: ITenDot): {type: string; tenDot: ITenDot} => {
    return {
      type: TenDotConstant.GET_TEN_DOT,
      tenDot,
    };
  },
};
