let button = document.querySelector('.btn')
let textoAtivo = document.querySelector('.usuario')

function ativarTag (){
  textoAtivo.classList.add('ativo')
  setTimeout(function(){
    textoAtivo.classList.remove('ativo')
  },2000)
}

button.addEventListener('click',ativarTag)