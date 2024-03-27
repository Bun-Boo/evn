export function ConvertPhoneNumber(phoneNumber: string | undefined): string {
  return phoneNumber
    ? phoneNumber.replace(phoneNumber.slice(0, 7), 'xxxxxxx')
    : '';
}
