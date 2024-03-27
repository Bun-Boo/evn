import moment from 'moment-timezone';

export function ConvertTime(time: any): string {
  return time
    ? moment(time, 'YYYY-MM-DD hh:mm:ss')
        .tz('Asia/Ho_Chi_Minh')
        .format('DD-MM-YYYY HH:mm')
    : '';
}
export function ConvertDayTime(time: any): string {
  return time
    ? moment(time, 'YYYY-MM-DD hh:mm:ss')
        .tz('Asia/Ho_Chi_Minh')
        .format('DD-MM-YYYY')
    : '';
}

export function ConvertTimeDMY(time: any): string {
  return time
    ? moment(time, 'YYYY-MM-DD hh:mm:ss')
        .tz('Asia/Ho_Chi_Minh')
        .format('DD-MM-YYYY')
    : '';
}

export function convertToISODateString(inputDateString: string) {
  // Sử dụng moment để chuyển đổi từ "DD/MM/YYYY" sang ISO 8601
  const isoDateString = moment(inputDateString, 'DD/MM/YYYY').format(
    'YYYY-MM-DDTHH:mm:ss.SSS[Z]',
  );

  return isoDateString;
}
