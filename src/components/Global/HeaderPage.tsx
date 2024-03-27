import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {ReactElement, useEffect} from 'react';
// import {useNavigation, useTheme} from '@react-navigation/native';
// import {Theme} from 'src/types/common';
// import {style} from '../styles/News/componentStyle/HeaderLogo';
import FastImage from 'react-native-fast-image';
// import {useQuery} from 'react-query';
// import {useDispatch, useSelector} from 'react-redux';
// import {IRootState} from '../redux/reducers/RootReducer';
// import ApiNotification, {
//   IListNotification,
// } from '../api/Notifications/ApiNotification';
// import NotificationAction from '../redux/actions/NotificationAction';
// import moment from 'moment';
// import {style} from 'src/styles/HeaderLogo';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Config from 'src/config';
import {isTablet} from 'react-native-device-info';
const {TRENDING_ICON, PRIMARY_MK_BLUE} = Config.COLOR_CONFIG;
interface HeaderPageProps {
  icon1?: any;
  icon2?: any;
  onPressIcon1?: any;
  onPressIcon2?: any;
  logo?: boolean;
  children?: ReactElement;
}
function HeaderPage({
  icon1 = null,
  icon2 = null,
  onPressIcon1,
  onPressIcon2,
  logo,
  children,
}: HeaderPageProps): ReactElement {
  const insets = useSafeAreaInsets();

  return (
    <ImageBackground
      source={require('src/assets/images/background-header-back.png')}
      resizeMode="cover"
      style={[style.root1, {paddingTop: insets.top}]}>
      {logo ? (
        <>
          <FastImage
            style={style.imageAvatar}
            source={require('src/assets/images/meme.jpg')}
            resizeMode={FastImage.resizeMode.contain}
          />
          <Text
            style={{
              marginLeft: 10,
              fontWeight: 'bold',
              fontSize: 14,
              color: 'white',
            }}>
            Bro chill không ?
          </Text>
        </>
      ) : (
        <View style={{paddingHorizontal: 0}}>{children}</View>
      )}
      <View style={style.wrapperIcon}>
        {icon1 ? (
          <TouchableOpacity
            style={{padding: 5, marginRight: 10}}
            onPress={(): void => onPressIcon1()}>
            {/* {!isReadAll && (
              <View
                style={{
                  position: 'absolute',
                  top: 2,
                  right: 2,
                  padding: 4,
                  borderRadius: 50,
                  backgroundColor: '#Ec5353',
                }}
              />
            )} */}

            {icon1}
          </TouchableOpacity>
        ) : null}
        {icon2 ? (
          <TouchableOpacity
            style={{padding: 5}}
            onPress={(): void => onPressIcon2()}>
            {icon2}
          </TouchableOpacity>
        ) : null}
      </View>
    </ImageBackground>
  );
}

export default HeaderPage;

const style = StyleSheet.create({
  iconBell: {
    height: 20,
    width: 20,
    marginLeft: 7,
  },
  iconUser: {
    height: 25,
    width: 25,
    marginLeft: 7,
  },
  iconLanguage: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '500',
    color: TRENDING_ICON,
    paddingTop: 2,
    textTransform: 'uppercase',
  },
  headerButton: {
    marginLeft: 15,
    paddingTop: 5,
    paddingBottom: 5,
  },
  textHeader: {
    color: '#3D5278',
    fontSize: 20,
    lineHeight: 24,
  },
  headerButtonNotify: {
    paddingTop: 5,
    paddingBottom: 5,
    marginLeft: 10,
  },
  action: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: "red",
    // marginTop: 20,
  },
  logo: {
    resizeMode: 'contain',
    width: isTablet() ? 115 : 92,
  },
  root: {
    alignItems: 'center',
    flexDirection: 'row',
    height: isTablet() ? 80 : 42,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    width: '100%',
  },
  root1: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: '#A32E8C',
    paddingVertical: 5,
    borderBottomWidth: 0.5,
    borderColor: '#E1E1E1',
  },
  wrapperIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchJobs: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: PRIMARY_MK_BLUE,
    borderRadius: 12,
    width: 155,
    paddingHorizontal: 10,
    height: 24,
    marginRight: 5,
  },
  titleSearchJobs: {
    color: PRIMARY_MK_BLUE,
    fontSize: 12.5,
  },

  imageAvatar: {
    height: 40,
    width: 40,
    borderRadius: 3,
  },
});
