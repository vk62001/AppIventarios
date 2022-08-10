import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '../screens/HomeScreen'
import { ProductCount } from '../screens/ProductCount';
import { Products } from '../screens/Products';
import { appTheme, customColors } from '../theme/appTheme';


export type RootStackParams = {
  Inventarios: undefined;
  Products: undefined;
  ProductCount:{ item: any };
}

const Stack = createNativeStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
      <Stack.Navigator
        initialRouteName="Inventarios"
        screenOptions={{
          headerShadowVisible: false,
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: customColors.primary,
            shadowOpacity: 0,
            shadowOffset: {
                height: 0,
            },
            shadowRadius: 0,
            elevation: 0,
            borderBottomWidth: 0,
          }
        }}
      >
        <Stack.Screen name="Inventarios" component={HomeScreen} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="ProductCount" component={ProductCount} />
      </Stack.Navigator>
  );
}

