import {getScreenWidth} from '../utils/layout/layout';

export const draggingThreshold = getScreenWidth() * 0.01;
export const heightHeaderBar = 45;

const ENV_KEY = {
  PRODUCTION: 'PRODUCTION',
  STAGING: 'STAGING',
  // for code-push
  BUILD_TESTING: 'BUILD_TESTING',
  DEVELOP: 'DEVELOP',
};

const APP_CONFIG = {
  ENV_KEY: 'DEVELOP',

  HOST: 'https://unetiv2.edu.vn',
  API_BASE_URL: 'https://apiv2.uneti.edu.vn',
  // HOST: 'http://25.11.199.238:3030',
  // API_BASE_URL: 'http://25.11.199.238:3030',

  TIMEOUT: 300000,
  RETRY: false,
  DISPLAY_ERROR: true,
  USE_TOKEN: true,
  USE_TOKEN_LIVE: false,
  WITH_METADATA: false,
  ERROR_CODE_AUTHEN_TOKEN: 'JWT000102',
};

// NAME
const DB_NAME = 'db_default';
const STORE_NAME = 'state';

// VERSION
const VERSION_HEADER_FETCHER = {
  DEV: '2.0.0',
  PRODUCT: '2.0.0',
};

// HEADER_CONTENT_TYPE
const HEADER_CONTENT_TYPE = {
  APPLICATION_JSON: 'application/json',
  MULTIPART_FORMDATA: 'multipart/form-data',
};

// COLOR
const COLOR_CONFIG = {
  APPLE_ICON: '#23262F',
  FACEBOOK_ICON: '#256BB3',
  GOOGLE_ICON: '#E05347',
  LINKEDIN_ICON: '#0274B3',
  TWITTER_ICON: '#1CA1F1',
  TRENDING_ICON: '#E25141',
  LATEST_ICON: '#F25962',

  CAROUSEL_GRADIENT_BOTTOM: '#1C78FF',
  CAROUSEL_GRADIENT_TOP: '#63E59A',
  SWITCH_TRACK_INACTIVE: '#767577',
  SWITCH_TRACK_ACTIVE: '#81B0FF',
  SWITCH_THUMB_ACTIVE: '#f5DD4B',
  SWITCH_THUMB_INACTIVE: '#F4F3F4',
  SHADOW: '#AFAFAF',
  BORDER_SELECTED_VIEW_WEB: '#F4F4F4',
  PICKER_SELECT: '#777E91',
  CARD_OVER_LAY: 'black',
  PROGRESS_BAR: '#F9A825',
  PROGRESS_DONE: '#3FA9F5',
  PROGRESS_BAR_NONE: '#F4F4F4',

  // Color Table v1.2
  WHITE: '#FFF',
  BLACK: '#000',
  RED: 'red',
  BLUE: 'blue',

  LIGHT_PRIMARY_1: '#E25141',
  LIGHT_SECONDARY_1: '#0053CC',
  LIGHT_SECONDARY_2: '#00C076',
  LIGHT_SECONDARY_3: '#E05347',
  LIGHT_SECONDARY_4: '#E8A711',
  LIGHT_SECONDARY_5: '#9757D7',
  LIGHT_SECONDARY_6: '#F57040',
  LIGHT_SECONDARY_7: '#70C270',
  LIGHT_SECONDARY_8: '#1A70ED',

  DARK_PRIMARY_1: '#E36B77',
  DARK_SECONDARY_1: '#5873DE',
  DARK_SECONDARY_2: '#6CAC9C',
  DARK_SECONDARY_3: '#FA9384',
  DARK_SECONDARY_4: '#8B9BF3',

  NEUTRALS_2: '#23262F',
  NEUTRALS_3: '#353945',
  NEUTRALS_4: '#777E91',
  NEUTRALS_5: '#B1B5C4',
  NEUTRALS_6: '#E6E8EC',
  NEUTRALS_7: '#F4F5F6',
  NEUTRALS_8: '#FCFCFD',
  NEUTRALS_9: '#FCFCFC',
  NEUTRALS_10: '#B1B5C3',
  NEUTRALS_11: '#D9D9D9',
  NEUTRALS_12: '#F1F2F3',

  PRIMARY_MK_ORANGE: '#485CC7',
  PRIMARY_MK_BLUE: '#485CC7',
  GRAY_MK: '#75787B',
  BACKGROUND_TEXTINPUT_MK: '#F2F2F2',
  BLACK_MK: '#000000',
  BORDER_GRAY: '#F0F0F0',
  BORDER_GRAY_2: '#B1B3B3',
  NORMAL_TABVIEW: '#9095A4',
  TITLE_GRAY: '#555555',

  NEUTRALS_1: '#777E90',
  PRIMARY_BACKGROUND_BLUE: '#F0F5FF',

  GRAY_2: '#FAFAFA',
  GRAY_3: '#C3C8DD',
  GRAY_4: '#ADB3BC',
  GRAY_5: '#CDCDD1',

  OVERLAY: 'rgba(0, 0, 0, 0.3)',
  OVERLAY_2: 'rgba(0, 0, 0, 0.8)',

  BACKGROUND_TEXT_GRAY: '#F5F5F5',
  BACKGROUND_GEEK_BLUE: '#D6E4FF',
  BACKGROUND_GREEN: '#D9F7BE',
  BACKGROUND_RED: '#FFCCC7',
  BACKGORUND_BLUE: '#BAE7FF',

  COLOR_GREEN: '#52C41A',
  COLOR_RED: '#FF4D4F',
  COLOR_BLUE: '#1890FF',
  COLOR_LIGHT_GRAY: '#97999B',

  RED_2: '#F5222D',
  RED_BUTTON: '#EC5353',
  GREEN_2: '#CDEEC7',
  GREEN_3: '#4BA64B',

  ORANGE_1: '#FF8F77',
  ORANGE_2: '#F1C644',

  RED_1: '#F24E1E',

  VIOLET_CALENDAR: '#F8F7FA',
  DATE_TITLE_COLOR: '#0FBE7B',
  BLACK_3: '#232323',
};

