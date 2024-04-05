import React, {ReactElement, memo} from 'react';
import {View} from 'react-native';
import Header from '../Global/HeaderPage';
import ThongBaoScreen from 'src/screen/ThongBaoScreen';
import Icon from 'src/utils/Icon';

function Profile(): ReactElement {
  return (
    <View style={{flex: 1}}>
      <Header logo icon1={<Icon icon="Search" size={20} color="#fff" />} />
      <ThongBaoScreen />
    </View>
  );
}
export default memo(Profile);
