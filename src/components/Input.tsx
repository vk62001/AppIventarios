import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { appTheme, customColors } from '../theme//appTheme'

export const Input = () => {
  return (
    <View style={styleInput.input}>
      <TextInput 
        style={{...appTheme.input,}}
        placeholderTextColor={'#99B4A6'}
        placeholder={'¿Qué estas buscando humano?'}
      />
    </View>
  )
}

const styleInput = StyleSheet.create({
  input:{
    paddingVertical: 20,
    backgroundColor: customColors.primary
  }
})
