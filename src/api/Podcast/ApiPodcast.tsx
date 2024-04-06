import {fetcher} from '../Fetcher';
import store from '../../redux/store';

export interface ILoginBody {
  TC_SV_MaSinhVien: string;
  TC_SV_MaSinhVien_Pass: string;
}

export interface IProfile {
  data?: {
    username?: string;
    firstName: string;
    email: string;
    address: string;
    phone: string;
    avatar_user: string;
    dateOfBirth: string;
    sex: string;
    city: {
      id: number;
      name: string;
    };
    district: {
      id: number;
      name: string;
    };
    education_id: string | number;
    korean_level_id: string | number;
    salary_id: string | number;
    skill_group_id: string | number;
    skill_id: string | number;
    work_experience_id: string | number;
    work_place: string | number;
  };
}

export enum IAccountRole {
  USER = 0,
  ADMIN = 1,
  ANONYMOUS = 2,
}

export interface IAccountInfo {
  code: number;
  message: string;
  token: string;
  refreshToken: string;
}

export interface IChangeUserPassword {
  oldPassword: string;
  newPassword: string;
}
export interface ILoginSocialBody {
  username?: any;
  email?: any;
  phone?: string | null;
}

export interface IInfoStudent {
  arrayLength?: number;
  body?: any;
  code?: number;
  message?: string;
  rowsAfected?: any;
  TC_SV_MaSinhVien?: string;
}

const path = {
  list: 'list-podcast',
  podcasts: 'podcasts',
};

const dispatch = store.dispatch;

function getListPodcast(): Promise<any> {
  return fetcher({url: path.list, method: 'get'}, dispatch, {
    displayError: true,
  });
}
function getPodcasts(): Promise<any> {
  return fetcher({url: path.podcasts, method: 'get'}, dispatch, {
    displayError: true,
  });
}

export default {
  getListPodcast,
  getPodcasts,
};
