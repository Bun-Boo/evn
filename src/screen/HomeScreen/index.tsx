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

import {Formik} from 'formik';
import AppButton from 'src/components/Global/AppButton';
import AppText from 'src/components/Global/AppText';

const data = [
  {
    image: 'https://picsum.photos/200/300',
    title: 'Podcast 1 tiếng chó sủa lofi cực chill',
    subTitle: 'Podcast 1',
  },
  {
    image: 'https://picsum.photos/200/300',
    title:
      'Tiếng người yêu chửi lofi cực chill, Tiếng người yêu chửi lofi cực chill',
    subTitle: 'Podcast 2 chỉ chửi khônng quá 1 tiếng, cực chill, hãy cảm nhận',
  },
  {
    image: 'https://picsum.photos/200/300',
    title: 'Podcast 3',
    subTitle: 'Podcast 3',
  },
  {
    image: 'https://picsum.photos/200/300',
    title: 'Podcast 4',
    subTitle: 'Podcast 4',
  },
  {
    image: 'https://picsum.photos/200/300',
    title: 'Podcast 5',
    subTitle: 'Podcast 5',
  },
  {
    image: 'https://picsum.photos/200/300',
    title: 'Podcast 6',
    subTitle: 'Podcast 6',
  },
  {
    image: 'https://picsum.photos/200/300',
    title: 'Podcast 7',
    subTitle: 'Podcast 7',
  },
  {
    image: 'https://picsum.photos/200/300',
    title: 'Podcast 8',
    subTitle: 'Podcast 8',
  },
  {
    image: 'https://picsum.photos/200/300',
    title: 'Podcast 9',
    subTitle: 'Podcast 9',
  },
  {
    image: 'https://picsum.photos/200/300',
    title: 'Podcast 10',
    subTitle: 'Podcast 10',
  },
];
const dataPodCast = [
  {
    image: 'https://picsum.photos/200/300',
    title: 'Podcast 1 tiếng chó sủa lofi cực chill',
    subTitle: 'Podcast 1',
  },
  {
    image: 'https://picsum.photos/200/300',
    title: 'Tiếng người yêu chửi lofi cực chill',
    subTitle: 'Podcast 2 chỉ chửi khônng quá 1 tiếng, cực chill, hãy cảm nhận',
  },
  {
    image: 'https://picsum.photos/200/300',
    title: 'Podcast 3',
    subTitle: 'Podcast 3',
  },
  {
    image: 'https://picsum.photos/200/300',
    title: 'Podcast 4',
    subTitle: 'Podcast 4',
  },
  {
    image: 'https://picsum.photos/200/300',
    title: 'Podcast 5',
    subTitle: 'Podcast 5',
  },
  {
    image: 'https://picsum.photos/200/300',
    title: 'Podcast 6',
    subTitle: 'Podcast 6',
  },
  {
    image: 'https://picsum.photos/200/300',
    title: 'Podcast 7',
    subTitle: 'Podcast 7',
  },
  {
    image: 'https://picsum.photos/200/300',
    title: 'Podcast 8',
    subTitle: 'Podcast 8',
  },
  {
    image: 'https://picsum.photos/200/300',
    title: 'Podcast 9',
    subTitle: 'Podcast 9',
  },
  {
    image: 'https://picsum.photos/200/300',
    title: 'Podcast 10',
    subTitle: 'Podcast 10',
  },
];

