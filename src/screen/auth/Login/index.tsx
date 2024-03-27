import React, {ReactElement, useEffect, useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Button, CheckBox} from 'react-native-elements';
import {Formik} from 'formik';
import {StackActions, useNavigation} from '@react-navigation/native';
import {style} from 'src/styles/Login';
import {ScrollView} from 'react-native-gesture-handler';
import {isIOS} from 'src/utils/device';
import {isIphoneX} from 'react-native-iphone-x-helper';
import Config from 'src/config';
import IconFeather from 'react-native-vector-icons/Feather';
import AppView from 'src/components/Global/AppView';
import AppText from 'src/components/Global/AppText';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import store from 'src/redux/store';
import {showError, showSuccess} from 'src/utils/notification';
import ApiUser, {ILoginBody} from 'src/api/User/ApiUser';
import {useMutation} from 'react-query';
import {useDispatch} from 'react-redux';
import UserAction from 'src/redux/actions/UserAction';
import UserActionGetProfile from 'src/redux/actions/UserActionGetProfile';
import {checkValidLogin} from 'src/utils/checkValidLogin';

export default function Login(): ReactElement {
  const navigation = useNavigation();
  const [hidePass, setHidePass] = useState(true);
  const [isRememberChecked, setRememberChecked] = useState(false);
  const insets = useSafeAreaInsets();
  const loginMutation = useMutation(ApiUser.login);
  const getInfoMutation = useMutation(ApiUser.getInfoStudent);
  const dispatch = useDispatch();

  const handleLogin = async (value: ILoginBody): Promise<void> => {
    const loginBody = {
      TC_SV_MaSinhVien: value.TC_SV_MaSinhVien.trim(),
      TC_SV_MaSinhVien_Pass: value.TC_SV_MaSinhVien_Pass.trim(),
    };
    if (!loginBody.TC_SV_MaSinhVien || !loginBody.TC_SV_MaSinhVien_Pass) {
      showError('Vui lòng cung cấp đủ thông tin');
    }
    // navigation.navigate("HomeTab");
    loginMutation.mutate(loginBody, {
      onSuccess: res => {
        // console.log('res', res);
        if (res.code === 200) {
          dispatch(
            UserAction.userLogin({
              ...res,
            }),
          );
          if (checkValidLogin()) {
            getInfoMutation.mutate(
              {
                TC_SV_MaSinhVien: loginBody.TC_SV_MaSinhVien,
              },
              {
                onSuccess: res => {
                  if (res.code === 200) {
                    dispatch(
                      UserActionGetProfile.userGetProfile({
                        ...res,
                      }),
                    );
                    navigation.dispatch(StackActions.replace('HomeTab'));
                    // navigation.dispatch(StackActions.replace('BottomTab'));
                    const {userInfo} = store.getState();
                    showSuccess(
                      `Xin chào, ${userInfo?.body[0]?.HoDem} ${userInfo?.body[0]?.Ten}`,
                    );
                  }
                },
              },
            );
          }
        } else {
          showError('Somethings Wrong');
        }
      },
      onError() {
        showError('Sai tên đăng nhập hoặc mật khẩu');
      },
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <AppView fill marginTop={insets.top}>
        <KeyboardAvoidingView
          behavior={isIOS() ? 'padding' : undefined}
          keyboardVerticalOffset={isIphoneX() ? 40 : isIOS() ? 20 : 0}
          style={{flex: 1}}>
          <ScrollView style={{...style.loginContainer}}>
            <AppView>
              <Formik
                initialValues={{
                  TC_SV_MaSinhVien: '20107100413',
                  TC_SV_MaSinhVien_Pass: '1111',
                }}
                validateOnChange={false}
                validateOnBlur={false}
                onSubmit={handleLogin}>
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                }): ReactElement => (
                  <AppView paddingTop={20}>
                    <AppView alignItems="center">
                      <Image
                        style={style.logo}
                        source={require('src/assets/images/logo.png')}
                      />
                    </AppView>
                    <AppView alignItems="center" marginTop={20}>
                      <AppText size="bold" color="#272C66" fontSize={30}>
                        Đăng Nhập
                      </AppText>
                    </AppView>

                    <AppView>
                      <AppView>
                        <AppText
                          color={Config.COLOR_CONFIG.NEUTRALS_5}
                          fontWeight="700"
                          fontSize={15}
                          marginBottom={10}
                          marginTop={30}
                          textTransform="uppercase">
                          Mã sinh viên
                        </AppText>
                        <AppView
                          rowAlignCenter
                          backgroundColor={Config.COLOR_CONFIG.WHITE}
                          borderColor={Config.COLOR_CONFIG.NEUTRALS_6}
                          borderRadius={12}
                          borderWidth={2}
                          color={Config.COLOR_CONFIG.NEUTRALS_4}
                          height={48}
                          paddingHorizontal={16}
                          width="100%"
                          justifyContent="space-between">
                          {/* <IconIonicons
                        name="person"
                        size={22}
                        color="#B1B5C4"
                        style={{paddingLeft: 5, paddingRight: 15}}
                      /> */}
                          <TextInput
                            autoCorrect={false}
                            placeholderTextColor={
                              Config.COLOR_CONFIG.NEUTRALS_5
                            }
                            autoCapitalize="none"
                            style={{
                              ...style.inputField,
                              width: '100%',
                            }}
                            placeholder="Nhập mã sinh viên"
                            onChangeText={handleChange('TC_SV_MaSinhVien')}
                            onBlur={handleBlur('TC_SV_MaSinhVien')}
                            value={values.TC_SV_MaSinhVien}
                            // enablesReturnKeyAutomatically
                          />
                        </AppView>
                      </AppView>

                      <AppView>
                        <AppText
                          color={Config.COLOR_CONFIG.NEUTRALS_5}
                          fontWeight="700"
                          fontSize={15}
                          marginBottom={10}
                          marginTop={30}
                          textTransform="uppercase">
                          Mật khẩu
                        </AppText>
                        <AppView
                          rowAlignCenter
                          backgroundColor={Config.COLOR_CONFIG.WHITE}
                          borderColor={Config.COLOR_CONFIG.NEUTRALS_6}
                          borderRadius={12}
                          borderWidth={2}
                          color={Config.COLOR_CONFIG.NEUTRALS_4}
                          height={48}
                          paddingHorizontal={16}
                          width="100%"
                          justifyContent="space-between">
                          {/* <IconFontisto
                          name="locked"
                          size={22}
                          color="#B1B5C4"
                          style={{paddingLeft: 5, paddingRight: 15}}
                        /> */}
                          <TextInput
                            placeholderTextColor={
                              Config.COLOR_CONFIG.NEUTRALS_5
                            }
                            style={style.inputField}
                            placeholder="Nhập mật khẩu"
                            secureTextEntry={!!hidePass}
                            onChangeText={handleChange('TC_SV_MaSinhVien_Pass')}
                            onBlur={handleBlur('TC_SV_MaSinhVien_Pass')}
                            value={values.TC_SV_MaSinhVien_Pass}
                            enablesReturnKeyAutomatically
                          />

                          <TouchableOpacity>
                            <IconFeather
                              name={hidePass ? 'eye-off' : 'eye'}
                              size={22}
                              color={Config.COLOR_CONFIG.NEUTRALS_2}
                              onPress={(): void => setHidePass(!hidePass)}
                            />
                          </TouchableOpacity>
                        </AppView>
                      </AppView>
                    </AppView>

                    <AppView
                      rowAlignCenter
                      justifyContent="space-between"
                      marginTop={10}>
                      <TouchableOpacity
                        style={style.buttonArea}
                        onPress={(): void => {
                          navigation.navigate('ForgotPasswordRoute');
                        }}>
                        <AppText
                          borderColor={Config.COLOR_CONFIG.NEUTRALS_6}
                          color="#E1453C"
                          fontSize={17}>
                          Quên mật khẩu!
                        </AppText>
                      </TouchableOpacity>
                      <AppView rowAlignCenter>
                        <CheckBox
                          containerStyle={{margin: 0, padding: 0}}
                          checked={isRememberChecked}
                          onPress={(): void => {
                            setRememberChecked(!isRememberChecked);
                          }}
                        />
                        <AppText
                          color={Config.COLOR_CONFIG.GRAY_MK}
                          fontSize={16}>
                          Lưu đăng nhập
                        </AppText>
                      </AppView>
                    </AppView>
                    <Button
                      buttonStyle={style.logInButton}
                      title="Đăng Nhập"
                      titleStyle={style.titleSubmit}
                      loading={
                        loginMutation.isLoading || getInfoMutation.isLoading
                      }
                      onPress={(): void => {
                        handleSubmit();
                      }}
                    />
                  </AppView>
                )}
              </Formik>
            </AppView>
          </ScrollView>
        </KeyboardAvoidingView>
      </AppView>
    </SafeAreaView>
  );
}
