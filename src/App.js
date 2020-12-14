import React, { Component, useState } from 'react';
import { Button, SafeAreaView, Text, View } from 'react-native';

import Circulo from './components/Circulo';
import CM from './components/CaixaModelo';
import Estilo from './components/estilo';
import Objetivo from './components/Objetivo';
import Recomeco from './components/Recomeco';

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
];

export default props => {
  let [corColorir, setCor] = useState('#FFFFFF');
  const color = (cor) => setCor((corColorir = cor));

  function colorir() {
    let tempo = ((Date.now() % 100) + Math.random()).toFixed(2)
    /**Este mecanismo mantém a proposição do exercício e adiciona a aleatoriedade nas casas decimais 
    para gerar a igualdade de condições de resultado entre as cores **/
    caixas.find(caixa => tempo <= caixa.limite).cont++

    let corFinal = caixas.find(caixa => tempo <= caixa.limite).cor
    let corInicial = corColorir
    let corFAr = [parseInt((corFinal[1] + corFinal[2]), 16), parseInt((corFinal[3] + corFinal[4]), 16), parseInt((corFinal[5] + corFinal[6]), 16)]

    if (corInicial === corFinal) {
      color(corInicial)
    } else {
      while (corInicial !== corFinal) {
        let corIAr = [parseInt((corInicial[1] + corInicial[2]), 16), parseInt((corInicial[3] + corInicial[4]), 16), parseInt((corInicial[5] + corInicial[6]), 16)]
        if (corIAr[0] > corFAr[0]) { corIAr[0]-- } else if (corIAr[0] < corFAr[0]) { corIAr[0]++ }
        if (corIAr[1] > corFAr[1]) { corIAr[1]-- } else if (corIAr[1] < corFAr[1]) { corIAr[1]++ }
        if (corIAr[2] > corFAr[2]) { corIAr[2]-- } else if (corIAr[2] < corFAr[2]) { corIAr[2]++ }
        corInicial = `#${hexadecimal(corIAr[0])}${hexadecimal(corIAr[1])}${hexadecimal(corIAr[2])}`
        setTimeout(movimento, 2)
      }
    }

    function hexadecimal(num) {
      let cod = num.toString(16)
      if (cod.length === 1) {
        cod = "0" + cod;
      }
      cod = cod.toUpperCase()
      return cod
    }

    function movimento() { return color(corInicial) }
  }

  function recomecar() {
    color('#FFFFFF')
    caixas.forEach((caixa) => {
      caixa.cont = 0
    })
  }

  return (
    <SafeAreaView style={Estilo.fundoGeral}>
      <Objetivo />
      <View style={{ flexGrow: 1, backgroundColor: corColorir, justifyContent: "center" }}>
        <View style={Estilo.sentidoCaixasLinha}>
          {caixas[0].cont === 0 ? (
            <CM cont={0} />
          ) : (
              <CM cont={caixas[0].cont} cor={caixas[0].cor} />
            )}
          {caixas[1].cont === 0 ? (
            <CM cont={0} />
          ) : (
              <CM cont={caixas[1].cont} cor={caixas[1].cor} />
            )}
          {caixas[2].cont === 0 ? (
            <CM cont={0} />
          ) : (
              <CM cont={caixas[2].cont} cor={caixas[2].cor} />
            )}
        </View>
        <View style={Estilo.sentidoCaixasLinha}>
          <View style={Estilo.sentidoCaixasColuna}>
            {caixas[11].cont === 0 ? (
              <CM cont={0} />
            ) : (
                <CM cont={caixas[11].cont} cor={caixas[11].cor} />
              )}
            {caixas[10].cont === 0 ? (
              <CM cont={0} />
            ) : (
                <CM cont={caixas[10].cont} cor={caixas[10].cor} />
              )}
            {caixas[9].cont === 0 ? (
              <CM cont={0} />
            ) : (
                <CM cont={caixas[9].cont} cor={caixas[9].cor} />
              )}
          </View>
          <View style={Estilo.centro}>
            <View style={{ height: 270, justifyContent: "center" }}>
              <Circulo />
            </View>
            <View style={{ height: 60, justifyContent: "center" }}>
              {caixas.some((caixa) => {
                return caixa.cont === 0;
              }) ? (
                  <Button color="#000000" title="Colorir" onPress={colorir} />
                ) : (
                  <Text style={Estilo.txtParabens}>
                    {`Parabéns!!!`}
                  </Text>
                )}
            </View>
          </View>
          <View style={Estilo.sentidoCaixasColuna}>
            {caixas[3].cont === 0 ? (
              <CM cont={0} />
            ) : (
                <CM cont={caixas[3].cont} cor={caixas[3].cor} />
              )}
            {caixas[4].cont === 0 ? (
              <CM cont={0} />
            ) : (
                <CM cont={caixas[4].cont} cor={caixas[4].cor} />
              )}
            {caixas[5].cont === 0 ? (
              <CM cont={0} />
            ) : (
                <CM cont={caixas[5].cont} cor={caixas[5].cor} />
              )}
          </View>
        </View>
        <View style={Estilo.sentidoCaixasLinha}>
          {caixas[8].cont === 0 ? (
            <CM cont={0} />
          ) : (
              <CM cont={caixas[8].cont} cor={caixas[8].cor} />
            )}
          {caixas[7].cont === 0 ? (
            <CM cont={0} />
          ) : (
              <CM cont={caixas[7].cont} cor={caixas[7].cor} />
            )}
          {caixas[6].cont === 0 ? (
            <CM cont={0} />
          ) : (
              <CM cont={caixas[6].cont} cor={caixas[6].cor} />
            )}
        </View>
      </View>
      <Recomeco funcao={recomecar} />
    </SafeAreaView>
  );
};
