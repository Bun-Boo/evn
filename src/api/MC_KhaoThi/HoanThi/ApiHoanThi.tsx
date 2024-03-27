import {fetcher} from 'src/api/Fetcher';
import store from 'src/redux/store';

export interface IDataHoanThi {
  DenTiet: string;
  GioiTinh: boolean;
  HoDem: string;
  IDDot: number;
  IDSinhVien: number;
  IdMonHoc: number;
  KhoaChuQuanMon: string;
  KhongCoLich_MaHocPhan: string;
  KhongCoLich_TenMonHoc: string;
  MC_HoanThi_Chon: boolean;
  MaLopHocPhan: string;
  MaSinhVien: string;
  NgaySinh2: string;
  NgayThi: string;
  Nhom: string;
  Ten: string;
  TenCoSo: string;
  TenDot: string;
  TenHeDaoTao: string;
  TenHinhThucThi: string;
  TenKhoaHoc: string;
  TenLoaiHinhDT: string;
  TenLop: string;
  TenMonHoc: string;
  TenNganh: string;
  TenNghe: string;
  TenPhong: string;
  Thu: string;
  TuTiet: string;
}

export interface IGetKetQuaHoanThi {
  code: number;
  arrayLength: number;
  message: string;
  rowsAffected: number[];
  body: IDataHoanThi[];
}

const path = {
  getKetQuaHoanThi:
    '/api/SP_MC_KT_HoanThi_TiepNhan/EDU_Load_Para_MaSinhVien_LichThi?$',
  postYeuCauHoanThi: '/api/SP_MC_KT_HoanThi_TiepNhan/Add_Para',
};

const dispatch = store.dispatch;

function getKetQuaHoanThi(params: {
  MaSinhVien: number;
  MC_KT_HoanThi_TenDot: string;
  MC_KT_HoanThi_LoaiThi: string;
  MC_KT_HoanThi_YeuCau: number | string;
}): Promise<IGetKetQuaHoanThi> {
  return fetcher(
    {url: path.getKetQuaHoanThi, method: 'get', params: params},
    dispatch,
    {
      displayError: false,
    },
  );
}

function postYeuCauHoanThi(body: IDataHoanThi): Promise<IGetKetQuaHoanThi> {
  return fetcher(
    {url: path.postYeuCauHoanThi, method: 'post', data: body},
    dispatch,
    {
      displayError: true,
    },
  );
}

export default {
  getKetQuaHoanThi,
  postYeuCauHoanThi,
};
