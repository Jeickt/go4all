import React from 'react'
import { View } from 'react-native'

import CM from './CaixaModelo'
import Estilo from '../estilos/estilo'

export function Horizontal(props) {

  return (
    <View style={Estilo.sentidoCaixasLinha}>
      {props.cx1.cont === 0 ? (<CM cont={0} />) :
        (<CM cont={props.cx1.cont} cor={props.cx1.cor} />)}
      {props.cx2.cont === 0 ? (<CM cont={0} />) :
        (<CM cont={props.cx2.cont} cor={props.cx2.cor} />)}
      {props.cx3.cont === 0 ? (<CM cont={0} />) :
        (<CM cont={props.cx3.cont} cor={props.cx3.cor} />)}
    </View>
  )
}

export function Vertical(props) {

  return (
    <View style={Estilo.sentidoCaixasColuna}>
      {props.cx1.cont === 0 ? (<CM cont={0} />) :
        (<CM cont={props.cx1.cont} cor={props.cx1.cor} />)}
      {props.cx2.cont === 0 ? (<CM cont={0} />) :
        (<CM cont={props.cx2.cont} cor={props.cx2.cor} />)}
      {props.cx3.cont === 0 ? (<CM cont={0} />) :
        (<CM cont={props.cx3.cont} cor={props.cx3.cor} />)}
    </View>
  )
}