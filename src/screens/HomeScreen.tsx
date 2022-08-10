import React, { useEffect } from 'react'
import { View, Text, StatusBar, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { appTheme } from '../theme/appTheme'
import { typesInventory } from '../data/typesInventory';

export const HomeScreen = (props:any) => {

    const {navigation} = props;
    
    const goToPruducts = () =>{
        console.log('enrta')
        navigation.navigate('Products')
    }
    
    const renderCategories = () =>{
        return typesInventory.map((item: any, index: number)=>{
            return(
                <TouchableOpacity
                    key={ index.toString()}
                    onPress={goToPruducts}
                    
                    style={[homeStyle.item, appTheme.container]}
                  >
                    <View style={homeStyle.description}>
                            <Text style={homeStyle.title}>{item.description}</Text>
                            <Text style={homeStyle.noItems}>{item.items} Items</Text>
                    </View>
                    <View style={homeStyle.buttonRight}>
                            <Image 
                                source={require('../../assets/images/arrowRight.png')}
                                style={homeStyle.imageRight}
                            />
                    </View>
                  </TouchableOpacity>
            )
        })
    }


  return (
    <>
    <StatusBar />
        <SafeAreaView
        >
          <ScrollView
              contentInsetAdjustmentBehavior="automatic"
          >
              <View
                style={[homeStyle.header, appTheme.bgPrimary]}
              > 
              </View>
              <View
                    style={[homeStyle.cardContainer]}
                >
                  {renderCategories()}
            </View>
          </ScrollView>
      </SafeAreaView></>
  )
}



const homeStyle = StyleSheet.create({
    header:{
        width: '100%',
        minHeight: 100,
        height: '15%',
    },
    cardContainer:{
        marginTop:-55 
    },
    item:{
        flex: 1,
        flexDirection:'row',
        backgroundColor:'white',
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 27
    },
    description:{
        width: '90%',
        padding: 20
    },
    buttonRight:{
        width: 40,
        height: 40,
        borderRadius: 40,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        right:0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    imageRight:{
        width: 25,
        height: 25,
    },
    title:{
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 22,
        marginBottom: 10,
        fontWeight: 'bold'
    },
    noItems:{
        fontFamily: 'OpenSans-Medium',
        color: '#b1b1b1'
    }
})
