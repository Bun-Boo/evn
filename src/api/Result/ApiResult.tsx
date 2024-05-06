import {fetcher} from '../Fetcher';
import store from '../../redux/store';

export interface IResult {
  [key: string]: string | number | boolean | null;
}

const path = {
  result_DD: '?sheet=Result_DD',
  result_DCS: '?sheet=Result_DCS',
};

const dispatch = store.dispatch;


function getResult_DD(): Promise<IResult[]> {
  return fetcher({url: path.result_DD, method: 'get'}, dispatch, {
    displayError: true,
  });
}

function getResult_DCS(): Promise<IResult[]> {
  return fetcher({url: path.result_DCS, method: 'get'}, dispatch, {
    displayError: true,
  });
}

export default {
  getResult_DD,
  getResult_DCS
};
