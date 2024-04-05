import React, {ReactElement, memo} from 'react';
import {Text, View} from 'react-native';
import Header from '../Global/HeaderPage';
import ThongBaoScreen from 'src/screen/ThongBaoScreen';

function ThongBao(): ReactElement {
  return (
    <View style={{flex: 1}}>
      <Header children={
          <Text
            style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 14,
            textAlign: 'center',
            }}>
            LỊCH SỬ TÍNH TOÁN
          </Text>
        } />
      <ThongBaoScreen />
    </View>
  );
}
export default memo(ThongBao);
