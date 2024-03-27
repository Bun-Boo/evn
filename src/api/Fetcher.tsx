import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';
import _ from 'lodash';
import Config from '../config';
import store, {persistor} from '../redux/store';
import {showError} from '../utils/notification';
import {isIOS} from '../utils/device';
import RequiredAuthenticationAction from '../../RequiredAuthenticationAction';
import {AnyAction, Dispatch} from 'redux';

export interface IDataError {
  status: string;
  message: string;
  errors?: {
    username?: string[];
    email?: string[];
    education_id?: string[];
    korean_level_id: string[];
    skill_group_id: string[];
    skill_id: string[];
    work_experience_id: string[];
    salary_id: string[];
    city: string[];
    district: string[];
    sex: string[];
    work_place: string[];
    address: string[];
    firstName: string[];
  };
  code?: string;
}

export interface IMetadata {
  time?: string;
  totalPages: number;
  totalItems: number;
  currentPage: number;
}

export interface IDataWithMeta<T> {
  meta: IMetadata;
  data: T;
}

interface IResponseDTO {
  success?: boolean;
  errorCode?: string;
  message?: string;
  meta?: IMetadata;
  data?: any;
}

interface IFetcherOptions {
  token?: string;
  withToken?: boolean;
  withMetadata?: boolean;
  displayError?: boolean;
  FormDataType?: boolean;
}

function displayError(dataError: IDataError): void {
  try {
    let errorMessage;
    if (dataError) {
      if (dataError.message) {
        errorMessage = dataError.message;
      } else if (dataError.code) {
        errorMessage = dataError.code;
      }
    } else {
      errorMessage = 'Somethings Wrong';
    }
    showError(errorMessage ?? 'Somethings Wrong');
  } catch (e) {
    showError(_.toString(e));
  }
}

export function fetcher<T>(
  config: AxiosRequestConfig,
  dispatch?: Dispatch<AnyAction>,
  options: IFetcherOptions = {},
): Promise<T> {
  const defaultOptions: IFetcherOptions = {
    withToken: Config.APP_CONFIG.USE_TOKEN,
    withMetadata: Config.APP_CONFIG.WITH_METADATA,
    displayError: Config.APP_CONFIG.DISPLAY_ERROR,
    ...options,
  };

  const apiClient = axios.create({
    headers: {
      'Content-Type': Config.HEADER_CONTENT_TYPE.APPLICATION_JSON,
      'os-type': isIOS() ? 'ios' : 'android',
      'app-version': Config.VERSION_HEADER_FETCHER.DEV,
      // 'Access-Control-Allow-Origin': '*',
      'Origin':'https://uneti.edu.vn',
    },
    // mode: 'no-cors',
    baseURL: Config.APP_CONFIG.API_BASE_URL,
    timeout: Config.APP_CONFIG.TIMEOUT,
    // Origin: Config.APP_CONFIG.HOST,
  });
  const state = store.getState();

  // Access Token
  if (defaultOptions.token) {
    apiClient.defaults.headers.common.Authorization = `Bearer ${defaultOptions.token}`;
  } else {
    if (defaultOptions.withToken) {
      const token = state.user?.token;
      if (token) {
        apiClient.defaults.headers.common.Authorization = `Bearer ${token}`;
      }
    }
  }
  //<AxiosResponse<IResponseDTO>>
  return new Promise<never>((resolve, reject) => {
    apiClient
      .request(config)
      .then(async response => {
        if (response.data) {
          if (response.data === undefined) {
            const dataEmpty: IDataError = {
              status: 'ERROR???',
              message: 'Data Empty',
            };
            if (defaultOptions.displayError) {
              displayError(dataEmpty);
            }
            reject(dataEmpty);
            return;
          }
          if (
            response?.data?.error?.errorCode ===
            Config.APP_CONFIG.ERROR_CODE_AUTHEN_TOKEN
          ) {
            dispatch?.(RequiredAuthenticationAction.openModalLogin());
          }
          // @ts-ignore
          resolve(response.data);
          return;
        }
        const dataError: IDataError = {
          status: response.data,
          message: response.data,
        };

        if (defaultOptions.displayError) {
          displayError(dataError);
        }
        console.log('dataError', dataError);
        reject(dataError);
      })
      .catch((error: Error | AxiosError) => {
        if (axios.isAxiosError(error)) {
          // Axios error
          const lostErrorVi =
            'Mất kết nối server. Vui lòng kiểm tra đường truyền internet của bạn.';

          const somethingsWrong: IDataError = {
            status: 'ERROR???',
            message: lostErrorVi,
            code: '404',
          };
          // @ts-ignore
          const dataError: IDataError =
            error?.response?.data ?? somethingsWrong;

          if (dataError?.message === 'AUTH3001.NotAuthenticated') {
            persistor.purge();
          } else {
            if (defaultOptions.displayError) {
              displayError(dataError);
            }
          }
        } else {
          // Native error
          showError(_.toString(error));
        }
        return reject(error);
      });
  });
}