function HomeScreen(): ReactElement {
  const navigation = useNavigation();
  const renderItem = ({item}: {item: any}) => (
    <TouchableGlobal
      onPress={() => {
        navigation.navigate('DetailPodCast', {item});
      }}
      style={{marginRight: 20, maxWidth: Dimensions.get('screen').width / 3}}>
      <Image
        source={{uri: item.image}}
        style={{
          width: Dimensions.get('screen').width / 3,
          height: 100,
          borderRadius: 10,
        }}
      />
      <Text style={styles.titleItem} numberOfLines={1}>
        {item.title}
      </Text>
      <Text style={styles.subTitle} numberOfLines={2}>
        {item.subTitle}
      </Text>
    </TouchableGlobal>
  );

  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View style={{padding: 20, marginBottom: 100}}>
        {/* <View style={{marginBottom: 50}}>
          <Text style={styles.title}>PodCard được nghe nhiều nhất</Text>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => `_${index}`}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <Text style={styles.title}>Danh sách PodCard</Text>
        <ScrollView
          style={{maxHeight: Dimensions.get('screen').height / 2}}
          showsVerticalScrollIndicator={false}>
          <ListPodCast data={dataPodCast} />
        </ScrollView>
        <View style={{marginTop: 20}}>
          <Text style={styles.title}>Có thể bạn thích</Text>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => `_${index}`}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View> */}

        {/* <AppView fill marginHorizontal={16}>
          <Formik
            enableReinitialize
            initialValues={{
              password: '',
              renterPassword: '',
            }}
            // validationSchema={{}}
            onSubmit={() => {}}>
            {({handleSubmit}): ReactElement => (
              // <AppView>
              //   <TextInputGlobal
              //     label="Chọn cột:"
              //     name="password"
              //     placeholder="Chọn cột"
              //     isDropdown
              //     listDropdown={[
              //       {label: 'Cột 1', value: '1'},
              //       {label: 'Cột 2', value: '2'},
              //       {label: 'Cột 3', value: '3'},
              //     ]}
              //   />
              //   <TextInputGlobal
              //     label="Tỉnh/TP:"
              //     name="renterPassword"
              //     placeholder="Chọn tỉnh/TP"
              //     isDropdown
              //     listDropdown={[
              //       {label: 'Hà Nội', value: '1'},
              //       {label: 'Hồ Chí Minh', value: '2'},
              //       {label: 'Đà Nẵng', value: '3'},
              //     ]}
              //   />
              //   <TextInputGlobal
              //     label="Vùng gió (daN/m2):"
              //     name="renterPassword"
              //     placeholder="Chọn tỉnh/TP"
              //     isDropdown
              //     listDropdown={[
              //       {label: '1', value: '1'},
              //       {label: '2', value: '2'},
              //       {label: '3', value: '3'},
              //     ]}
              //   />
              //   <TextInputGlobal
              //     label="Dạng địa hình"
              //     name="renterPassword"
              //     placeholder="Chọn tỉnh/TP"
              //   />
              //   <TextInputGlobal
              //     label="Độ cao quy đổi gió (m):"
              //     name="renterPassword"
              //     placeholder="Chọn tỉnh/TP"
              //   />
              //   <TextInputGlobal
              //     label="Thời gian sử dụng công trình (năm):"
              //     name="renterPassword"
              //     placeholder="Chọn tỉnh/TP"
              //   />
              //   <TextInputGlobal
              //     label="Cấp điện áp đến (kV):"
              //     name="renterPassword"
              //     placeholder="Chọn tỉnh/TP"
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
              <AppView>
                <TextInputGlobal
                  label="Công dụng cột:"
                  name="password"
                  placeholder="Công dụng cột:"
                  isDropdown
                  listDropdown={[
                    {label: 'Cột 1', value: '1'},
                    {label: 'Cột 2', value: '2'},
                    {label: 'Cột 3', value: '3'},
                  ]}
                />
                <TextInputGlobal
                  label="Loại cột:"
                  name="renterPassword"
                  placeholder="Loại cột:"
                  isDropdown
                  listDropdown={[
                    {label: 'Cột 1', value: '1'},
                    {label: 'Cột 2', value: '2'},
                    {label: 'Cột 3', value: '3'},
                  ]}
                />
                <TextInputGlobal
                  label="K/C (m):"
                  name="renterPassword"
                  placeholder="Nhập K/C (m):"
                />
                <TextInputGlobal
                  label="K/C gió (m):"
                  name="renterPassword"
                  placeholder="K/C gió (m):"
                />
                <TextInputGlobal
                  label="K/C trọng lượng (m)::"
                  name="renterPassword"
                  placeholder="K/C trọng lượng (m)::"
                />
                <TextInputGlobal
                  label="K/C đại biểu (m):"
                  name="renterPassword"
                  placeholder="K/C đại biểu (m):"
                />
                <TextInputGlobal
                  label="Góc néo (độ)"
                  name="renterPassword"
                  placeholder="Góc néo (độ)"
                />
                <TextInputGlobal
                  label="Số mạch:"
                  name="renterPassword"
                  placeholder="Số mạch:"
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
                      handleSubmit();
                    }}
                    backgroundColor={'blue'}
                    borderRadius={8}
                    style={{width: '50%'}}
                    // loading={createNewPasswordMutation.isLoading}
                  />
                </AppView>
              </AppView>
            )}
          </Formik>
        </AppView> */}

        <AppView fill marginHorizontal={16}>
          <AppView fill rowAlignCenter justify={'space-between'}>
            <AppText>Loại dây dẫn : dsjfjsd</AppText>
            <AppText>Vùng gió: kfksd </AppText>
          </AppView>

          <AppView fill rowAlignCenter justify={'space-between'} marginTop={20}>
            <AppText>Ứng suất lớn nhất: 32</AppText>
            <AppText>Ứng suất trung bình: 12</AppText>
          </AppView>
        </AppView>

        <AppView borderBottomWidth={1} borderColor={'#ccc'} marginTop={20} />

        <AppView fill marginHorizontal={16} rowAlignCenter marginTop={20}>
          <AppView fill row={false}>
            <AppText marginTop={10}>Số cột </AppText>
            <AppText marginTop={10}>Công dụng cột </AppText>
            <AppText marginTop={10}>Loại cột </AppText>
            <AppText marginTop={10}>K/C (m) </AppText>
            <AppText marginTop={10}>K/C gió (m) </AppText>
            <AppText marginTop={10}>K/C trọng lượng (m) </AppText>
            <AppText marginTop={10}>K/C dại biểu (m) </AppText>
            <AppText marginTop={10}>Góc néo (độ) </AppText>
            <AppText marginTop={10}>S/mạch </AppText>
          </AppView>
          <AppView fill row={false} align="flex-end">
            <AppText marginTop={10}>1</AppText>
            <AppText marginTop={10}>Đỡ thẳng</AppText>
            <AppText marginTop={10}>LT16 </AppText>
            <AppText marginTop={10}>63</AppText>
            <AppText marginTop={10}>63</AppText>
            <AppText marginTop={10}>63</AppText>
            <AppText marginTop={10}>63</AppText>
            <AppText marginTop={10}>-</AppText>
            <AppText marginTop={10}>1</AppText>
          </AppView>
        </AppView>

        <AppText textAlign={'center'} marginTop={20} fontWeight="bold">
          Lực của 1 dây dẫn tác dụng lên cột
        </AppText>

        <AppText marginTop={10} fontWeight="bold">
          Chế độ làm việc bình thường
        </AppText>

        <AppView fill marginHorizontal={16} rowAlignCenter marginTop={10}>
          <AppView fill row={false}>
            <AppText marginTop={10}>P1</AppText>
            <AppText marginTop={10}>Bão</AppText>
            <AppText marginTop={10} marginLeft={20}>
              - P2
            </AppText>
            <AppText marginTop={10} marginLeft={20}>
              - P3
            </AppText>
            <AppText marginTop={10}>Trung bình</AppText>

            <AppText marginTop={10} marginLeft={20}>
              - P2
            </AppText>
            <AppText marginTop={10} marginLeft={20}>
              - P3
            </AppText>
            <AppText marginTop={10}>Lạnh</AppText>

            <AppText marginTop={10} marginLeft={20}>
              - P2
            </AppText>
            <AppText marginTop={10} marginLeft={20}>
              - P3
            </AppText>
          </AppView>
          <AppView fill row={false} align="flex-end">
            <AppText marginTop={10}>50</AppText>
            <AppText marginTop={10}></AppText>
            <AppText marginTop={10}>48</AppText>
            <AppText marginTop={10}>48</AppText>
            <AppText marginTop={10}></AppText>
            <AppText marginTop={10}>63</AppText>
            <AppText marginTop={10}>63</AppText>
            <AppText marginTop={10}></AppText>
            <AppText marginTop={10}>63</AppText>
            <AppText marginTop={10}>63</AppText>
          </AppView>
        </AppView>

        <AppText marginTop={10} fontWeight="bold">
          Sự cố: dây bị đứt
        </AppText>

        <AppView fill marginHorizontal={16} rowAlignCenter marginTop={10}>
          <AppView fill row={false}>
            <AppText marginTop={10}>P1'</AppText>
            <AppText marginTop={10}>Bão</AppText>
            <AppText marginTop={10} marginLeft={20}>
              - P2'
            </AppText>
            <AppText marginTop={10} marginLeft={20}>
              - P3'
            </AppText>
            <AppText marginTop={10}>Trung bình</AppText>

            <AppText marginTop={10} marginLeft={20}>
              - P2'
            </AppText>
            <AppText marginTop={10} marginLeft={20}>
              - P3'
            </AppText>
            <AppText marginTop={10}>Lạnh</AppText>

            <AppText marginTop={10} marginLeft={20}>
              - P2'
            </AppText>
            <AppText marginTop={10} marginLeft={20}>
              - P3'
            </AppText>
          </AppView>
          <AppView fill row={false} align="flex-end">
            <AppText marginTop={10}>50</AppText>
            <AppText marginTop={10}></AppText>
            <AppText marginTop={10}>48</AppText>
            <AppText marginTop={10}>48</AppText>
            <AppText marginTop={10}></AppText>
            <AppText marginTop={10}>63</AppText>
            <AppText marginTop={10}>63</AppText>
            <AppText marginTop={10}></AppText>
            <AppText marginTop={10}>63</AppText>
            <AppText marginTop={10}>63</AppText>
          </AppView>
        </AppView>

        <AppView borderBottomWidth={1} borderColor={'#ccc'} marginTop={20} />

        {/* trang 2 */}

        <AppView fill marginHorizontal={16} rowAlignCenter marginTop={20}>
          <AppView fill row={false}>
            <AppText marginTop={10}>Số cột </AppText>
            <AppText marginTop={10}>Công dụng cột </AppText>
            <AppText marginTop={10}>Loại cột </AppText>
            <AppText marginTop={10}>K/C (m) </AppText>
            <AppText marginTop={10}>K/C gió (m) </AppText>
            <AppText marginTop={10}>K/C trọng lượng (m) </AppText>
            <AppText marginTop={10}>K/C dại biểu (m) </AppText>
            <AppText marginTop={10}>Góc néo (độ) </AppText>
            <AppText marginTop={10}>S/mạch </AppText>
          </AppView>
          <AppView fill row={false} align="flex-end">
            <AppText marginTop={10}>1</AppText>
            <AppText marginTop={10}>Đỡ thẳng</AppText>
            <AppText marginTop={10}>LT16 </AppText>
            <AppText marginTop={10}>63</AppText>
            <AppText marginTop={10}>63</AppText>
            <AppText marginTop={10}>63</AppText>
            <AppText marginTop={10}>63</AppText>
            <AppText marginTop={10}>-</AppText>
            <AppText marginTop={10}>1</AppText>
          </AppView>
        </AppView>
        <AppText marginTop={10} fontWeight="bold">
          Cao độ treo dây (m)
        </AppText>
        <AppView fill marginHorizontal={16} rowAlignCenter marginTop={20}>
          <AppView fill row={false}>
            <AppText marginTop={10}>H1</AppText>
            <AppText marginTop={10}>H2</AppText>
            <AppText marginTop={10}>H3</AppText>
            <AppText marginTop={10}>H</AppText>
          </AppView>
          <AppView fill row={false} align="flex-end">
            <AppText marginTop={10}>14.0</AppText>
            <AppText marginTop={10}>14.0</AppText>
            <AppText marginTop={10}>14.0</AppText>
            <AppText marginTop={10}>14.0</AppText>
          </AppView>
        </AppView>

        <AppText textAlign={'center'} marginTop={20} fontWeight="bold">
          Lực dây dẫn tác dụng lên đầu cột
        </AppText>

        <AppText marginTop={10} fontWeight="bold">
          Chế độ làm việc bình thường
        </AppText>

        <AppView fill marginHorizontal={16} rowAlignCenter marginTop={10}>
          <AppView fill row={false}>
            <AppText marginTop={10}>P1 + P2</AppText>
            <AppText marginTop={10}>P3</AppText>
          </AppView>
          <AppView fill row={false} align="flex-end">
            <AppText marginTop={10}>272</AppText>
            <AppText marginTop={10}>50</AppText>
          </AppView>
        </AppView>

        <AppText marginTop={10} fontWeight="bold">
          Sự cố: dây bị đứt
        </AppText>

        <AppView fill marginHorizontal={16} rowAlignCenter marginTop={10}>
          <AppView fill row={false}>
            <AppText marginTop={10}>P1'+ P2'</AppText>
            <AppText marginTop={10}>P3'</AppText>
          </AppView>
          <AppView fill row={false} align="flex-end">
            <AppText marginTop={10}>198</AppText>
            <AppText marginTop={10}>268</AppText>
          </AppView>
        </AppView>

        <AppText textAlign={'center'} marginTop={20} fontWeight="bold">
          Lực gió tác dụng lên cột tác dụng lên đầu cột : 114
        </AppText>

        <AppText marginTop={10} fontWeight="bold">
          Lực đầu cột (kG)
        </AppText>
        <AppView
          fill
          marginHorizontal={16}
          rowAlignCenter
          marginTop={20}

          // flex-start
        >
          <AppView fill row={false} flex={9}>
            <AppText marginTop={10}>Chế độ làm việc bình thường</AppText>
            <AppText marginTop={10}>Sự cố: dây bị đứt</AppText>
            <AppText marginTop={10}>Chế độ làm việc bình thường DCS</AppText>
            <AppText marginTop={10}>Sự cố: dây bị đứt DCS</AppText>
            <AppText marginTop={10}>Max</AppText>
          </AppView>
          <AppView fill row={false} align="flex-end" flex={1}>
            <AppText marginTop={10}>390</AppText>
            <AppText marginTop={10}>412</AppText>
            <AppText marginTop={10}>96</AppText>
            <AppText marginTop={10}>390</AppText>
            <AppText marginTop={10}>486</AppText>
          </AppView>
        </AppView>

        <AppView fill marginHorizontal={16} rowAlignCenter marginTop={20}>
          <AppView fill row={false}>
            <AppText marginTop={10}>Loại cột lựa chọn</AppText>
            {/* <AppText marginTop={10}>Kết luận</AppText>
            <AppText marginTop={10}>Ghi chú</AppText> */}
          </AppView>
          <AppView fill row={false} align="flex-end">
            <AppText marginTop={10}>-</AppText>
            {/* <AppText marginTop={10}>-</AppText>
            <AppText marginTop={10}>-</AppText> */}
          </AppView>
        </AppView>

        <AppText textAlign={'center'} marginTop={20} fontWeight="bold">
          Kết luận
        </AppText>
        <AppText>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
          eius, cumque deserunt voluptatum blanditiis excepturi provident odio!
          Pariatur alias commodi nisi, asperiores quidem consequuntur vitae
          animi illo? Voluptatibus, optio vero!
        </AppText>

        <AppText textAlign={'center'} marginTop={20} fontWeight="bold">
          Ghi chú
        </AppText>

        <AppText>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
          eius, cumque deserunt voluptatum blanditiis excepturi provident odio!
          Pariatur alias commodi nisi, asperiores quidem consequuntur vitae
          animi illo? Voluptatibus, optio vero!
        </AppText>
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
