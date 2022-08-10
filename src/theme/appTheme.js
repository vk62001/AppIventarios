import React from 'react'
import { StyleSheet } from 'react-native'

export const appTheme = StyleSheet.create({
    container:{
        flex: 1, 
        width: '90%',
        alignSelf: 'center',
        fontFamily: 'OpenSans-Medium'
    },
    colorPrimary:{
        color: '#1e88e5'
    },
    colorLigth:{
        color: '#6ab7ff'
    },
    colorDark:{
        color: '#005cb2'
    },
    bgPrimary:{
        backgroundColor: '#1e88e5'
    },
    bgLigth:{
        backgroundColor: '#6ab7ff'
    },
    bgDark:{
        backgroundColor: '#005cb2'
    },
    input:{
        borderWidth: 2,
        borderRadius: 12,
        width: '90%',
        alignSelf: 'center',
        height: 47,
        paddingLeft: 40,
        fontSize: 16,
        // marginTop: 10
        backgroundColor: 'white',
        borderColor: 'white',
        color:'#04103A'
    },
    bold: {
        fontFamily: 'OpenSans-SemiBold'
    },
    medium:{
        fontFamily: 'OpenSans-Medium'
    }
});

export const customColors = {
    primary: '#1e88e5',
    light: '#6ab7ff',
    dark: '#005cb2',
    white: 'white'
};