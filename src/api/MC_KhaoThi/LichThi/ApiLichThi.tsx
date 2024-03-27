import {fetcher} from 'src/api/Fetcher';
import store from 'src/redux/store';

export interface IDataLichThi {
  DenTiet: string;
  GioiTinh: boolean;
  HoDem: string;
  IDDot: number;
  IDSinhVien: number;
  IdMonHoc: number;
  KhoaChuQuanMon: string;
  KhongCoLich_MaHocPhan: string;
  KhongCoLich_TenMonHoc: string;
  MC_LichThi_Chon: boolean;
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
export interface ILichThiBody {
  TenCoSo: any;
  MaSinhVien: any;
  HoDem: any;
  Ten: any;
  GioiTinh: any;
  TenHeDaoTao: any;
  TenLoaiHinhDT: any;
  TenKhoaHoc: any;
  TenNganh: any;
  TenNghe: any;
  TenLop: any;
  IDSinhVien: string;
  MaLopHocPhan: any;
  TenMonHoc: any;
  KhoaChuQuanMon: any;
  TenHinhThucThi: any;
  NgayThi: string;
  Thu: any;
  Nhom: any;
  TuTiet: any;
  DenTiet: any;
  TenPhong: any;
  KhongCoLich_MaHocPhan: any;
  KhongCoLich_TenMonHoc: any;
}

export interface IGetKetQuaLichThi {
  code: number;
  arrayLength: number;
  message: string;
  rowsAffected: number[];
  body: IDataLichThi[];
}

const path = {
  getKetQuaLichThi:
    '/api/SP_MC_KT_LichThi_TiepNhan/EDU_Load_R_Para_MaSinhVien_LichThiLichHoc?$',
  postYeuCauLichThi: '/api/SP_MC_KT_LichThi_TiepNhan/Add_Para',
};

const dispatch = store.dispatch;

function getKetQuaLichThi(params: {
  MaSinhVien: number;
  MC_KT_LichThi_TenDot: string;
  MC_KT_LichThi_LoaiThi: string;
  MC_KT_LichThi_YeuCau: number;
}): Promise<IGetKetQuaLichThi> {
  return fetcher(
    {url: path.getKetQuaLichThi, method: 'get', params: params},
    dispatch,
    {
      displayError: false,
    },
  );
}

function postYeuCauLichThi(body: ILichThiBody): Promise<IGetKetQuaLichThi> {
  return fetcher(
    {url: path.postYeuCauLichThi, method: 'post', data: body},
    dispatch,
    {
      displayError: true,
    },
  );
}

export default {
  getKetQuaLichThi,
  postYeuCauLichThi,
};
