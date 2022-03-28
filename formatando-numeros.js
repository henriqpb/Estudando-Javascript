// EXEMPLO FORMATANDO NUMEROS NO JS

function ganhoPorHora1(salario, horasTrabalhadasNoMes) {
  const salarioHora = salario / horasTrabalhadasNoMes

  return salarioHora
}

console.log(ganhoPorHora1(3000, 176))

// Usando Math.round() retorna o valor de um número arredondado para o inteiro mais próximo

function ganhoPorHora2(salario, horasTrabalhadasNoMes) {
  const salarioHora = salario / horasTrabalhadasNoMes

  return Math.round(salarioHora)
}

console.log(ganhoPorHora2(3000, 176))

// Usando .toFixed() controla o número de casas decimais após a vírgula, o método .toFixed() arredonda o número para cima. ponto importante de se observar é que seu retorno será uma string representando o número.

function ganhoPorHora3(salario, horasTrabalhadasNoMes) {
  const salarioHora = salario / horasTrabalhadasNoMes

  const total = salarioHora.toFixed(2)

  return total
}

console.log(ganhoPorHora3(3000, 176))

// Usando o método .toLocaleString()

function ganhoPorHora4(salario, horasTrabalhadasNoMes) {
  const salarioHora = salario / horasTrabalhadasNoMes

  const formatado = salarioHora.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  return formatado
}

console.log(ganhoPorHora4(3000, 176))

//Math.ceil() que retorna o maior número inteiro que é maior que o número passado, por exemplo Math.ceil(11.123), o valor fica 12

//Math.floor() que retorna o menor número inteiro que é menor que o número passado, por exemplo Math.floor(11.789), o valor fica 11
