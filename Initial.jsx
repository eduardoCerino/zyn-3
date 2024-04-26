import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import LoadingSpinner from './components/Loader';
import { View } from 'react-native';

const Initial = ({children}) => {

    const [fontsLoaded] = useFonts({
        'GothamNarrow-Light': require('./assets/fonts/GothamNarrow-Light.otf'),
        'GothamNarrow-Medium': require('./assets/fonts/GothamNarrow-Medium.otf'),
        'GothamNarrow-Book': require('./assets/fonts/GothamNarrow-Book.otf'),
      });
    
      if (!fontsLoaded) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <LoadingSpinner />
        </View>)
      }
    

    
  return (
    <>
    {children}
    </>
  )
}

export default Initial