import {StyleSheet} from 'react-native';
import Config from 'src/config';
import {isTablet} from 'react-native-device-info';

const {TRENDING_ICON, PRIMARY_MK_BLUE} = Config.COLOR_CONFIG;

export const style = StyleSheet.create({
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
    justifyContent: 'space-between',
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
