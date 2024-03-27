import {Platform, Linking} from 'react-native';

export function CallNumber(phone: any): void {
  let phoneNumber = '';
  if (Platform.OS === 'android') {
    phoneNumber = `tel:${phone.replace(/ /g, '')}`;
  } else {
    phoneNumber = `telprompt:${phone.replace(/ /g, '')}`;
  }
  Linking.openURL(phoneNumber).catch(err => console.log(err));

  // Linking.canOpenURL(phoneNumber)
  //   .then((supported) => {
  //     if (!supported) {
  //       Alert.alert("Số điện thoại không đúng");
  //     } else {
  //       return Linking.openURL(phoneNumber);
  //     }
  //   })
  //   .catch((err) => console.log(err));
}
