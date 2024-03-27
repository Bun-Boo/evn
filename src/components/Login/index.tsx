import React, {ReactElement, memo} from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Login from 'src/screen/auth/Login';
function LoginComponent(): ReactElement {
  const insets = useSafeAreaInsets();
  return (
    <View style={{flex: 1, paddingTop: insets.top}}>
      <Login />
    </View>
  );
}
export default memo(LoginComponent);
