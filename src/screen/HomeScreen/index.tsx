import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ReactElement} from 'react';
import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Image} from 'react-native-elements';
import AppView from 'src/components/Global/AppView';
import ListPodCast from 'src/components/Global/ListPodCast';
import TextInputGlobal from 'src/components/Global/TextInputGlobal';
import TouchableGlobal from 'src/components/Global/TouchableGlobal';

import AppButton from 'src/components/Global/AppButton';
import AppText from 'src/components/Global/AppText';
import { Formik } from 'formik';
import RouteName from 'src/routes/RouteName';


function HomeScreen(): ReactElement {
  const navigation = useNavigation();
  const btnNext = (): void => {
    navigation.navigate(RouteName.Result);
  };
  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View style={{padding: 20, marginBottom: 100}}>
        <AppView fill marginHorizontal={16}>
          <Formik
            enableReinitialize
            initialValues={{
              password: '',
              renterPassword: '',
            }}
            // validationSchema={{}}
            onSubmit={() => {}}>
            {({handleSubmit}): ReactElement => (
              <AppView>
                <TextInputGlobal
                  label="Chọn cột:"
                  name="password"
                  placeholder="Chọn cột"
                  isDropdown
                  listDropdown={[
                    {label: 'Cột 1', value: '1'},
                    {label: 'Cột 2', value: '2'},
                    {label: 'Cột 3', value: '3'},
                  ]}
                />
                <TextInputGlobal
                  label="Tỉnh/TP:"
                  name="renterPassword"
                  placeholder="Chọn tỉnh/TP"
                  isDropdown
                  listDropdown={[
                    {label: 'Hà Nội', value: '1'},
                    {label: 'Hồ Chí Minh', value: '2'},
                    {label: 'Đà Nẵng', value: '3'},
                  ]}
                />
                <TextInputGlobal
                  label="Vùng gió (daN/m2):"
                  name="renterPassword"
                  placeholder="Chọn tỉnh/TP"
                  isDropdown
                  listDropdown={[
                    {label: '1', value: '1'},
                    {label: '2', value: '2'},
                    {label: '3', value: '3'},
                  ]}
                />
                <TextInputGlobal
                  label="Dạng địa hình"
                  name="renterPassword"
                  placeholder="Chọn tỉnh/TP"
                />
                <TextInputGlobal
                  label="Độ cao quy đổi gió (m):"
                  name="renterPassword"
                  placeholder="Chọn tỉnh/TP"
                />
                <TextInputGlobal
                  label="Thời gian sử dụng công trình (năm):"
                  name="renterPassword"
                  placeholder="Chọn tỉnh/TP"
                />
                <TextInputGlobal
                  label="Cấp điện áp đến (kV):"
                  name="renterPassword"
                  placeholder="Chọn tỉnh/TP"
                  isDropdown
                  listDropdown={[
                    {label: '1', value: '1'},
                    {label: '2', value: '2'},
                    {label: '3', value: '3'},
                  ]}
                />
                <AppView row fill>
                  <AppButton
                    text="Đặt lại"
                    textColor={'white'}
                    onPress={(): void => {
                      handleSubmit();
                    }}
                    backgroundColor={'red'}
                    borderRadius={8}
                    // loading={createNewPasswordMutation.isLoading}
                    style={{width: '50%', marginRight: 10}}
                  />
                  <AppButton
                    text="Tiếp tục"
                    textColor={'white'}
                    onPress={(): void => {
                      btnNext();
                    }}
                    backgroundColor={'blue'}
                    borderRadius={8}
                    style={{width: '50%'}}
                    // loading={createNewPasswordMutation.isLoading}
                  />
                </AppView>
              </AppView>

              // <AppView>
              //   <TextInputGlobal
              //     label="Dây dẫn:"
              //     name="password"
              //     placeholder="Chọn dây dẫn"
              //     isDropdown
              //     listDropdown={[
              //       {label: 'Cột 1', value: '1'},
              //       {label: 'Cột 2', value: '2'},
              //       {label: 'Cột 3', value: '3'},
              //     ]}
              //   />
              //   <TextInputGlobal
              //     label="Module đàn hồi (Kg/mm2):"
              //     name="renterPassword"
              //     placeholder="Nhập module đàn hồi (Kg/mm2)"
              //   />
              //   <TextInputGlobal
              //     label="Hệ số dãn nở dài x10-6 (1/oC):"
              //     name="renterPassword"
              //     placeholder="Nhập hệ số dãn nở dài x10-6 (1/oC):"
              //   />
              //   <TextInputGlobal
              //     label="Đường kính chịu gió (mm):"
              //     name="renterPassword"
              //     placeholder="Đường kính chịu gió (mm):"
              //   />
              //   <TextInputGlobal
              //     label="Tiết diện (mm2):"
              //     name="renterPassword"
              //     placeholder="Tiết diện (mm2):"
              //   />
              //   <TextInputGlobal
              //     label="Trọng lượng riêng (Kg/m):"
              //     name="renterPassword"
              //     placeholder="Trọng lượng riêng (Kg/m):"
              //   />
              //   <TextInputGlobal
              //     label="Ứng suất đứt (daN/mm2):"
              //     name="renterPassword"
              //     placeholder="Ứng suất đứt (daN/mm2):"
              //   />
              //   <TextInputGlobal
              //     label="Ứng suất lớn nhất (daN/mm2):"
              //     name="renterPassword"
              //     placeholder="Ứng suất lớn nhất (daN/mm2):"
              //   />
              //   <TextInputGlobal
              //     label="Ứng suất trung bình (daN/mm2):"
              //     name="renterPassword"
              //     placeholder="Ứng suất trung bình (daN/mm2):"
              //   />
              //   <AppView row fill>
              //     <AppButton
              //       text="Đặt lại"
              //       textColor={'white'}
              //       onPress={(): void => {
              //         handleSubmit();
              //       }}
              //       backgroundColor={'red'}
              //       borderRadius={8}
              //       // loading={createNewPasswordMutation.isLoading}
              //       style={{width: '50%', marginRight: 10}}
              //     />
              //     <AppButton
              //       text="Tiếp tục"
              //       textColor={'white'}
              //       onPress={(): void => {
              //         handleSubmit();
              //       }}
              //       backgroundColor={'blue'}
              //       borderRadius={8}
              //       style={{width: '50%'}}
              //       // loading={createNewPasswordMutation.isLoading}
              //     />
              //   </AppView>
              // </AppView>
              // <AppView>
              //   <TextInputGlobal
              //     label="Độ cao treo dây trung bình (m):"
              //     name="password"
              //     placeholder="Độ cao treo dây trung bình (m):"
              //   />
              //   <TextInputGlobal
              //     label="K/C min cho phép từ dây dẫn đến mặt đất (m):"
              //     name="renterPassword"
              //     placeholder="K/C min cho phép từ dây dẫn đến mặt đất (m):"
              //   />
              //   <TextInputGlobal
              //     label="Số lượng phân pha:"
              //     name="renterPassword"
              //     placeholder="Nhập Số lượng phân pha:"
              //     isDropdown
              //     listDropdown={[
              //       {label: '1', value: '1'},
              //       {label: '2', value: '2'},
              //       {label: '3', value: '3'},
              //     ]}
              //   />
              //   <TextInputGlobal
              //     label="Số lượng dây dẫn trên một tầng xà:"
              //     name="renterPassword"
              //     placeholder="Số lượng dây dẫn trên một tầng xà:"
              //     isDropdown
              //     listDropdown={[
              //       {label: '1', value: '1'},
              //       {label: '2', value: '2'},
              //       {label: '3', value: '3'},
              //     ]}
              //   />
              //   <TextInputGlobal
              //     label="Khoảng cách từ điểm treo dây tới tâm cột H4/2 (m):"
              //     name="renterPassword"
              //     placeholder="Khoảng cách từ điểm treo dây tới tâm cột H4/2 (m):"
              //   />
              //   <TextInputGlobal
              //     label="Loại cột bê tông li tâm:"
              //     name="renterPassword"
              //     placeholder="Loại cột bê tông li tâm:"
              //   />
              //   <TextInputGlobal
              //     label="Chiều cao cột (m):"
              //     name="renterPassword"
              //     placeholder="Chiều cao cột (m):"
              //   />
              //   <TextInputGlobal
              //     label="Hệ số an toàn:"
              //     name="renterPassword"
              //     placeholder="Hệ số an toàn:"
              //   />
              //   <AppView row fill>
              //     <AppButton
              //       text="Đặt lại"
              //       textColor={'white'}
              //       onPress={(): void => {
              //         handleSubmit();
              //       }}
              //       backgroundColor={'red'}
              //       borderRadius={8}
              //       // loading={createNewPasswordMutation.isLoading}
              //       style={{width: '50%', marginRight: 10}}
              //     />
              //     <AppButton
              //       text="Tiếp tục"
              //       textColor={'white'}
              //       onPress={(): void => {
              //         handleSubmit();
              //       }}
              //       backgroundColor={'blue'}
              //       borderRadius={8}
              //       style={{width: '50%'}}
              //       // loading={createNewPasswordMutation.isLoading}
              //     />
              //   </AppView>
              // </AppView>
              // <AppView>
              //   <TextInputGlobal
              //     label="Công dụng cột:"
              //     name="password"
              //     placeholder="Công dụng cột:"
              //     isDropdown
              //     listDropdown={[
              //       {label: 'Cột 1', value: '1'},
              //       {label: 'Cột 2', value: '2'},
              //       {label: 'Cột 3', value: '3'},
              //     ]}
              //   />
              //   <TextInputGlobal
              //     label="Loại cột:"
              //     name="renterPassword"
              //     placeholder="Loại cột:"
              //     isDropdown
              //     listDropdown={[
              //       {label: 'Cột 1', value: '1'},
              //       {label: 'Cột 2', value: '2'},
              //       {label: 'Cột 3', value: '3'},
              //     ]}
              //   />
              //   <TextInputGlobal
              //     label="K/C (m):"
              //     name="renterPassword"
              //     placeholder="Nhập K/C (m):"
              //   />
              //   <TextInputGlobal
              //     label="K/C gió (m):"
              //     name="renterPassword"
              //     placeholder="K/C gió (m):"
              //   />
              //   <TextInputGlobal
              //     label="K/C trọng lượng (m)::"
              //     name="renterPassword"
              //     placeholder="K/C trọng lượng (m)::"
              //   />
              //   <TextInputGlobal
              //     label="K/C đại biểu (m):"
              //     name="renterPassword"
              //     placeholder="K/C đại biểu (m):"
              //   />
              //   <TextInputGlobal
              //     label="Góc néo (độ)"
              //     name="renterPassword"
              //     placeholder="Góc néo (độ)"
              //   />
              //   <TextInputGlobal
              //     label="Số mạch:"
              //     name="renterPassword"
              //     placeholder="Số mạch:"
              //     isDropdown
              //     listDropdown={[
              //       {label: '1', value: '1'},
              //       {label: '2', value: '2'},
              //       {label: '3', value: '3'},
              //     ]}
              //   />
              //   <AppView row fill>
              //     <AppButton
              //       text="Đặt lại"
              //       textColor={'white'}
              //       onPress={(): void => {
              //         handleSubmit();
              //       }}
              //       backgroundColor={'red'}
              //       borderRadius={8}
              //       // loading={createNewPasswordMutation.isLoading}
              //       style={{width: '50%', marginRight: 10}}
              //     />
              //     <AppButton
              //       text="Tiếp tục"
              //       textColor={'white'}
              //       onPress={(): void => {
              //         handleSubmit();
              //       }}
              //       backgroundColor={'blue'}
              //       borderRadius={8}
              //       style={{width: '50%'}}
              //       // loading={createNewPasswordMutation.isLoading}
              //     />
              //   </AppView>
              // </AppView>
            )}
          </Formik>
        </AppView>
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  titleItem: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },
  subTitle: {
    fontSize: 12,
    color: 'gray',
  },
});
