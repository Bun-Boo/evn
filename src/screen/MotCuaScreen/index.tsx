/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ReactElement} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import AppView from 'src/components/Global/AppView';
import AppText from 'src/components/Global/AppText';
import TouchableGlobal from 'src/components/Global/TouchableGlobal';
import {DATA_THU_TUC_HCSV} from 'src/utils/dataMotCua';
import {getWindowHeight} from 'src/utils/layout/layout';
import store from 'src/redux/store';

function MotCuaScreen(): ReactElement {
  const navigation = useNavigation();
  const {userInfo} = store.getState();
  console.log('userInfo.body[0]', userInfo.body[0]);
  const renderItem = ({item}: {item: any}) => (
    <TouchableGlobal
      onPress={() => {
        navigation.navigate(`${item.route}`);
      }}>
      <View style={[styles.container, {width: '96%'}]}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subTitle}>{item.subTitle}</Text>
        </View>
      </View>
    </TouchableGlobal>
  );

  return (
    <AppView fill marginBottom={20}>
      <AppView
        height={getWindowHeight() / 6}
        rowAlignCenter
        style={styles.container1}>
        <AppView flex={3}>
          <AppText marginTop={10} color="#fff" fontSize={18} fontWeight="bold">
            {userInfo?.body[0]?.HoDem} {userInfo?.body[0]?.Ten}
          </AppText>
          <AppText fontSize={16} marginVertical={15} color="#fff">
            {userInfo?.body[0]?.MaSinhVien}
          </AppText>
          <AppText fontSize={16} color="#fff">
            {userInfo?.body[0]?.LopHoc}
          </AppText>
        </AppView>
        <AppView flex={1}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
            source={{uri: userInfo?.body[0]?.HinhAnh}}
          />
        </AppView>
      </AppView>
      <FlatList
        data={DATA_THU_TUC_HCSV}
        renderItem={renderItem}
        keyExtractor={(item, index) => `_${index}`}
      />
    </AppView>
  );
}

export default MotCuaScreen;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    width: '100%',
  },
  container1: {
    backgroundColor: '#168FBF',
    borderRadius: 8,
    padding: 16,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    numberOfLines: 1,
    fontWeight: 'bold',
  },
  subTitle: {
    marginTop: 5,
    fontSize: 12,
    color: 'gray',
    numberOfLines: 3,
  },
});
