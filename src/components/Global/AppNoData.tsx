import React, {ReactElement} from 'react';
import {Image} from 'react-native';
import {getScreenWidth, getDeviceHeight} from 'src/utils/layout/layout';
import AppView from './AppView';
import AppText from './AppText';

function AppNoData(): ReactElement {
  return (
    <AppView fill rowAlignCenter>
      <AppView row={false} alignItems="center">
        <Image
          style={{
            width: getScreenWidth() / 1.2,
            height: getDeviceHeight() / 2.5,
          }}
          source={require('src/assets/images/nodata.png')}
        />

        <AppText marginTop={10}>Không có dữ liệu để hiển thị ☹️</AppText>
        <AppText marginBottom={10}>chờ UNETI ONLINE xíu nhé! </AppText>
      </AppView>
    </AppView>
  );
}

export default AppNoData;
