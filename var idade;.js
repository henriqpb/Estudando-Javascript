var idade

idade = prompt('insira sua idade')
while (idade < 0) {
  idade = prompt('idade invalida. insira novamente')
}

alert('Sua idade é ' + idade)
