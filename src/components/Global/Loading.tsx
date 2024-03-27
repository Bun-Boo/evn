import React, {ReactElement} from 'react';
import {ActivityIndicator} from 'react-native';
import AppView from './AppView';

function Loading(): ReactElement {
  return (
    <AppView align="center" flex={1} justifyContent="center">
      <ActivityIndicator size={30} color="#EC5353" />
    </AppView>
  );
}

export default Loading;
