import { StatusBar, Image } from "expo-status-bar";
import React, {useState} from "react";
import AppLoading from "expo-app-loading";
import {Asset} from 'expo-asset';
import * as Font from 'expo-font';
import {ThemeProvider} from 'styled-components/native'
import { theme } from "./theme";
import { StyleSheet } from "react-native";
import Navigation from "./navigations";
import {images} from './utils/images';
import { ProgressContext, ProgressProvider } from "./contexts";

const cacheImages = images => {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
};
const cacheFonts = fonts => {
  return fonts.map(font => Font.loadAsync(font));
};


const App = () => {
  const [isReady, setIsReady] = useState(false);

  const _loadAssets = async () => {
    const imageAssets = cacheImages([
      require('../assets/splash.png'),
      ...Object.values(images),
    ]);
    const fontAssets = cacheFonts([]);

    await Promise.all([...imageAssets, ...fontAssets]);
  };

  return isReady ? (
    <ThemeProvider theme={theme}>
      <ProgressProvider>
      <StatusBar barStyle="dark-content" />
          <Navigation />
      </ProgressProvider>
    </ThemeProvider>
  ) : (
    <AppLoading
      startAsync={_loadAssets}
      onFinish={() => setIsReady(true)}
      onError={console.warn}
    />
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee9e0",
    // margin: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});

