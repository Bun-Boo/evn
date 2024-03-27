import React, {useEffect, useRef} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import FlashMessage, {showMessage} from 'react-native-flash-message';
import AppNavigator from 'src/routes';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from 'react-query';
import Config from 'src/config';
import StatusBar from 'src/components/StatusBar';
import Toast from 'react-native-toast-message';
import SplashScreen from 'react-native-splash-screen';
import {RootSiblingParent} from 'react-native-root-siblings';
import NetInfo from '@react-native-community/netinfo';
import {Provider} from 'react-redux';
import store, {persistor} from 'src/redux/store';
import {PersistGate} from 'redux-persist/es/integration/react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: Config.NETWORK_CONFIG.RETRY,
    },
  },
});

function LoadingPersisGate() {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size={30} color="blue" />
    </View>
  );
}

function App(): JSX.Element {
  const internetStateRef = useRef<number>();
  useEffect(() => {
    SplashScreen.hide();
    const unsubscribe = NetInfo.addEventListener(state => {
      if (!state.isConnected) {
        internetStateRef.current = 2;
        showMessage({
          message: 'No Internet Connection',
          description: 'Please check your internet connection.',
          type: 'danger',
        });
      } else {
        if (internetStateRef.current === 2) {
          showMessage({
            message: 'Internet Reconnected',
            description: 'Your internet connection is now active.',
            type: 'success',
          });
          internetStateRef.current = 1;
        } else {
          internetStateRef.current = 1;
        }
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={<LoadingPersisGate />} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <RootSiblingParent>
              <StatusBar />
              <View style={{flex: 1}}>
                <AppNavigator />
                <FlashMessage position="top" style={{marginTop: 50}} />
              </View>
              <Toast />
            </RootSiblingParent>
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  loading: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default App;
