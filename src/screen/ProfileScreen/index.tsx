import React, { useEffect } from 'react';
import {ReactElement} from 'react';
import ApiHistory, {IHistory} from 'src/api/History/ApiHistory';
import {FlatList, Image, StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import TouchableGlobal from 'src/components/Global/TouchableGlobal';
import ApiHome from 'src/api/Home/ApiHome';
import { useNavigation } from '@react-navigation/native';
import RouteName from 'src/routes/RouteName';
import AppText from 'src/components/Global/AppText';
import AppButton from 'src/components/Global/AppButton';
import SyncStorage from 'sync-storage';

function ProfileScreen(): ReactElement {
  const navigation = useNavigation();
  
  const loginBody = SyncStorage.get('loginBody');

  console.log('loginBody', loginBody);


  return (
    <View style={{flex: 1}}>
      <AppText style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center', margin: 10}}>{loginBody.TC_SV_MaSinhVien}</AppText>
      <AppButton
            text="Đăng xuất"
            textColor={'white'}
            onPress={(): void => {
              SyncStorage.remove('loginBody');
              SyncStorage.remove('isRememberChecked');
              navigation.navigate(RouteName.Login);
            }}
            backgroundColor={'red'}
            borderRadius={8}
            style={{ width: '50%', marginTop: 40, alignSelf: 'center'}}
        />
    </View>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    // borderRadius: 8,
    padding: 16,
    margin: 8,
    width: '96%',
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
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  subTitle: {
    marginTop: 5,
    fontSize: 14,
    color: 'gray',
  },
  subTitleDate: {
    marginTop: 5,
    fontSize: 10,
    color: 'gray',
    textAlign: 'right',
  },
});
