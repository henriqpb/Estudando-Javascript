/*
var a = 0
var b = 0

if (a >= 0 && b != 2) {
  alert('olá')
} else {
  alert('tchau')
}
*/

/*
var a=1
var b=-1
var c=1
var d=-1

if (a >= c) {
  if (b != a) {
    if (c > d) {
      if (d <= 4) {
        alert('você tem certeza?')
      } else {
        alert('posso perguntar?')
      }
    }
  }
}

alert('certa resposta')
*/

/*
var nome = []
for(i=0; i<10; i++){
  nome[0] = prompt("Insira seu nome")
}

console.log(nome)
*/

/*
var x = []
var n = 1
for (i = 0; i < 5; i++) {
  x[i] = n * n
}

console.log(x)
*/

var b = 3
do {
  for (var a = 1; a < 6; a++) {
    a = a + 2
    b = a * b
  }
} while (b < 10)

console.log('A = ' + a)
console.log('B = ' + b)
