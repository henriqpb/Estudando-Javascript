//Ordenação de números
var lista = [10, 1, 5, 9, 8, 12, 15]

console.log(lista)

console.log(lista.sort())

//Implementando função de comparação

function comparaNumeros(a, b) {
  if (a == b) {
    return 0
  }
  if (a < b) {
    return -1
  }
  if (a > b) {
    return 1
  }
}

console.log(lista.sort(comparaNumeros))
