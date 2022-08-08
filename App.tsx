import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import Symcode from "rn-symcode-bt";

import { DeviceEventEmitter, NativeModules } from 'react-native';

const android = NativeModules.RnSymcodeBt;
const BARCODE_SCAN_NOTIFY_EVENT_NAME = 'BARCODE_SCAN_NOTIFY_EVENT';

const App = () => {

  const test=async ()=>{
    const algo2 = await android.enableBluetooth();
    //console.log(algo2, 'se conecta');
    //await android.enableNotify();
    // await android.asyncConnectWithTimeout('AA:A8:A0:09:24:7D')
    await android.asyncConnectWithTimeout('AA:A8:A2:0C:82:F0')//anillo
    .then(res=>{
      console.log(res, 'connection')
    })
    DeviceEventEmitter.addListener(BARCODE_SCAN_NOTIFY_EVENT_NAME, barcode => {
     console.log(barcode, 'there');
    });
  }

  useEffect(() => {
    test();
    return () => {
    }
  }, [])
  

  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          >
          <Header />

          <View >
            <Text>Hola</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};


export default App;

