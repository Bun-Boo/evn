import React, {useCallback, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from '../utils/Icon';
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
  useRoute,
  useTheme,
} from '@react-navigation/native';
import Config from '../config';
import {isIOS} from '../utils/device';
import BottomTabOptionsConstant from 'src/constants/permision_group/BottomTabOptionsConstant';
import {useDispatch} from 'react-redux';
const {NEUTRALS_4} = Config.COLOR_CONFIG;
export interface BottomTabContentHomeInterface {
  index: number;
  name: string;
  routeName: string;
  icon: string;
}

const BottomTabContentHome = React.memo(function BottomTabContentHome() {
  const navigation = useNavigation();
  const theme = useTheme().colors;
  const route = useRoute();
  const dispatch = useDispatch();

  const currentRouteTab =
    getFocusedRouteNameFromRoute(route) ?? 'TrangChuRoute';
  const getColor = (name: string): string => {
    if (name === currentRouteTab) {
      return '#168FBF';
    }
    return NEUTRALS_4;
  };

  const selectBottomTabContentHome =
    useCallback((): BottomTabContentHomeInterface[] => {
      return BottomTabOptionsConstant.BottomTabHomeGroup;
    }, []);

  // const handleGetTenDot = (): void => {
  //   ApiTenDot.getTenDot().then(response => {
  //     if (response.code === 200) {
  //       dispatch(
  //         TenDotAction.getTenDot({
  //           ...response,
  //         }),
  //       );
  //     }
  //   });
  // };

  // useEffect(() => {
  //   handleGetTenDot();
  // }, []);

  return (
    <View style={[styles.main, {backgroundColor: theme.background}]}>
      {selectBottomTabContentHome().map(({routeName, index, name, icon}) => {
        return (
          <TouchableOpacity
            key={name}
            onPress={(): void => {
              // @ts-ignore
              navigation.navigate(routeName);
            }}
            style={styles.itemContainer}>
            <Icon
              icon={icon ?? 'question'}
              size={24}
              color={getColor(routeName)}
            />
            <Text
              style={{
                color: getColor(routeName),
                fontSize: 15,
              }}>
              {name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
});

export default BottomTabContentHome;

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    paddingVertical: 7,
    borderTopWidth: 0.5,
    borderColor: NEUTRALS_4,
  },
  main: {
    alignItems: 'center',
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    height: isIOS() ? 60 : 60,
    justifyContent: 'space-around',
    left: 0,
    position: 'absolute',
    right: 0,
  },
});
