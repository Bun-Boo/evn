import {fetcher} from 'src/api/Fetcher';
import store from 'src/redux/store';

export interface IDataApiChuyenDiem {
  DenTiet: string;
  GioiTinh: boolean;
  HoDem: string;
  IDDot: number;
  IDSinhVien: number;
  IdMonHoc: number;
  KhoaChuQuanMon: string;
  KhongCoLich_MaHocPhan: string;
  KhongCoLich_TenMonHoc: string;
  MC_ApiChuyenDiem_Chon: boolean;
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

export interface IDataPostApiChuyenDiem {
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

export interface IGetKetQuaApiChuyenDiem {
  code: number;
  arrayLength: number;
  message: string;
  rowsAffected: number[];
  body: IDataApiChuyenDiem[];
}

const path = {
  getListChuyenDiem:
    '/api/SP_MC_DT_ChuyenDiem_TiepNhan/EDU_Load_Para_MaSinhVien?$',
  getHocPhanTuongDuong: '/api/SP_HT_HPTD/Load_By_HT_HPTD_MCD_MaMonHoc?$',
  postChuyenDiemLan1: '/api/SP_MC_DT_ChuyenDiem_TiepNhan/ChiTiet_Add_Para',
  getIDChuyenDiem:
    '/api/SP_MC_DT_ChuyenDiem_TiepNhan/Load_R_MC_DT_ChuyenDiem_ID_ByMaSinhVien?$',
  postChuyenDiemLan2: '/api/SP_MC_DT_ChuyenDiem_TiepNhan/Add_Para',
};

const dispatch = store.dispatch;

function getListChuyenDiem(params: {MaSinhVien: number}): Promise<any> {
  return fetcher(
    {url: path.getListChuyenDiem, method: 'get', params: params},
    dispatch,
    {
      displayError: false,
    },
  );
}
function getHocPhanTuongDuong(params: {
  HT_HPTD_MCD_MaMonHoc: number;
  MaSinhVien: number;
}): Promise<any> {
  return fetcher(
    {url: path.getHocPhanTuongDuong, method: 'get', params: params},
    dispatch,
    {
      displayError: false,
    },
  );
}

function postChuyenDiemLan1(
  body: IDataPostApiChuyenDiem,
): Promise<IGetKetQuaApiChuyenDiem> {
  return fetcher(
    {url: path.postChuyenDiemLan1, method: 'post', data: body},
    dispatch,
    {
      displayError: true,
    },
  );
}

function getIDChuyenDien(params: {
  MC_DT_ChuyenDiem_MaSinhVien: number;
}): Promise<any> {
  return fetcher(
    {url: path.getIDChuyenDiem, method: 'get', params: params},
    dispatch,
    {
      displayError: false,
    },
  );
}

function postChuyenDiemLan2(
  body: IDataPostApiChuyenDiem,
): Promise<IGetKetQuaApiChuyenDiem> {
  return fetcher(
    {url: path.postChuyenDiemLan2, method: 'post', data: body},
    dispatch,
    {
      displayError: true,
    },
  );
}

export default {
  getListChuyenDiem,
  getHocPhanTuongDuong,
  postChuyenDiemLan1,
  getIDChuyenDien,
  postChuyenDiemLan2,
};
