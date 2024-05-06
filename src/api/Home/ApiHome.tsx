import {fetcher} from '../Fetcher';
import store from '../../redux/store';

export interface IHomeInput {
  id: string;
  diaPhuong: string;
  vungGio: string;
  dangDiaHinh: string;
  doCaoQuyDoiGio: Number;
  thoiGianSuDungCongTrinh: Number;
  capDienApDen: string;
  dayDan: string;
  ungSuatLonNhat: Number;
  ungSuatTrungBinh: Number;
  doCaoTreoDayTrungBinh: Number;
  khoangCachMinChoPhepTuDayDanDenMatDat: Number;
  soLuongPhanPha: string;
  soLuongDayDanTrenMotTangXa: string;
  khoangCachTuDiemTreoDayToiTamCotH4: Number;
  loaiCotBeTongLiTam: string;
  chieuCaoCot: string;
  heSoAnToan: string;
  congDungCot: string;
  loaiCot: string;
  kc: Number;
  kcGio: Number;
  kcTrongLuong: Number;
  kcDaiBieu: Number;
  gocNeo: string;
  soMach: string;
  chonCot?: string;
  dateTime?: string;
}

const path = {
  homeInput: '/id/1310?sheet=Sheet1',
  history: '?sheet=history',
};

const dispatch = store.dispatch;


function patchInput(data: IHomeInput): Promise<IHomeInput> {
  console.log(">>> patchInput", data)
  return fetcher({url: path.homeInput, method: 'patch', data}, dispatch, {
    displayError: true,
  });
}

function postHistory(data: IHomeInput): Promise<IHomeInput> {
  return fetcher({url: path.history, method: 'post', data}, dispatch, {
    displayError: true,
  });
}

export default {
  patchInput,
  postHistory,
};
