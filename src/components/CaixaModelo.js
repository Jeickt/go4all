import React from 'react'
import { Text, View } from 'react-native'
import Estilo from './estilo';

export default props => {
  const lado = 80;

  return (
    <View style={{
      height: lado,
      width: lado,
      backgroundColor: props.cor || '#151515',
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      borderColor: "#000000",
      borderWidth: 4,
      margin: 17
    }}
    ><Text style={Estilo.txtSecundario}>{props.cont}</Text></View>
  )
}