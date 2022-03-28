/*
var respostaDeTudo = 42
let idade = 29
const pi = 3.14

{
  var respostaDeTudo = 3.14
  let idade = 42
  const pi = 29
  console.log(respostaDeTudo, idade, pi)
}
console.log(respostaDeTudo, idade, pi)
*/

//Variáveis declaradas com var ou let podem ser reatribuídas. Porém, uma variável declarada com let só pode ser usada no mesmo escopo em que está definida. No caso da declaração const, significa que a variável sempre terá uma referência ao mesmo objeto ou valor primitivo, porque essa referência não pode ser alterada. A referência em si é imutável, mas o valor mantido pela variável não se torna imutável.

//Analise as comparações abaixo e marque aquelas cuja saída no console será verdade.

a = []
b = 20
c = true
d = ''

if (b === 20 && c != false && d == 0) {
  console.log('verdade')
} else {
  console.log('falso')
}

if (a == 0) {
  console.log('verdade')
} else {
  console.log('falso')
}

if (d) {
  console.log('verdade')
} else {
  console.log('falso')
}

if (b == '20') {
  console.log('verdade')
} else {
  console.log('falso')
}
