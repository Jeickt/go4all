import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  fundoGeral: {
    flexGrow: 1,
    backgroundColor: '#000000',
  },
  fundoObjetivo: {
    backgroundColor: '#000000',
    justifyContent: "center",
    alignItems: "center",
  },
  fundoRecomeco: {
    backgroundColor: '#000000',
  },
  sentidoCaixasColula: {
    justifyContent: "center",
    alignItems: "center",
  },
  sentidoCaixasLinha: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  centro: {
    justifyContent: "space-around",
    alignItems: "center",
  },
  circulo: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#31BB42',
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  txtPrincipal: {
    color: '#FFFFFF',
    fontSize: 24,
    margin: 10,
  },
  txtSecundario: {
    fontSize: 20,
    fontWeight: "bold",
  },
  txt4All: {
    color: '#191919',
    fontSize: 28,
    fontWeight: "bold",
  },
  txtParabens: {
    fontSize: 20,
    fontWeight: "bold",
  }
})