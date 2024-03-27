import {fetcher} from 'src/api/Fetcher';
import store from 'src/redux/store';

export interface IDataMienHocThiTA {
  DenTiet: string;
  GioiTinh: boolean;
  HoDem: string;
  IDDot: number;
  IDSinhVien: number;
  IdMonHoc: number;
  KhoaChuQuanMon: string;
  KhongCoLich_MaHocPhan: string;
  KhongCoLich_TenMonHoc: string;
  MC_MienHocThiTA_Chon: boolean;
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

export interface IGetKetQuaMienHocThiTA {
  code: number;
  arrayLength: number;
  message: string;
  rowsAffected: number[];
  body: IDataMienHocThiTA[];
}

const path = {
  getKetQuaMienHocThiTA:
    '/api/SP_MC_KT_MienHocThi_TiepNhan/EDU_Load_Para_MaSinhVien_DangKyHoc_TiengAnh?$',
  postYeuCauMienHocThiTA: '/api/SP_MC_KT_MienHocThi_TiepNhan/Add_Para',
};

const dispatch = store.dispatch;

function getKetQuaMienHocThiTA(params: {
  MC_KT_MienHocThi_MaSinhVien: number;
  MC_KT_MienHocThi_TenDot: string;
}): Promise<IGetKetQuaMienHocThiTA> {
  return fetcher(
    {url: path.getKetQuaMienHocThiTA, method: 'get', params: params},
    dispatch,
    {
      displayError: false,
    },
  );
}

function postYeuCauMienHocThiTA(
  body: IDataMienHocThiTA,
): Promise<IGetKetQuaMienHocThiTA> {
  return fetcher(
    {url: path.postYeuCauMienHocThiTA, method: 'post', data: body},
    dispatch,
    {
      displayError: true,
    },
  );
}

export default {
  getKetQuaMienHocThiTA,
  postYeuCauMienHocThiTA,
};
