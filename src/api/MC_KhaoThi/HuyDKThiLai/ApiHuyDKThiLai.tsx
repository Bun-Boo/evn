import {fetcher} from 'src/api/Fetcher';
import store from 'src/redux/store';

export interface IDataHuyDKThiLai {
  DenTiet: string;
  GioiTinh: boolean;
  HoDem: string;
  IDDot: number;
  IDSinhVien: number;
  IdMonHoc: number;
  KhoaChuQuanMon: string;
  KhongCoLich_MaHocPhan: string;
  KhongCoLich_TenMonHoc: string;
  MC_HuyDKThiLai_Chon: boolean;
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

export interface IGetKetQuaHuyDKThiLai {
  code: number;
  arrayLength: number;
  message: string;
  rowsAffected: number[];
  body: IDataHuyDKThiLai[];
}

const path = {
  getKetQuaHuyDKThiLai:
    '/api/SP_MC_KT_HDKThiLai_TiepNhan/EDU_Load_Para_MaSinhVien_DKThi?$',
  postYeuCauHuyDKThiLai: '/api/SP_MC_KT_HDKThiLai_TiepNhan/Add_Para',
};

const dispatch = store.dispatch;

function getKetQuaHuyDKThiLai(params: {
  MaSinhVien: number;
  MC_KT_HDKThiLai_TenDot: string;
  MC_KT_HDKThiLai_LoaiThi: string;
  MC_KT_HDKThiLai_YeuCau: string;
}): Promise<IGetKetQuaHuyDKThiLai> {
  return fetcher(
    {url: path.getKetQuaHuyDKThiLai, method: 'get', params: params},
    dispatch,
    {
      displayError: false,
    },
  );
}

function postYeuCauHuyDKThiLai(
  body: IDataHuyDKThiLai,
): Promise<IGetKetQuaHuyDKThiLai> {
  return fetcher(
    {url: path.postYeuCauHuyDKThiLai, method: 'post', data: body},
    dispatch,
    {
      displayError: true,
    },
  );
}

export default {
  getKetQuaHuyDKThiLai,
  postYeuCauHuyDKThiLai,
};
