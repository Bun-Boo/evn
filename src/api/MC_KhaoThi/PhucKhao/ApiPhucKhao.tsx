import {fetcher} from 'src/api/Fetcher';
import store from 'src/redux/store';

export interface IDataPhucKhao {
  MC_KT_PhucKhao_TenDot: string;
  MC_KT_PhucKhao_LoaiThi: string;
  MC_KT_PhucKhao_TenCoSo: string;
  MC_KT_PhucKhao_MaSinhVien: string;
  MC_KT_PhucKhao_HoDem: string;
  MC_KT_PhucKhao_Ten: string;
  MC_KT_PhucKhao_GioiTinh: boolean;
  MC_KT_PhucKhao_TenHeDaoTao: string;
  MC_KT_PhucKhao_TenLoaiHinhDT: string;
  MC_KT_PhucKhao_TenKhoaHoc: string;
  MC_KT_PhucKhao_TenNganh: string;
  MC_KT_PhucKhao_TenNghe: string;
  MC_KT_PhucKhao_TenLop: string;
  MC_KT_PhucKhao_DienThoai: string;
  MC_KT_PhucKhao_Email: string;
  MC_KT_PhucKhao_IDSinhVien: string;
  MC_KT_PhucKhao_NgaySinh2: string;
  MC_KT_PhucKhao_MaLopHocPhan: string;
  MC_KT_PhucKhao_TenMonHoc: string;
  MC_KT_PhucKhao_KhoaChuQuanMon: string;
  MC_KT_PhucKhao_TenHinhThucThi: string;
  MC_KT_PhucKhao_NgayThi: string;
  MC_KT_PhucKhao_Thu: string;
  MC_KT_PhucKhao_Nhom: string;
  MC_KT_PhucKhao_TuTiet: string;
  MC_KT_PhucKhao_DenTiet: string;
  MC_KT_PhucKhao_TenPhong: string;
  MC_KT_PhucKhao_SBD: string;
  MC_KT_PhucKhao_DiemThi: string;
  MC_KT_PhucKhao_DiemThi1: string;
  MC_KT_PhucKhao_DiemThi2: string;
  MC_KT_PhucKhao_DiemTongKet: string;
  MC_KT_PhucKhao_DiemTongKet1: string;
  MC_KT_PhucKhao_DiemTongKet2: string;
  MC_KT_PhucKhao_TuiBaiThi: string;
  MC_KT_PhucKhao_SoPhach: string;
}

export interface IGetKetQuaPhucKhao {
  code: number;
  arrayLength: number;
  message: string;
  rowsAffected: number[];
  body: IDataPhucKhao[];
}

const path = {
  getKetQuaPhucKhao:
    '/api/SP_MC_KT_PhucKhao_TiepNhan/EDU_Load_R_Para_MaSinhVien_KetQuaHT?$',
  postYeuCauPhucKhao: '/api/SP_MC_KT_PhucKhao_TiepNhan/Add_Para',
};

const dispatch = store.dispatch;

function getKetQuaPhucKhao(params: {
  MaSinhVien: number;
  MC_KT_PhucKhao_TenDot: string;
  MC_KT_PhucKhao_LoaiThi: string;
}): Promise<IGetKetQuaPhucKhao> {
  return fetcher(
    {url: path.getKetQuaPhucKhao, method: 'get', params: params},
    dispatch,
    {
      displayError: false,
    },
  );
}

function postYeuCauPhucKhao(body: IDataPhucKhao): Promise<IGetKetQuaPhucKhao> {
  return fetcher(
    {url: path.postYeuCauPhucKhao, method: 'post', data: body},
    dispatch,
    {
      displayError: true,
    },
  );
}

export default {
  getKetQuaPhucKhao,
  postYeuCauPhucKhao,
};
