/*
const lukeLogin = () => {
  let array = []
  for (i = 0; i < 90000; i++) {
    array.push(i)
  }
  return 'Luck logado com sucesso'
}

const leilaLogin = () => {
  let array = []
  for (i = 0; i < 90000; i++) {
    array.push(i)
  }
  return 'Leila logada com sucesso'
}

lukeLogin()
leilaLogin()
*/

// Conceito DRY, don't repeat yourself

/*
const usuarioLogin = pessoa => {
  let array = []
  for (i = 0; i < 90000; i++) {
    array.push(i)
  }
  return `${pessoa} logou com sucesso no sistema`
}

usuarioLogin('Luke')
*/

//higher order function

/*
const acesso = nome => {
  return `${nome} logou com sucesso no sistema!`
}

const usuarioLogin = nome => {
  let array = []
  for (i = 0; i < 90000; i++) {
    array.push(i)
  }
  return acesso(nome)
}

usuarioLogin('Luke')
*/

//OUTRO EXEMPLO login para cargo diretora

/*
const acesso = (nome) => {
  return `${nome} logou com sucesso no sistema`
}

const usuarioLogin = (nome) => {
  let array = []
  for(i=0; i<90000; i++){
    array.push(i)
  }
  return acesso(nome)
}

const diretoriaLogin = (nome) => {
  let array = []
  for(i=0; i<900000; i++){
    array.push(i)
  }
  return acesso(nome)
}

diretoriaLogin("Leila")

// adicionando login para outros cargos

const autentica = (cargo) => {
  let array = []
  for(i=0; i < cargo; i++){
    array.push(i)
  }
  return true
}
*/

// Refatorando a função login()

const acesso = nome => {
  return `${nome} logou com sucesso no sistema`
}

const autentica = cargo => {
  let array = []
  for (i = 0; i < cargo; i++) {
    array.push(i)
  }
  return true
}

const login = (pessoa, autentica) => {
  if (pessoa.cargo === 'funcionario') {
    autentica(90000)
  } else if (pessoa.cargo === 'diretoria') {
    autentica(900000)
  }
  return acesso(pessoa.nome)
}

/*
js
login({cargo: `diretoria`, nome: `Leia`}, autentica)
*/

/*
a higher order function login compara o valor da chave cargo no if...else e executa a função autentica passando como parâmetro o valor 900000 pois pessoa.cargo === ‘diretoria’;
a função autentica é executada e o valor 900000 é utilizado no loop for. Uma vez iniciado o loop, o JavaScript só continua a executar as outras linhas da função após o término da iteração.
Com o término do loop, a função autentica executa sua última linha e vai retornar true. Esse valor é passado de volta para a função autentica, que continua seu fluxo normal até a última linha, na qual chama a função acesso passando como parâmetro o valor da chave nome e recebendo de volta o retorno de acesso, uma string com o texto ”Leia logou com sucesso no sistema!”
As funções acesso e autentica são “chamadas de volta” (ou, em inglês, called back) pela função login; esse tipo de função é chamada de “função callback”, sendo a função login a de ordem maior na hierarquia, ou seja, a ”higher order function.

High order functions são funções que recebem uma função ou mais como argumento, retornando outra função;
Isso permite a composição de funções, ou seja, ter funções pequenas que compõem outras funções maiores;
funções que são chamadas dentro de outra são chamadas callback functions, pois são “called back” (“chamadas de volta” em uma tradução livre) dentro da função onde estão compostas.


Alguns dos métodos mais modernos de array do JavaScript, como map(), forEach(), filter e reduce(), entre outros, utilizam o conceito de callback functions em sua sintaxe.
*/