// COGNITO
const COGNITO_CONFIG = {
  userPoolId: 'ap-southeast-1_rzoUW5AzX',
  clientId: '268f4vig0e2tdvh61hcnq9cqib',
  region: 'ap-southeast-1',
  identityPoolId: 'ap-southeast-1:4ad49192-1ed8-47ba-9b88-8e1e71365fff',
};

const THIRD_PARTY_LOGIN = {
  GOOGLE:
    '910630295245-6327tto8mbb7v6b6bfmb04sejq00nivn.apps.googleusercontent.com',
  FACEBOOK_APP_ID: '561068505388788',
  FACEBOOK_CLIENT_TOKEN: '0d9b05ddc112aba132c6caf57b093faa',
  FACEBOOK_APP_NAME: 'Anmoga',
  TWITTER_CONSUMER_KEY: 'e77p4GmAHrQH93ZrD2nQdJtNZ',
  TWITTER_CONSUMER_SECRET: 'tzUrUocxzOyCFmieeqdq8jelaFu78RaMVhbvpl3DJUG8RrDNJz',
};

const GGMAP_API_CONFIG = {
  apiKeyLoad: 'qHwDaQyb6O6KDX5qBq7hFjVMiV7VflcLQ7UDAV8k',
  apiKey: 'Xfveiq5VjXa1lHzGF04pDPNjJKtUjcfdo9U8phlG',

  // GOOGLE_MAPS_APIKEY: "AIzaSyBb3ohrL9o2zPGqTDsD-39KZ_OEG8YAaKg",

  GOOGLE_MAPS_APIKEY: 'AIzaSyDhVQ3doA6TYXBF4F78LWLV2_83isLGsUQ',
};

// NETWORK
const NETWORK_CONFIG = {
  // HOST: 'https://api.uneti.edu.vn',
  // API_BASE_URL: 'https://api.uneti.edu.vn',

  HOST: 'http://25.11.199.238:3030',
  API_BASE_URL: 'http://25.11.199.238:3030',

  TIMEOUT: 300000,
  RETRY: false,
  DISPLAY_ERROR: true,
  USE_TOKEN: true,
  USE_TOKEN_LIVE: false,
  WITH_METADATA: false,
  ERROR_CODE_AUTHEN_TOKEN: 'JWT000102',
};

export default {
  APP_CONFIG,
  DB_NAME,
  STORE_NAME,
  ENV_KEY,
  COLOR_CONFIG,
  HEADER_CONTENT_TYPE,
  VERSION_HEADER_FETCHER,
  COGNITO_CONFIG,
  draggingThreshold,
  THIRD_PARTY_LOGIN,
  GGMAP_API_CONFIG,
  NETWORK_CONFIG,
};
