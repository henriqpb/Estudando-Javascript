// parâmetros de função

/*
function soma(num1, num2) {
  return num1 + num2
}

console.log(soma(2, 2))
console.log(soma(245, 20))
console.log(soma(-500, 60))
*/

// parâmetros x argumentos

function nomeIdade(nome, idade) {
  return `meu nome é ${nome} e minha idade é ${idade}`
}

console.log(nomeIdade(40, 'Juliana'))

function soma(num1, num2) {
  return num1 + num2
}

function multiplica(num1 = 1, num2 = 1) {
  return num1 * num2
}

console.log(multiplica(soma(4, 5), soma(3, 3)))
console.log(multiplica(soma(4, 5)))

//TIPOS DE FUNÇÃO

// Função sem retorn e sem parâmetro

function cumprimentar() {
  console.log('oi gente!')
}

cumprimentar()

// Função sem retorn e com parâmetro

function cumprimentaPessoa(pessoa) {
  console.log(`oi, ${pessoa}!`)
}

cumprimentaPessoa('Helena')

// Função com retorn e sem parâmetro

function cumprimentar() {
  return 'Oi gente!'
}

function cumprimentaPessoa(nomePessoa) {
  console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
}

cumprimentaPessoa('Paula')

// “Oi gente! Meu nome é Paula”

// Função  com return e mais de um parâmentro

function operacaoMatematica(num1, num2, num3) {
  return num1 + num2 + num3
}

operacaoMatematica(15, 30, 45)

//90
