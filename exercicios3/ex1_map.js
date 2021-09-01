const alunos = [
  {
    nome: 'Maria',
    sobrenome: 'da Silva',
  },
  {
    nome: 'José',
    sobrenome: 'Moreira',
  },
  {
    nome: 'Paulo',
    sobrenome: 'Henrique',
  },
  {
    nome: 'Pedro',
    sobrenome: 'Souza',
  },]

transformMap = alunos.map(aluno =>{
  return `${aluno.nome} ${aluno.sobrenome}`
})
console.log(transformMap)