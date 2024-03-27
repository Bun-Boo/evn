/* eslint-disable react-native/no-inline-styles */
import React, {ReactElement, useEffect, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import Icon from '../../utils/Icon';
import FastImage from 'react-native-fast-image';
import ImagePicker from 'react-native-image-crop-picker';
import TextGlobalBold from '../../styles/GlobalStyle/TextGlobalBold';
import TextGlobalStyle from '../../styles/GlobalStyle/TextGlobal';
import {isIOS} from '../../utils/device';
import Config from '../../config';
import ImageResizer from 'react-native-image-resizer';
import ModalGlobal from './ModalGlobal';
import ModalPreviewImage from './ModalPreviewImage';

interface ItemUploadImageProps {
  item: any;
  select?: string;
  queryKey?: string;
  setSelectedImages: any;
  deleteImage?: boolean;
}

function ItemUploadImage(props: ItemUploadImageProps): ReactElement {
  const {item, select, setSelectedImages, deleteImage} = props;
  const defaultImage = require('src/assets/images/defaultUploadImage.png');
  const [imageSelect, setImageSelect] = useState<any>();
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingDeleteImage, setIsLoadingDeleteImage] = useState(false);
  const close = (): void => setVisible(false);
  const open = (): void => {
    if (!imageSelect) {
      setVisible(true);
    } else {
      setIsPreview(true);
    }
  };
  useEffect(() => {
    setImageSelect(undefined);
  }, [deleteImage]);
  const [isPreview, setIsPreview] = useState(false);

  const closePreview = (): void => {
    setIsPreview(false);
  };

  const openCamera = (): void => {
    ImagePicker.openCamera({
      quality: 0.8,
      compressImageMaxWidth: 1024,
      compressImageMaxHeight: 1024,
    })
      .then(async image => {
        setIsLoading(true);
        const compressImage = async (image: any): Promise<any> => {
          return new Promise(async (resolve, reject) => {
            try {
              if (image.size <= 300 * 1024) {
                // Image size is already within the limit, no need to compress
                resolve(image);
              } else {
                const croppedImage = await ImageResizer.createResizedImage(
                  image.path,
                  800,
                  800,
                  'JPEG',
                  80,
                  0,
                  undefined,
                  false,
                  {
                    mode: 'contain',
                    onlyScaleDown: true,
                  },
                );

                const convertResult = {
                  name: `image${Date.now()}`,
                  mime: 'image/jpeg',
                  path: croppedImage.uri,
                };
                resolve(isIOS() ? croppedImage : convertResult);
              }
            } catch (error) {
              reject(error);
            }
          });
        };

        const compressedImage = await compressImage(image);
        setImageSelect(compressedImage);
        setSelectedImages((prevSelectedImages: any) => [
          ...prevSelectedImages,
          compressedImage,
        ]);

        setIsLoading(false);
      })
      .finally(() => {
        close();
        setIsLoading(false);
      });
  };

  const chooseImage = (): void => {
    ImagePicker.openPicker({
      mediaType: 'photo',
      quality: 0.8,
      compressImageMaxWidth: 1024,
      compressImageMaxHeight: 1024,
      multiple: false,
    })
      .then(async image => {
        setIsLoading(true);
        const compressImage = async (image: any): Promise<any> => {
          return new Promise(async (resolve, reject) => {
            try {
              if (image.size <= 300 * 1024) {
                // Image size is already within the limit, no need to compress
                resolve(image);
              } else {
                const croppedImage = await ImageResizer.createResizedImage(
                  image.path,
                  800,
                  800,
                  'JPEG',
                  80,
                  0,
                  undefined,
                  false,
                  {
                    mode: 'contain',
                    onlyScaleDown: true,
                  },
                );

                const convertResult = {
                  name: `image${Date.now()}`,
                  mime: 'image/jpeg',
                  path: croppedImage.uri,
                };
                resolve(isIOS() ? croppedImage : convertResult);
              }
            } catch (error) {
              reject(error);
            }
          });
        };

        const compressedImage = await compressImage(image);
        setImageSelect(compressedImage);
        setSelectedImages((prevSelectedImages: any) => [
          ...prevSelectedImages,
          compressedImage,
        ]);
        setIsLoading(false);
      })
      .finally(() => {
        close();
        setIsLoading(false);
      });
  };
  const handleDeleteImage = (): void => {
    setIsLoadingDeleteImage(true);
    setImageSelect(null);
    // Xóa hình ảnh khỏi danh sách selectedImages
    setSelectedImages((prevSelectedImages: any[]) =>
      prevSelectedImages.filter((img: any) => img !== imageSelect),
    );
    setIsLoadingDeleteImage(false);
  };

  return (
    <View>
      <TouchableOpacity
        disabled={false}
        activeOpacity={1}
        onPress={(): void => {
          if (select === 'upload') {
            open();
          }
        }}
        key={item.id}
        style={styles.imageItemWrapper}>
        {isLoading ? (
          <View
            style={{
              width: 95,
              height: 95,
              backgroundColor: Config.COLOR_CONFIG.WHITE,
              borderWidth: 1,
              borderColor: '#ccc',
              borderStyle: 'dotted',
            }}>
            <ActivityIndicator
              color={Config.COLOR_CONFIG.LIGHT_PRIMARY_1}
              size={30}
              style={{marginTop: 30}}
            />
          </View>
        ) : (
          <FastImage
            style={styles.imageProduct}
            source={
              imageSelect
                ? {
                    uri:
                      imageSelect?.uri ||
                      imageSelect?.sourceURL ||
                      imageSelect?.path,
                  }
                : defaultImage
            }
            resizeMode={FastImage.resizeMode.cover}
          />
        )}

        {isLoadingDeleteImage ? (
          <View
            style={{
              position: 'absolute',
              right: 3,
              width: 20,
              height: 20,
              top: -15,
              borderRadius: 50,
            }}>
            <ActivityIndicator color="red" size={30} style={{marginTop: 30}} />
          </View>
        ) : imageSelect ? (
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 3,
              width: 20,
              height: 20,
              top: 3,
              backgroundColor: '#EC5353',
              borderRadius: 50,
            }}
            onPress={handleDeleteImage}>
            <Icon
              icon="Close"
              size={20}
              color="white"
              style={styles.iconClose}
            />
          </TouchableOpacity>
        ) : null}
      </TouchableOpacity>
      <ModalGlobal
        modalVisible={visible}
        toggleModal={(): void => {
          close();
        }}
        modalItem={
          <View style={styles.options}>
            <View style={styles.option}>
              <TextGlobalBold style={styles.textOptionSelect}>
                Lựa chọn ảnh của bạn
              </TextGlobalBold>
            </View>
            <TouchableOpacity style={styles.option} onPress={chooseImage}>
              <TextGlobalStyle style={{fontSize: 20, color: '#3563E9'}}>
                Từ thư viện ảnh
              </TextGlobalStyle>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={openCamera}>
              <TextGlobalStyle style={{fontSize: 20, color: '#3563E9'}}>
                Máy ảnh
              </TextGlobalStyle>
            </TouchableOpacity>
          </View>
        }
      />
      <ModalPreviewImage
        isPreview={isPreview}
        setIsPreview={closePreview}
        uri={imageSelect?.uri || imageSelect?.sourceURL || imageSelect?.path}
      />
    </View>
  );
}

export default ItemUploadImage;
export const styles = StyleSheet.create({
  textOptionSelect: {
    fontSize: 22,
  },
  imageProduct: {
    height: 95,
    width: isIOS() ? 90 : 85,
    borderRadius: 3,
    resizeMode: 'contain',
  },
  imageItemWrapper: {
    marginHorizontal: 10,
    marginVertical: 8,
    backgroundColor: '#ccc',
    position: 'relative',
  },
  iconClose: {
    position: 'absolute',
    right: 0,
  },

  options: {
    backgroundColor: 'white',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    height: 200,
    paddingBottom: 10,
  },

  option: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
});
