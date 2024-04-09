import React from 'react';
import {View, Text} from 'react-native';
import Header from '../../components/Global/HeaderPage';

const Profile = () => {
  return (
    <View style={{flex: 1}}>
      <Header
        logo
        children={
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 14,
              textAlign: 'center',
            }}>
            Bro chill không ?
          </Text>
        }
        icon1={
          <Text
            style={{
              color: 'white',
              fontWeight: '700',
              textAlign: 'right',
            }}>
            Quét mã Qr
          </Text>
        }
        onPressIcon1={(): void => {}}
      />
    </View>
  );
};
export default Profile;
