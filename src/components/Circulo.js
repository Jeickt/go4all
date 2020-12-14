import React, { Component} from 'react'
import { Text, View } from 'react-native'
import Estilo from './estilo'

export default class Circulo extends Component {
  render() {
    return (
      <View style={Estilo.circulo}>
        <Text style={Estilo.txt4All}>Go 4all</Text>
      </View>
    )
  }
}