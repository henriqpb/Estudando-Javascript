var nome = prompt('Qual o seu nome?')
var idade = prompt('Quantos anos você tem?')
var linguagem = prompt('Qual linguagem de programação você está estudando?')

var fraseUm =
  'Olá ' +
  nome +
  ', você tem ' +
  idade +
  ' anos e já está aprendendo ' +
  linguagem +
  '!'

var fraseDois = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`

console.log(fraseUm)

console.log(fraseDois)

var gostaDeEstudar = prompt(
  `Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO`
)

if (gostaDeEstudar == 1) {
  console.log('Muito bom! Continue estudando e você terá muito sucesso')
} else if (gostaDeEstudar == 2) {
  console.log('Ahh que pena... Já pensou em aprender outras linguagens?')
}
