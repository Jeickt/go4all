import React from 'react'
import { Button } from 'react-native'

export default props => {

  return (
    <Button
      color="#000000"
      title="Recomeçar"
      onPress={props.funcao}
    />
  )
}