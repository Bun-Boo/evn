import {Dimensions, StyleSheet} from 'react-native';
import Config from 'src/config';
import {isIOS} from 'src/utils/device';
import {isIphoneX} from 'react-native-iphone-x-helper';

const {height} = Dimensions.get('window');

const {
  LIGHT_SECONDARY_1,
  NEUTRALS_5,
  NEUTRALS_6,
  NEUTRALS_4,
  APPLE_ICON,
  FACEBOOK_ICON,
  GOOGLE_ICON,
  LINKEDIN_ICON,
  TWITTER_ICON,
  WHITE,
} = Config.COLOR_CONFIG;

export const style = StyleSheet.create({
  row: {flexDirection: 'row', alignItems: 'center'},
  interacitem: {
    paddingHorizontal: 5,
  },
  formContainer: {
    justifyContent: 'space-between',
    height: height - 30,
  },
  LogInLink: {
    color: LIGHT_SECONDARY_1,
    fontWeight: '700',
    fontSize: 14,
  },
  titleSubmit: {
    fontWeight: '500',
    fontSize: 18,
  },
  iconBack: {
    color: NEUTRALS_4,
    fontSize: 30,
    padding: 5,
  },
  LogInTitle: {
    color: APPLE_ICON,
    fontSize: 36,
    fontWeight: '700',
    marginBottom: 15,
    marginTop: 15,
    textAlign: 'center',
  },
  buttonStyleApple: {
    backgroundColor: APPLE_ICON,
    borderRadius: 50,
    cursor: 'pointer',
    height: 48,
    width: 48,
  },
  buttonStyleFacebook: {
    backgroundColor: FACEBOOK_ICON,
    borderRadius: 50,
    height: 48,
    marginRight: 19,
    width: 48,
  },
  buttonStyleGoogle: {
    backgroundColor: GOOGLE_ICON,
    borderRadius: 50,
    height: 48,
    width: 48,
  },
  buttonStyleLinkIn: {
    backgroundColor: LINKEDIN_ICON,
    borderRadius: 50,
    height: 48,
    marginRight: 22,
    width: 48,
  },
  buttonStyleTwitter: {
    backgroundColor: TWITTER_ICON,
    borderRadius: 50,
    height: 48,
    marginRight: isIOS() ? 22 : 44,
    width: 48,
  },
  forgotPasswordWrapper: {
    flexDirection: 'column',
    marginTop: 20,
  },
  forgotPassword: {
    borderColor: NEUTRALS_6,
    color: '#E1453C',
    fontSize: 17,
  },
  buttonArea: {
    alignSelf: 'flex-end',
  },
  employerContainer: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchEmployer: {
    transform: [{scaleX: 0.8}, {scaleY: 0.8}],
    marginLeft: 10,
  },
  textEmployer: {
    color: NEUTRALS_4,
    fontSize: 16,
    fontWeight: '400',
  },
  line: {
    backgroundColor: NEUTRALS_6,
    height: 1,
    marginTop: 30,
    width: '100%',
  },
  haveAccountText: {
    color: '#272C66',
    fontSize: 14,
    fontWeight: '700',
  },
  input: {
    borderColor: NEUTRALS_6,
    borderRadius: 12,
    color: NEUTRALS_4,
    height: 48,
    paddingHorizontal: 16,
    fontSize: 16,
  },

  inputContainer: {
    alignItems: 'center',
    backgroundColor: WHITE,
    borderColor: NEUTRALS_6,
    borderRadius: 12,
    borderWidth: 2,
    color: NEUTRALS_4,
    flexDirection: 'row',
    height: 48,
    paddingHorizontal: 16,
    width: '100%',
    justifyContent: 'space-between',
  },
  inputField: {
    color: NEUTRALS_4,
    height: 48,
    width: '85%',
    fontSize: 16,
  },
  labelInput: {
    color: NEUTRALS_5,
    fontWeight: '700',
    fontSize: 15,
    marginBottom: 10,
    marginTop: 30,
    textTransform: 'uppercase',
  },
  logInButton: {
    backgroundColor: '#168FBF',
    height: 48,
    marginVertical: 30,
    borderRadius: 10,
    marginHorizontal: 100,
  },
  loginContainer: {
    paddingHorizontal: 16,
  },
  logo: {
    height: 100,
    width: 120,
    resizeMode: 'contain',
  },
  logoContain: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  noAccountText: {
    color: APPLE_ICON,
    fontSize: 18,
    fontWeight: '700',
  },
  openIdLogin: {
    marginBottom: 20,
    color: NEUTRALS_5,
  },
  questionAccount: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  signUpLink: {
    color: LIGHT_SECONDARY_1,
    fontSize: 18,
    fontWeight: '700',
  },
  signInTitle: {
    marginTop: 15,
    marginBottom: 4,
    fontSize: 35,
    fontWeight: '700',
    textAlign: 'center',
  },
  signInTitleEmployer: {
    marginBottom: 15,
    fontSize: 35,
    fontWeight: '700',
    textAlign: 'center',
    textTransform: 'lowercase',
  },
  loginSocialWrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: isIphoneX() ? 0 : 40,
  },
  socialIcon: {
    color: WHITE,
  },
  socialLogin: {
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
});
