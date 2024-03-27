import React, {ReactElement, useEffect, useState} from 'react';
import {
  StyleSheet,
  Animated,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {getDeviceHeight, getScreenWidth} from 'src/utils/layout/layout';
import {PinchGestureHandler} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import {isIOS} from 'src/utils/device';
import Icon from 'src/utils/Icon';

// const {OVERLAY_2} = Config.COLOR_CONFIG;

interface ModalPreviewImageProps {
  uri?: string;
  isPreview: boolean;
  setIsPreview: () => void;
}

function ModalPreviewImage(props: ModalPreviewImageProps): ReactElement {
  const {uri, isPreview, setIsPreview} = props;
  const scale = new Animated.Value(1);
  const [sizeImage, setSizeImage] = useState({
    height: 500,
    width: 500,
  });

  const onPinchEvent = Animated.event([{nativeEvent: {scale: scale}}], {
    useNativeDriver: true,
  });

  useEffect(() => {
    if (isPreview) {
      Image.getSize(uri as any, (width, height) => {
        setSizeImage({
          width: width,
          height: height,
        });
      });
    }
  }, [isPreview, uri]);
  return (
    <Modal
      // style={style.modal}
      isVisible={isPreview}
      backdropTransitionOutTiming={0}
      backdropTransitionInTiming={0}
      backdropOpacity={0.7}
      animationOut="fadeOut"
      animationIn="fadeIn"
      onBackdropPress={(): void => {
        if (isPreview) {
          setIsPreview();
        }
      }}>
      <View
        style={
          isPreview
            ? {
                ...style.root,
                // height:
                //   sizeImage.height > getDeviceHeight() - getDeviceHeight() * 0.3
                //     ? getDeviceHeight() - getDeviceHeight() * 0.3
                //     : sizeImage.height,
                // width:
                //   sizeImage.width > getScreenWidth() - getScreenWidth() * 0.1
                //     ? getScreenWidth() - getScreenWidth() * 0.1
                //     : sizeImage.width,
                // backgroundColor: "#E5E2E2",
              }
            : style.none
        }>
        <TouchableOpacity onPress={setIsPreview} style={style.iconClose}>
          <Icon icon="Close" size={24} color="#F4F5F6" />
        </TouchableOpacity>

        <PinchGestureHandler onGestureEvent={onPinchEvent}>
          <Animated.Image
            source={{
              uri: uri,
            }}
            style={[
              {
                ...style.image,
                height:
                  sizeImage.height > getDeviceHeight() - getDeviceHeight() * 0.3
                    ? getDeviceHeight() - getDeviceHeight() * 0.3
                    : sizeImage.height,
                width:
                  sizeImage.width > getScreenWidth() - getScreenWidth() * 0.1
                    ? getScreenWidth() - getScreenWidth() * 0.1
                    : sizeImage.width,
              },
              {
                transform: [{scale: scale}],
              },
            ]}
            resizeMode={isIOS() ? 'cover' : 'contain'}
          />
        </PinchGestureHandler>
      </View>
    </Modal>
  );
}

const style = StyleSheet.create({
  image: {},
  // iconClose: {
  //   position: "absolute",
  //   zIndex: 10,
  //   right: 10,
  //   top: 225,
  // },
  root: {
    // flex: 1,
    // position: "absolute",
    // top: 0,
    // left: 0,
    alignItems: 'center',
    // backgroundColor: OVERLAY_2,
  },
  none: {
    display: 'none',
  },
  iconClose: {
    position: 'absolute',
    zIndex: 10,
    top: getDeviceHeight() * 0.01,
    right: getScreenWidth() * 0.01,
    backgroundColor: '#B5B5B5',
    width: Math.min(getScreenWidth(), getDeviceHeight()) * 0.1,
    height: Math.min(getScreenWidth(), getDeviceHeight()) * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: (Math.min(getScreenWidth(), getDeviceHeight()) * 0.1) / 2,
  },
});

export default ModalPreviewImage;
