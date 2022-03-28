/*
const idadeMinima = 18
const idadeCliente = 16


if (idadeCliente >= idadeMinima) {
  console.log('Cerveja!')
} else {
  console.log('suco')
}


console.log(idadeCliente >= idadeMinima ? 'cerveja' : 'suco')
*/

const nome = 'Leo'
const idade = 23
const bebidaMaior = 'cerveja'
const bebidaMenor = 'suco'

const pedido = `${nome} diz: "por favor, quero beber ${
  idade >= 18 ? bebidaMaior : bebidaMenor
}"`
console.log(pedido)
