import React, {ReactElement, useCallback, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import RouteName from './RouteName';
import {navigationRef} from './navigationServices';
import Login from 'src/components/Login';
import {checkValidLogin} from 'src/utils/checkValidLogin';
import ApiUser from 'src/api/User/ApiUser';
import BottomTabContentHome from './BottomTabContentHome';
import Home from 'src/components/Home';
import ThongBao from 'src/components/ThongBao';
import Profile from 'src/components/Profile';
import DetailPodCast from 'src/screen/HomeScreen/DetailPodCast';

function BottomTabHome(): ReactElement {
  const Tab = createBottomTabNavigator();

  const Stack = createStackNavigator();
  const tabBar = useCallback((): ReactElement => <BottomTabContentHome />, []);
  // const userInfo = useSelector((state: IRootState) => state.user.data?.user);

  return (
    <Tab.Navigator tabBar={tabBar} screenOptions={{headerShown: false}}>
      <Tab.Screen name={RouteName.ThongBao} component={ThongBao} />
      <Tab.Screen name={RouteName.TrangChu} component={Home} />
      <Tab.Screen name={RouteName.Profile} component={Profile} />
    </Tab.Navigator>
  );
}

function AppNavigator(): ReactElement {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer
      // theme={mode === 'dark' ? darkTheme : lightTheme}
      ref={ref => {
        navigationRef.current = ref;
      }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={RouteName.HomeTab}>
        <Stack.Screen component={BottomTabHome} name={RouteName.HomeTab} />
        <Stack.Screen component={DetailPodCast} name="DetailPodCast" />
      </Stack.Navigator>
      {/* <ModalLogin /> */}
    </NavigationContainer>
  );
}
export default AppNavigator;
