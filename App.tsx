import React, {useCallback, useEffect, useState} from 'react';

import Symcode from "rn-symcode-bt";
import {enableScreens} from 'react-native-screens'
enableScreens()
import { DeviceEventEmitter, NativeModules } from 'react-native';
import {StackNavigator} from './src/navigator/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { DataContext } from './src/context/data-context';


const android = NativeModules.RnSymcodeBt;
const BARCODE_SCAN_NOTIFY_EVENT_NAME = 'BARCODE_SCAN_NOTIFY_EVENT';

const App = () => {
  const [products, setProducts] = useState<any>(undefined);
  const test=async ()=>{
    const algo2 = await android.enableBluetooth();
    //console.log(algo2, 'se conecta');
    //await android.enableNotify();
    // await android.asyncConnectWithTimeout('AA:A8:A0:09:24:7D')
    await android.asyncConnectWithTimeout('AA:A8:A2:0C:82:F0')//anillo
    .then((res:any)=>{
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
  }, []);

  const getProducts = useCallback((productsResponse: any)=>{
    setProducts(productsResponse);
  }, [])
  

  return (
    <DataContext.Provider
      value={{
        products,
        getProducts
      }}
    >
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </DataContext.Provider>
  );
};


export default App;

