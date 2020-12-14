import React from 'react'
import { Text, View } from 'react-native'
import Estilo from './estilo'

export default props =>
  <View style={Estilo.fundoObjetivo}>
    {props.b ?
      <Text style={Estilo.txtPrincipal}>Tente encontrar todas as cores</Text> :
      <Text style={Estilo.txtPrincipal}>Você encontrou todas as cores!</Text>}
  </View>