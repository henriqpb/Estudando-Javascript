var idade = []

var achou = 'n',
  resp = 's'

var idadeProcurar

for (i = 0; resp == 's'; i++) {
  idade[i] = prompt('Digite uma idade')
  resp = prompt('Deseja continuar? s/n')
}

idadeProcurar = parseInt(prompt('Qual idade deseja procurar?'))

for (i = 0; achou == 'n' && idade.length > i; i++) {
  if (idade[i] == idadeProcurar) {
    achou = 's'
  }
}

if (achou == 'n') {
  alert('Nao consta o cadastro dessa idadae')
} else {
  alert('A idade ' + idadeProcurar + ' está cadastrada na posição ' + i)
}
