import React, {ReactElement, memo} from 'react';
import {Text, View} from 'react-native';
import Header from '../Global/HeaderPage';
import ProfileScreen from 'src/screen/ProfileScreen';

function Profile(): ReactElement {
  return (
    <View style={{flex: 1}}><Header
      // logo
      children={
          <Text
            style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 14,
            textAlign: 'center',
            }}>
            TRANG CÁ NHÂN
          </Text>
        }
      />
      <ProfileScreen />
    </View>
  );
}
export default memo(Profile);
