import React from 'react';
import {View, Modal, ActivityIndicator, StyleSheet} from 'react-native';

const ModalLoading = ({visible}) => {
  return (
    <Modal
      transparent={true}
      animationType="none"
      visible={visible}
      onRequestClose={() => {}}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator animating={visible} size="large" color="#0000ff" />
        </View>
      </View>
    </Modal>
  );
};

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

export default ModalLoading;
