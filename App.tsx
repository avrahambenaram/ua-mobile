import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts, Nunito_400Regular, Nunito_700Bold, Nunito_600SemiBold } from '@expo-google-fonts/nunito';
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
 
import colors from './src/constants/colors';
import Stack from './src/navigators/Stack';

import store from './src/store';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Nunito400': Nunito_400Regular,
    'Nunito600': Nunito_600SemiBold,
    'Nunito700': Nunito_700Bold
  })

  useEffect(() => {
    async function hide() {
      await SplashScreen.preventAutoHideAsync();
    }
    async function show() {
      await SplashScreen.hideAsync();
    }
    if (!fontsLoaded) {
      hide();
    } else {
      show();
    }
  }, [fontsLoaded])

  useEffect(() => {
    async function load() {
      try {
        const auth = await AsyncStorage.getItem('auth');
        if (auth) {
          store.dispatch({
            type: 'set-token',
            payload: auth
          })
        }
      } catch(err) {
        console.error(err);
      }
    }
    load();
  }, [])

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <Provider store={store}>
    <View style={styles.container}>
      <Stack/>
      <StatusBar style='light'/>
    </View>
    </Provider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
