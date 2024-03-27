import React, {memo, ReactElement} from 'react';
import Modal from 'react-native';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {StackActions, useNavigation} from '@react-navigation/native';
import Config from 'src/config';
import {isIOS} from 'src/utils/device';
import TextGlobalBold from './TextGlobalBold';
import AppText from './AppText';
import AppView from './AppView';
import ModalGlobal from './ModalGlobal';

const {NEUTRALS_3, WHITE, NEUTRALS_2} = Config.COLOR_CONFIG;

const ModalLogin = ({valid}) => {
  const navigation = useNavigation();
  console.log('valid', valid);
  return (
    <ModalGlobal
      isBottom={false}
      singleBtnConfirm
      modalVisible={valid}
      toggleModal={(): void => {
        navigation.dispatch(StackActions.replace('LoginRoute'));
      }}
      onConfirm={() => {
        navigation.dispatch(StackActions.replace('LoginRoute'));
      }}
      modalItem={
        <AppView
          backgroundColor="white"
          alignItems="center"
          padding={25}
          borderRadius={10}>
          <AppText fontSize={21} fontWeight="bold" color="red">
            Phiên đăng nhập hết hạn
          </AppText>
          <AppText
            textAlign="center"
            color="black"
            fontSize={16}
            marginTop={10}>
            Đăng nhập lại
          </AppText>
        </AppView>
      }
    />
  );
};
export default ModalLogin;
const style = StyleSheet.create({
  modalLogoutContent: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    textAlign: 'center',
    fontSize: 29,
    color: NEUTRALS_3,
    fontWeight: '700',
  },
  textConfirm: {
    marginTop: 10,
    paddingHorizontal: 20,
    marginBottom: 35,
    textAlign: 'center',
    color: NEUTRALS_2,
    fontSize: 18,
  },
  buttonLogoutSelect: {
    paddingBottom: isIOS() ? 10 : 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonText: {
    fontSize: 19,
    fontWeight: '700',
    color: 'red',
  },
});
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  activityIndicatorWrapper: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
