import React, {ReactElement} from 'react';
import {StatusBar as RNStatusBar, View} from 'react-native';

export default function StatusBar(): ReactElement {
  return (
    // <View
    //   style={{
    //     height: insets.top,
    //     backgroundColor: Config.COLOR_CONFIG.NEUTRALS_9,
    //   }}
    // >
    //   <RNStatusBar
    //     backgroundColor={
    //       modeTheme === "dark" ? "black" : Config.COLOR_CONFIG.NEUTRALS_9
    //     }
    //     barStyle={modeTheme === "dark" ? "light-content" : "dark-content"}
    //     hidden={!isVisible}
    //   />
    // </View>

    <RNStatusBar
      barStyle="light-content"
      translucent
      backgroundColor="transparent"
      hidden={false}
    />
  );
}
