const texto1 = 'Olá, mundo!'
const texto2 = 'Olá, mundo!'
const senha = 'senha SuperSEgura456'
const stringDeNumeros = '345678'
const citacao = 'Meu nome é '
const meuNome = 'Leo'

// concatenação (+)

console.log(citacao + meuNome)

/*
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)
*/

// toLowerCase() METODO converte todos os caracteres da string informada para letras minúsculas

const cidade = 'belo horizonte'
const input = 'Belo Horizonte'

const inputMinusculo = input.toLowerCase()

console.log(cidade === input)
console.log(cidade === inputMinusculo)

// .length PROPRIEDADE

const senha2 = 'minhaSenhablibosiaudhaoisdh'

console.log(senha2.length)
