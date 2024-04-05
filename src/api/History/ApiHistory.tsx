import {fetcher} from '../Fetcher';
import store from '../../redux/store';

export interface IHistory {
  id: string;
  diaPhuong: string;
  vungGio: string;
  dangDiaHinh: string;
  doCaoQuyDoiGio: string;
  thoiGianSuDungCongTrinh: string;
  capDienApDen: string;
  dayDan: string;
  ungSuatLonNhat: string;
  ungSuatTrungBinh: string;
  doCaoTreoDayTrungBinh: string;
  khoangCachMinChoPhepTuDayDanDenMatDat: string;
  soLuongPhanPha: string;
  soLuongDayDanTrenMotTangXa: string;
  khoangCachTuDiemTreoDayToiTamCotH4: string;
  loaiCotBeTongLiTam: string;
  chieuCaoCot: string;
  heSoAnToan: string;
  congDungCot: string;
  loaiCot: string;
  kc: string;
  kcGio: string;
  kcTrongLuong: string;
  kcDaiBieu: string;
  gocNeo: string;
  soMach: string;
  chonCot: string;
  dateTime: string;
}

const path = {
  history: '?sheet=history',
};

const dispatch = store.dispatch;

function getHistory(): Promise<IHistory[]> {
  return fetcher({url: path.history, method: 'get'}, dispatch, {
    displayError: true,
  });
}

export default {
  getHistory,
};
