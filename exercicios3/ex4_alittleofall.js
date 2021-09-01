const alunos = [
  {
    nome: 'Maria',
    sobrenome: 'da Silva',
    nota: 10,
  },
  {
    nome: 'José',
    sobrenome: 'Moreira',
    nota: 4,
  },
  {
    nome: 'Paulo',
    sobrenome: 'Henrique',
    nota: 7,
  },
  {
    nome: 'Sara',
    sobrenome: 'Souza',
    nota: 5,
  },
  {
    nome: 'Clara',
    sobrenome: 'Barbosa',
    nota: 9,
  },
  {
    nome: 'Rodrigo',
    sobrenome: 'Barros',
    nota: 4,
  },
  {
    nome: 'Renato',
    sobrenome: 'Barros',
    nota: 7,
  },
  {
    nome: 'Andrea',
    sobrenome: 'Batista',
    nota: 6,
  },
  {
    nome: 'Carla',
    sobrenome: 'Campos',
    nota: 3,
  },
]

const formulario = document.querySelector('#formulario')
const mensagem = document.querySelector('#mensagem') 
const listAluno = document.querySelector('#listaAlunos') 

formulario.onsubmit = (event) =>{
  event.preventDefault();
  const notaDigitada = document.forms.formulario.textoNota.value
  filtrarNotas(notaDigitada)
}

function filtrarNotas (notas) {
  const qtdAluno = alunos.reduce((acc, curr) => {
    if(curr.nota == notas) {
      acc += `
        <li>
          ${curr.nome} ${curr.sobrenome} | Nota: ${curr.nota}
        </li>      
      ` 
    }
    return acc
  }, '') 

  if(qtdAluno){
    listAluno.innerHTML = qtdAluno
    mensagem.innerHTML = ''
  }else{
    mensagem.innerHTML = 'Nenhum aluno tirou essa nota.'
    listAluno.innerHTML = ''
  }
  document.forms.formulario.textoNota.value = ''
}