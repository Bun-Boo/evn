import {fetcher} from 'src/api/Fetcher';
import store from 'src/redux/store';

export interface IDataDKThiLai {
  DenTiet: string;
  GioiTinh: boolean;
  HoDem: string;
  IDDot: number;
  IDSinhVien: number;
  IdMonHoc: number;
  KhoaChuQuanMon: string;
  KhongCoLich_MaHocPhan: string;
  KhongCoLich_TenMonHoc: string;
  MC_DKThiLai_Chon: boolean;
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

export interface IDataPostDKThiLai {
  MC_KT_DangKyThi_TenDot: string;
  MC_KT_DangKyThi_LoaiThi: string;
  MC_KT_DangKyThi_TenCoSo: string;
  MC_KT_DangKyThi_MaSinhVien: string;
  MC_KT_DangKyThi_HoDem: string;
  MC_KT_DangKyThi_Ten: string;
  MC_KT_DangKyThi_GioiTinh: false;
  MC_KT_DangKyThi_TenHeDaoTao: string;
  MC_KT_DangKyThi_TenLoaiHinhDT: string;
  MC_KT_DangKyThi_TenKhoaHoc: string;
  MC_KT_DangKyThi_TenNganh: string;
  MC_KT_DangKyThi_TenNghe: string;
  MC_KT_DangKyThi_TenLop: string;
  MC_KT_DangKyThi_DienThoai: string;
  MC_KT_DangKyThi_YeuCau: number | string;
  MC_KT_DangKyThi_Email: string;
  MC_KT_DangKyThi_NgaySinh2: string;
  MC_KT_DangKyThi_IDSinhVien: string;
  MC_KT_DangKyThi_MaLopHocPhan: string;
  MC_KT_DangKyThi_TenMonHoc: string;
  MC_KT_DangKyThi_TenHinhThucThi: string;
  MC_KT_DangKyThi_DiemThi: string;
  MC_KT_DangKyThi_DiemThi1: string;
  MC_KT_DangKyThi_DiemThi2: string;
  MC_KT_DangKyThi_DiemTongKet: string;
  MC_KT_DangKyThi_DiemTongKet1: string;
  MC_KT_DangKyThi_DiemTongKet2: string;
  MC_KT_DangKyThi_YeuCau_LyDoKhacChiTiet: string;
}

export interface IGetKetQuaDKThiLai {
  code: number;
  arrayLength: number;
  message: string;
  rowsAffected: number[];
  body: IDataDKThiLai[];
}

const path = {
  getKetQuaDKThiLai:
    '/api/SP_MC_KT_DangKyThi_TiepNhan/EDU_Load_R_Para_MaSinhVien_DangKyThi?$',
  postYeuCauDKThiLai: '/api/SP_MC_KT_DangKyThi_TiepNhan/Add_Para',
};

const dispatch = store.dispatch;

function getKetQuaDKThiLai(params: {
  MaSinhVien: number;
  MC_KT_DangKyThi_TenDot: string;
  MC_KT_DangKyThi_LoaiThi: string;
}): Promise<IGetKetQuaDKThiLai> {
  return fetcher(
    {url: path.getKetQuaDKThiLai, method: 'get', params: params},
    dispatch,
    {
      displayError: false,
    },
  );
}

function postYeuCauDKThiLai(
  body: IDataPostDKThiLai,
): Promise<IGetKetQuaDKThiLai> {
  return fetcher(
    {url: path.postYeuCauDKThiLai, method: 'post', data: body},
    dispatch,
    {
      displayError: true,
    },
  );
}

export default {
  getKetQuaDKThiLai,
  postYeuCauDKThiLai,
};
