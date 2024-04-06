import React, {ReactElement, memo} from 'react';
import {Text, View} from 'react-native';
import Header from '../Global/HeaderPage';
import ResultScreen from 'src/screen/ResultScreen';

function Result(): ReactElement {
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
            BẢNG KẾT QUẢ TÍNH LỰC ĐẦU CỘT VÀ CHỌN CỘT (TÍNH TOÁN CHO CỘT BTLT)
          </Text>
        }
      />
      <ResultScreen />
    </View>
  );
}
export default memo(Result);
