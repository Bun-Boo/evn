import React, {ReactElement} from 'react';
import Modal from 'react-native-modal';
import {StyleSheet, ViewStyle, StyleProp} from 'react-native';
import FooterModal from './FooterModal';
import config from 'src/config';
import AppView from './AppView';

interface ModalContainerProps {
  modalVisible: boolean;
  modalItem?: ReactElement;
  toggleModal: () => void;
  isBottom?: boolean;
  singleBtnConfirm?: boolean;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  disable?: boolean;
  style?: StyleProp<ViewStyle>;
}
const {WHITE, NEUTRALS_5} = config.COLOR_CONFIG;

function ModalGlobal({
  modalItem,
  modalVisible,
  toggleModal,
  isBottom = true,
  singleBtnConfirm = false,
  cancelText,
  confirmText,
  onConfirm,
  disable = false,
  style,
}: ModalContainerProps): ReactElement {
  return (
    <Modal
      style={isBottom ? styles.modalBottom : styles.modalCenter}
      isVisible={modalVisible}
      backdropOpacity={0.3}
      backdropTransitionOutTiming={0}
      backdropTransitionInTiming={0}
      onBackdropPress={toggleModal}
      useNativeDriverForBackdrop
      // onSwipeComplete={(): void => {
      //   toggleModal();
      // }}
      // swipeDirection={["down"]}
      avoidKeyboard>
      <AppView
        style={isBottom ? styles.modalContent : styles.modalContentCenter}>
        {isBottom && <AppView style={styles.scrollDown} />}
        {modalItem}
        {!isBottom && (
          <FooterModal
            singleBtnConfirm={singleBtnConfirm}
            cancelText={cancelText}
            confirmText={confirmText}
            toggleModal={toggleModal}
            onConfirm={onConfirm}
            disable={disable}
          />
        )}
      </AppView>
    </Modal>
  );
}

export default ModalGlobal;

export const styles = StyleSheet.create({
  modalBottom: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalCenter: {
    justifyContent: 'center',
    margin: 0,
    paddingHorizontal: 10,
  },
  modalContent: {
    backgroundColor: WHITE,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
  modalContentCenter: {
    backgroundColor: WHITE,
    borderRadius: 16,
    padding: 10,
  },
  scrollDown: {
    width: 56,
    height: 4,
    borderRadius: 10,
    backgroundColor: '#168FBF',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
  },
});
