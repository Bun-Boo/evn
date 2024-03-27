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
  login: '/api/jwt/Login',
  infoStudent: '/api/SP_MC_MaSinhVien/Load_Web_App_Para',
};

const dispatch = store.dispatch;

function login(body: ILoginBody): Promise<IAccountInfo> {
  return fetcher({url: path.login, method: 'post', data: body}, dispatch, {
    displayError: true,
  });
}

function getInfoStudent(body: IInfoStudent): Promise<IInfoStudent> {
  return fetcher(
    {url: path.infoStudent, method: 'post', data: body},
    dispatch,
    {
      displayError: true,
    },
  );
}

function isLogin(): boolean {
  return !!getAuthToken();
}

function getAuthToken(): string | undefined {
  const {user} = store.getState();
  return user?.token;
}

export default {
  login,
  isLogin,
  getInfoStudent,
};
