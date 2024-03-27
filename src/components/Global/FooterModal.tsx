import React, {ReactElement} from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import TextGlobalBold from './TextGlobalBold';

interface IFooterModal {
  confirmText: string | undefined;
  cancelText: string | undefined;
  toggleModal: () => void;
  onConfirm: (() => void) | undefined;
  disable: boolean | undefined;
  singleBtnConfirm?: boolean;
}

function FooterModal({
  cancelText = 'Huỷ',
  confirmText = 'Đồng ý',
  onConfirm,
  toggleModal,
  disable,
  singleBtnConfirm,
}: IFooterModal): ReactElement {
  return (
    <View
      style={{
        ...styles.row,
        justifyContent: 'space-around',
        padding: 10,
      }}>
      {!singleBtnConfirm ? (
        <TouchableOpacity
          style={{
            ...styles.btnCustom,
            backgroundColor: 'white',
            borderColor: '#ccc',
            borderWidth: 1,
          }}
          onPress={toggleModal}
          disabled={disable}>
          <TextGlobalBold style={{color: '#EC5353', fontSize: 18}}>
            {cancelText}
          </TextGlobalBold>
        </TouchableOpacity>
      ) : null}
      <TouchableOpacity
        style={styles.btnCustom}
        onPress={(): void => {
          onConfirm?.();
          toggleModal();
        }}
        disabled={disable}>
        <TextGlobalBold style={{color: 'white', fontSize: 18}}>
          {confirmText}
        </TextGlobalBold>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnCustom: {
    backgroundColor: '#168FBF',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
});
export default FooterModal;
