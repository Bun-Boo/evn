import {Animated, TouchableOpacity} from 'react-native';
import React, {ReactElement} from 'react';
import Icon from '../../utils/Icon';

export default function BtnToTop({
  currentScrollY,
  scrollFunction,
}: {
  currentScrollY: any;
  scrollFunction: any;
}): ReactElement {
  return (
    <TouchableOpacity onPress={(): void => scrollFunction()}>
      <Animated.View
        style={{
          position: 'absolute',
          bottom: 15,
          right: 10,
          backgroundColor: 'rgba(0, 0, 0, 0.25);',
          padding: 15,
          borderRadius: 50,
          opacity: currentScrollY.interpolate({
            inputRange: [0, 400],
            outputRange: [0, 1],
            useNativeDriver: true,
          }),
        }}>
        <Icon icon="Arrow_Up" size={16} color="white" />
      </Animated.View>
    </TouchableOpacity>
  );
}
