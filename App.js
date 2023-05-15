import React from 'react';
import Home from './pages/Home'
import { StatusBar, View } from 'react-native';
import LandPage1 from './pages/LandDetails/LandPage1';
import LandPage2 from './pages/LandDetails/LandPage2';

export default function App() {
  return(
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar hidden={true}/>
      <Home />
      {/* <LandPage1/> */}
      {/* <LandPage2 /> */}
    </View>
  )
}