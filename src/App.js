import React, { Component } from 'react'
import { Button, SafeAreaView, Text, View } from 'react-native'

import Circulo from './components/Circulo'
import Estilo from './estilos/estilo'
import { Horizontal, Vertical } from './components/Lados'
import Objetivo from './components/Objetivo'
import Recomeco from './components/Recomeco'

const caixas = [
  { cor: '#DD0099', cont: 0, limite: 8.33 },
  { cor: '#DD0000', cont: 0, limite: 16.66 },
  { cor: '#DD7700', cont: 0, limite: 25 },
  { cor: '#DDDD00', cont: 0, limite: 33.33 },
  { cor: '#77DD00', cont: 0, limite: 41.66 },
  { cor: '#00DD00', cont: 0, limite: 50 },
  { cor: '#00DD99', cont: 0, limite: 58.33 },
  { cor: '#00DDFF', cont: 0, limite: 66.66 },
  { cor: '#0077FF', cont: 0, limite: 75 },
  { cor: '#0030FF', cont: 0, limite: 83.33 },
  { cor: '#7720FF', cont: 0, limite: 91.66 },
  { cor: '#DD10FF', cont: 0, limite: 100 },
]

export default class Cor extends Component {

  state = {
    corColorir: '#FFFFFF'
  }

  colorir = () => {
    // Função principal, altera o estado da aplicação
    let tempo = ((Date.now() % 100) + Math.random()).toFixed(2)
    /**Este mecanismo mantém a proposição do exercício e adiciona a aleatoriedade nas casas decimais 
    para gerar a igualdade de condições de probabilidade correspondentes aos limites das cores **/

    caixas.find(caixa => tempo <= caixa.limite).cont++

    let corFinal = null
    if (!(caixas.some((caixa) => { return caixa.cont === 0 }))) {
      corFinal = '#EFB810'
    } else { corFinal = caixas.find(caixa => tempo <= caixa.limite).cor }

    let corInicial = this.state.corColorir
    let corFAr = [this.decimal(corFinal.substring(1, 3)),
    this.decimal(corFinal.substring(3, 5)),
    this.decimal(corFinal.substring(5, 7))]

    if (corInicial === corFinal) {
      this.movimento(corInicial)
    } else {
      while (corInicial !== corFinal) {
        let corIAr = [this.decimal(corInicial.substring(1, 3)),
        this.decimal(corInicial.substring(3, 5)),
        this.decimal(corInicial.substring(5, 7))]

        if (corIAr[0] > corFAr[0]) { corIAr[0]-- } else if (corIAr[0] < corFAr[0]) { corIAr[0]++ }
        if (corIAr[1] > corFAr[1]) { corIAr[1]-- } else if (corIAr[1] < corFAr[1]) { corIAr[1]++ }
        if (corIAr[2] > corFAr[2]) { corIAr[2]-- } else if (corIAr[2] < corFAr[2]) { corIAr[2]++ }

        corInicial = `#${this.hexadecimal(corIAr[0])}${this.hexadecimal(corIAr[1])}${this.hexadecimal(corIAr[2])}`
        this.movimento(corInicial)
        // Não consegui renderizar gradualmente a cor de fundo, como esperava
      }
    }
  }

  decimal = (string) => { return parseInt(string, 16) }
  // Transforma número hexadecimal em decimal

  hexadecimal = (num) => {
    // Transforma número decimal em haxadecimal
    let cod = num.toString(16)
    if (cod.length === 1)
      cod = '0' + cod
    return cod.toUpperCase()
  }

  movimento = (cor) => { this.setState({ corColorir: cor }) }
  // Atualiza o estado da aplicação

  recomecar = () => {
    // Recomeça a aplicação
    this.setState({ corColorir: '#FFFFFF' })
    caixas.forEach((caixa) => { caixa.cont = 0 })
  }

  render = () => {
    // Renderiza a aplicação
    return (
      <SafeAreaView style={Estilo.geral}>
        <Objetivo b={caixas.some((caixa) => { return caixa.cont === 0 })} />
        <View style={{ flexGrow: 1, backgroundColor: this.state.corColorir, justifyContent: 'center' }}>
          <Horizontal cx1={caixas[0]} cx2={caixas[1]} cx3={caixas[2]} />
          <View style={Estilo.sentidoCaixasLinha}>
            <Vertical cx1={caixas[11]} cx2={caixas[10]} cx3={caixas[9]} />
            <View style={Estilo.centro}>
              <View style={{ height: 270, justifyContent: 'center' }}>
                <Circulo />
              </View>
              <View style={{ height: 60, justifyContent: 'center' }}>
                {caixas.some((caixa) => { return caixa.cont === 0 })
                  ? (<Button color='#000000' title='Colorir' onPress={this.colorir} />)
                  : (<Text style={Estilo.txtParabens}>{`Parabéns!!!`}</Text>)}
              </View>
            </View>
            <Vertical cx1={caixas[3]} cx2={caixas[4]} cx3={caixas[5]} />
          </View>
          <Horizontal cx1={caixas[8]} cx2={caixas[7]} cx3={caixas[6]} />
        </View>
        <Recomeco funcao={this.recomecar} />
      </SafeAreaView>
    )
  }

}
