import React, {ReactElement, memo, useEffect} from 'react';
import {
  Alert,
  Dimensions,
  Image,
  Modal,
  PermissionsAndroid,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../Global/HeaderPage';
import HomeScreen, {data1, data2} from 'src/screen/HomeScreen';
import Icon from 'src/utils/Icon';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {request, PERMISSIONS} from 'react-native-permissions';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ModalGlobal from '../Global/ModalGlobal';
import {useNavigation} from '@react-navigation/native';
const PERMISSION_AUTHORIZED = 'authorized';

function Home(): ReactElement {
  const [open, setOpen] = React.useState(false);
  const insets = useSafeAreaInsets();

  const [data, setData] = React.useState();

  const allData = data1.concat(data2);

  const postCard = allData.filter(item => item.id == data);
  useEffect(() => {
    if (Platform.OS === 'ios') {
      Promise.all([request(PERMISSIONS.IOS.CAMERA)]).then(([cameraStatus]) => {
        console.log(cameraStatus);
      });
    } else if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
        title: 'Ứng dụng cần quyền truy cập vào máy ảnh',
        message: 'Ứng dụng cần quyền truy cập vào máy ảnh để quét mã QR',
      }).then(granted => {
        const isAuthorized = granted === PermissionsAndroid.RESULTS.GRANTED;
        console.log(isAuthorized);
      });
    } else {
    }
  }, []);

  const [toggleModal, setToggleModal] = React.useState(true);

  const navigation = useNavigation();

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
          setOpen(false);
        }}>
        <View style={{flex: 1}}>
          <QRCodeScanner
            onRead={e => {
              setData(e.data);
              setOpen(false);

              setToggleModal(true);
            }}
            // flashMode={RNCamera.Constants.FlashMode.torch}
            topContent={
              <Text
                style={[
                  styles.centerText,
                  {
                    paddingTop: insets.top,
                  },
                ]}>
                Đặt mã Qr vào khung hình
              </Text>
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
      {postCard.length > 0 && (
        <ModalGlobal
          cancelText="Đóng"
          confirmText="Nghe ngay"
          onConfirm={() => {
            navigation.navigate('DetailPodCast', {item: postCard[0]});
          }}
          modalItem={
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={{uri: postCard[0].image}}
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: 75,
                }}
              />
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  padding: 10,
                }}
                numberOfLines={2}>
                {postCard[0].title}
              </Text>
              <Text
                style={{
                  padding: 10,
                  fontSize: 16,
                }}
                numberOfLines={10}>
                {postCard[0].subTitle}
              </Text>
            </View>
          }
          modalVisible={toggleModal}
          isBottom={false}
          toggleModal={() => {
            setToggleModal(false);
          }}
        />
      )}
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
