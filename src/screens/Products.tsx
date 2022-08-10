
import React, { useContext, useEffect, useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { DataContext } from '../context/data-context';
import { Input } from '../components/Input';
import { productsInventory } from '../data/productsInventory';
import { appTheme, customColors } from '../theme/appTheme';


export const Products = (props:any) => {

  const {navigation} = props;
  console.log(navigation)
  const {products, getProducts} = useContext(DataContext);
  const [productsTemp, setProductsTemp] = useState<any>(undefined);
  
  useEffect(()=>{
    getProducts(productsInventory);
    setProductsTemp(productsInventory);
  },[])


  const renderProducts = ({item, index}:any) =>(
    <TouchableOpacity
      onPress={()=>navigation.navigate('ProductCount', {
        item: item
      })}
      style={styleProducts.item}
    >
      <Text style={styleProducts.index}>{index+1}</Text>
      <Text style={styleProducts.description}>{item.descripcion}</Text>
      <Text style={styleProducts.cantidad}>{item.cantidad}</Text>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView>
      <Input />
    <View
      style={{width: '90%', alignSelf: 'center'}}
    >
      <FlatList 
        data={productsTemp}
        renderItem={renderProducts}
        keyExtractor={item => item.folio.toString()}
      />
    </View>
    </SafeAreaView>
  )
}


const styleProducts = StyleSheet.create({
  item:{
    flex: 1,
    display:'flex',
    flexDirection:'row',
    marginVertical: 10,
    backgroundColor: 'white',
    padding: 20, 
    borderRadius: 12,
    justifyContent: 'space-between',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '98%',
    alignSelf: 'center'
  },
  index: {
    width:'10%',
    color: customColors.primary,
    fontFamily: 'OpenSans-Medium',
    fontSize: 10
  },
  description: {
    width: '80%',
    color: customColors.primary,
    fontFamily: 'OpenSans-Medium',
    fontSize: 10
  },
  cantidad: {
    width: '10%',
    color: customColors.primary,
    fontFamily: 'OpenSans-Medium',
    fontSize: 10
  },

})