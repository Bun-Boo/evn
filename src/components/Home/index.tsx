import React, {ReactElement, memo} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../Global/HeaderPage';
import HomeScreen from 'src/screen/HomeScreen';
import Icon from 'src/utils/Icon';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

function Home(): ReactElement {
  const [open, setOpen] = React.useState(false);
  return (
    <View style={{flex: 1}}>
      <Header
        logo
        children={
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 14,
              textAlign: 'center',
            }}>
            Bro chill không ?
          </Text>
        }
        icon1={
          <Text
            style={{
              color: 'white',
              fontWeight: '700',
              textAlign: 'right',
            }}>
            Quét mã Qr
          </Text>
        }
        onPressIcon1={(): void => {
          setOpen(true);
        }}
      />
      <HomeScreen />

      <Modal
        animationType="slide"
        transparent={false}
        visible={open}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setOpen(false);
        }}>
        <View style={{flex: 1}}>
          <QRCodeScanner
            onRead={() => {}}
            flashMode={RNCamera.Constants.FlashMode.torch}
            topContent={
              <Text style={styles.centerText}>Đặt mã Qr vào khung hình</Text>
            }
            bottomContent={
              <TouchableOpacity
                style={styles.buttonTouchable}
                onPress={() => setOpen(false)}>
                <Text style={styles.buttonText}>Đóng</Text>
              </TouchableOpacity>
            }
          />
        </View>
      </Modal>
    </View>
  );
}
export default memo(Home);

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'red',
    fontWeight: 'bold',
  },
  buttonTouchable: {
    padding: 16,
  },
});
