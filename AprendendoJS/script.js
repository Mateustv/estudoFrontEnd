function darNome(){
  let nome = prompt("Qual é seu nome ?")
  let idade = prompt("Qual é sua idade ?")

  if(nome === '' || idade === ''){
    window.alert('Campos invalidos')
    return
  }


  let idadeint = parseInt(idade)
  let maiorOuMenor

  if (idadeint >= 18 ){
    maiorOuMenor = 'maior'
  } 
  else{
    maiorOuMenor = 'menor'
  }

  let mensagemPersonalizada = ''

  if(nome === 'Thomas Jeferson' || nome === 'thomas jeferson'){
    mensagemPersonalizada = 'Você é personagem do filme The Matrix!'
  }

  let mensagem = `ola ${nome} seja bem vindo, voce é ${maiorOuMenor}  de idade!`

  document.querySelector('#title').innerHTML = mensagem
  document.querySelector('#description').innerHTML = mensagemPersonalizada
}

function tabuda() {
  let tabuada = prompt('Qual tabuda voce quer ?')

  for (let i = 0; i<=100; i++ ){
    document.write(i, ' x ', tabuada, ' = ', i*tabuada,'<br>')
  }
}

let listaAtores = [
  {
    nome: 'Keanu Reeves',
    personagem: 'Neo',
    filme: 'The Matrix',
  },

  {
    nome: 'David Prowse',
    personagem: 'Darth Vader',
    filme: 'Star Wars Episódios IV-VI',
  },

  {
    nome: 'Bruce Wayne',
    personagem: 'Batman',
    filme: 'Batman - O Início'
  },
]

let textoCompleto = ''
let listaDeNomes = ''
let lsitaDePersonagens = ''
let listaDeFilmes = ''

for (lista of listaAtores){
     textoCompleto += `
     <li>
      <h2>${lista.nome}</h2>
      <p>Que interpreta o personagem ${lista.personagem}</p>
      <p>do filme ${lista.filme}</p>
    </li>`
}
document.querySelector('#ok').innerHTML = textoCompleto