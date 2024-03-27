import React, {ReactElement, memo} from 'react';
import {Text, View} from 'react-native';
import Header from '../Global/HeaderPage';
import HomeScreen from 'src/screen/HomeScreen';
import Icon from 'src/utils/Icon';

function Home(): ReactElement {
  return (
    <View style={{flex: 1}}>
      <Header
        // logo
        children={
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 14,
              textAlign: 'center',
            }}>
            {/* EVN */}
            BẢNG KẾT QUẢ TÍNH LỰC ĐẦU CỘT VÀ CHỌN CỘT (TÍNH TOÁN CHO CỘT BTLT) -
            123
          </Text>
        }
      />
      <HomeScreen />
    </View>
  );
}
export default memo(Home);
