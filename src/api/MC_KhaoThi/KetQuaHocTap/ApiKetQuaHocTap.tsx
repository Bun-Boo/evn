import {fetcher} from 'src/api/Fetcher';
import store from 'src/redux/store';

export interface IDataKetQuaHocTap {
  DenTiet: string;
  GioiTinh: boolean;
  HoDem: string;
  IDDot: number;
  IDSinhVien: number;
  IdMonHoc: number;
  KhoaChuQuanMon: string;
  KhongCoLich_MaHocPhan: string;
  KhongCoLich_TenMonHoc: string;
  MC_KetQuaHocTap_Chon: boolean;
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

export interface IGetKetQuaKetQuaHocTap {
  code: number;
  arrayLength: number;
  message: string;
  rowsAffected: number[];
  body: IDataKetQuaHocTap[];
}

const path = {
  getKetQuaKetQuaHocTap:
    '/api/SP_MC_KT_KetQuaHT_TiepNhan/EDU_Load_Para_MaSinhVien_KetQuaHT?$',
  postYeuCauKetQuaHocTap: '/api/SP_MC_KT_KetQuaHT_TiepNhan/Add_Para',
};

const dispatch = store.dispatch;

function getKetQuaKetQuaHocTap(params: {
  MaSinhVien: number;
}): Promise<IGetKetQuaKetQuaHocTap> {
  return fetcher(
    {url: path.getKetQuaKetQuaHocTap, method: 'get', params: params},
    dispatch,
    {
      displayError: false,
    },
  );
}

function postYeuCauKetQuaHocTap(
  body: IDataKetQuaHocTap,
): Promise<IGetKetQuaKetQuaHocTap> {
  return fetcher(
    {url: path.postYeuCauKetQuaHocTap, method: 'post', data: body},
    dispatch,
    {
      displayError: true,
    },
  );
}

export default {
  getKetQuaKetQuaHocTap,
  postYeuCauKetQuaHocTap,
};
