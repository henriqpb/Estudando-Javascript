var perguntaInicial = prompt(
  'Qual área gostaria de seguir? Front-End(1) ou Back-End(2)'
)

if (perguntaInicial == 1) {
  console.log('Você está na linha de frente')
  prompt('Quer aprender React(1) ou Vue(2)?')
} else if (perguntaInicial == 2) {
  console.log('Você sentou no fundão da sala')
  prompt('Quer aprender C#(1) ou Java(2)?')
}

var perguntaEspecialista = prompt(
  'Você gostaria de se especializar na área(1) ou seguir se desenvolvendo para se tornar Fullstack(2) ?'
)

if (perguntaEspecialista == 1) {
  console.log('Ser especialista é bom demais')
} else if (perguntaEspecialista == 2) {
  console.log('O FullStack tem que estudar várias coisas')
}

while (perguntaFinal == !'s') {
  var tecnologia = prompt(
    'Quais são as tecnologias nas quais você gostaria de se especializar ou de conhecer?'
  )

  if (tecnologia == !undefined) {
    console.log(`${tecnologia} é muito massa`)
  }

  var perguntaFinal = prompt(
    'Tem mais alguma tecnologia que você gostaria de aprender? s/n'
  )
}
