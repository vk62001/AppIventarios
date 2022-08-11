import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { appTheme, customColors } from '../theme/appTheme';

export const ProductCount = (props:any) => {

  const {route, navigation} = props;
  const {item} = route.params;
  const [quantity, setQuantity] = useState<number>(0);
  const [total, setTotal] = useState<number>(item.cantidad)
  console.log(item)


  const onChangeQuantity = (number: number) => {
    if(isNaN(number)){
      setQuantity(0);
      return
    }
    console.log(quantity, '-' , number)
    const qtyTemp =  (+quantity + +number);
    
    setQuantity(qtyTemp)
    setTotal(+qtyTemp + +item.cantidad)
  };

  const onChangeQuantityText = (e: any) => {
    console.log(e.nativeEvent.text, '-', typeof(item.decimales))
    let numTemp;
    if(item.decimales){
      console.log('entra decimal')
      numTemp = parseFloat(e.nativeEvent.text);
    }else{
      console.log(' no entra a decimal')
      numTemp = parseInt(e.nativeEvent.text);
    }
    onChangeQuantity(numTemp);
  }

  useEffect(()=>{
    navigation.setOptions({
      title: item.descripcion.slice(0, 10)
    })
  },[])

  return (
    <View style={styleCount.container}>
      <Text style={styleCount.title}>{item.descripcion}</Text>
      <View style={styleCount.changeData}>
        <TouchableOpacity
          style={styleCount.btnQty}
          onPress={()=>onChangeQuantity(-1)}
        >
          <Text style={{color: customColors.white}}>-</Text>
        </TouchableOpacity>
        <TextInput 
          keyboardType = 'numeric'
          value={quantity.toString()}
          style={{...appTheme.input, width: '50%', textAlign:'center' }}
          maxLength={4}
          onChange={(text)=>onChangeQuantityText(text)}
        />
        <TouchableOpacity
          style={styleCount.btnQty}
          onPress={()=>onChangeQuantity(+1)}
          >
            <Text style={{color: customColors.white}}>+</Text>
          </TouchableOpacity>
      </View>
      <View style={styleCount.sum}>
          <View style={styleCount.onDate}>
            <Text style={[appTheme.colorPrimary, appTheme.medium]}>Conteo</Text>
            <Text style={[appTheme.colorPrimary, appTheme.medium]}>{item.cantidad}</Text>
          </View>
          <View style={styleCount.onDate}>
            <Text style={[appTheme.colorLigth, appTheme.medium]}>Actual</Text>
            <Text  style={[appTheme.colorLigth, appTheme.medium]}>{quantity}</Text>
          </View>
          <View style={styleCount.onDate}>
            <Text style={[appTheme.colorDark, appTheme.bold]}>Total</Text>
            <Text style={[appTheme.colorDark, appTheme.bold]}>{total}</Text>
          </View>
      </View>
      <TouchableOpacity
        style={styleCount.btnSave}
      >
        <Text style={styleCount.btnSaveText}> Guardar</Text>
      </TouchableOpacity>
    </View>
  )
}


const styleCount =  StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title:{
    fontSize: 20,
    fontFamily: 'OpenSans-SemiBold',
    color: customColors.dark,
    marginBottom:20,
    textAlign: 'center',
    width: '90%',
    alignSelf: 'center'
  },
  changeData : {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    alignSelf: 'center'
  },
  btnQty:{
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: customColors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btnSave:{
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: customColors.dark,
    color: 'white',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btnSaveText:{
    color: 'white',
    fontFamily: 'OpenSans-SemiBold',
  },
  sum:{
    width: '50%'
  },
  onDate:{
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection:'row',
    marginTop: 20,
  }
})