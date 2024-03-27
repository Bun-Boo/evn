import {fetcher} from '../Fetcher';
import store from '../../redux/store';

export interface ITenDot {
  code: number;
  arrayLength: number;
  activeYear: number;
  message: string;
  rowsAffected: number[];
  body: [
    {
      NamHoc: number;
      SoThuTu: number;
      TenDot: string;
      IsDangKyHocPhan: boolean;
      HeSo: number;
      SoTuan: number;
      DenThang: number;
      TuThang: number;
      TenDayDu: string | null;
      GhiChu: string | null;
      HBDuKien: any;
      HBSinhVien: any;
      NamHanhChinh: any;
      TuNgay: any;
      DenNgay: any;
      TenTiengAnh: any;
      IsChoPhepDKNTTT: boolean;
      MaDot: any;
    },
  ];
}

const path = {
  tenDot: '/api/SP_EDU/Load_TenDot',
};

const dispatch = store.dispatch;

function getTenDot(): Promise<ITenDot> {
  return fetcher({url: path.tenDot, method: 'get'}, dispatch, {
    displayError: true,
  });
}

export default {
  getTenDot,
};
