const estados = document.querySelector('#select-estados')
const cidades = document.querySelector('#div-cidades')
const cidadesSelect = {
  sp: ['Jundiaí', 'Campinas', 'Limeira', 'Atibaia'],
  rj: ['Teresópolis', 'Resende', 'Maricá', 'Macaé'],
}
const colocarCidades = document.querySelector('#select-cidades')
const formulario = document.querySelector('#form-cadastro')

estados.addEventListener('change', function (e){
  const cidadeEscolhida = e.target.value
  let cidadesTroca

  if (cidadeEscolhida === 'sp'){
    cidadesTroca = cidadesSelect.sp  
  }
  else{
    cidadesTroca = cidadesSelect.rj
  }
  let htmlCidades = `<option value=''>-- Selecione a Cidade --</option>`

  cidadesTroca.forEach(function (cidade){
    htmlCidades += `<option>${cidade}</option>`
  })
  
  colocarCidades.innerHTML = htmlCidades
  cidades.classList.add('visible')
})

formulario.addEventListener('submit', function(evento){
  evento.preventDefault()

  cidadeSelecionda = document.forms['form-cadastro']['cidade']
  estadoSeleciondo = document.forms['form-cadastro']['estado']
  flag = false
  
  if(!estadoSeleciondo.value){
    flag = true
    estadoSeleciondo.classList.add('inputError')

    let span = estadoSeleciondo.nextSibling.nextSibling
    span.innerText = 'Selecione o estado'
  }else{
    estadoSeleciondo.classList.remove('inputError')
    let span = estadoSeleciondo.nextSibling.nextSibling
    span.innerText = ''
  }
  if(!cidadeSelecionda.value){
    flag = true
    cidadeSelecionda.classList.add('inputError')

    let span = cidadeSelecionda.nextSibling.nextSibling
    span.innerText = 'Selecione a cidade'
  }else{
    cidadeSelecionda.classList.remove('inputError')
    let span = cidadeSelecionda.nextSibling.nextSibling
    span.innerText = ''
  }

  if(!flag){
    formulario.submit()
  }

})