import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Routes from './routes/Routes';

const getFonts = () => {
  return Font.loadAsync({
    'nanito-reg': require('./assets/fonts/Nunito-Regular.ttf'),
    'nanito-bold': require('./assets/fonts/Nunito-Bold.ttf')
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (fontLoaded) {
    return <Routes />;
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontLoaded(true)}
        onError={() => console.log('error')}
      />
    );
  }
}
