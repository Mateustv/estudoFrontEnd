const aluno = {
  nome: 'Maria',
  sobrenome: 'da Silva',
  notas: [7, 10, 8, 5, 7, 9],
}
const average = aluno.notas.reduce((grade,student)=>{
  return grade + student
} ,0 )

let text = `A media de ${aluno.nome} foi de ${(average/(aluno.notas.length)).toFixed(2)}`

console.log(text)