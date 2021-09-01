const formularioOk = document.forms.formulario
const trocaBotao = document.forms.formulario.valeu
const trocar = document.forms.formulario.carregando

console.log(formularioOk)

function deuCerto(msg){
  const formulario = document.forms.formulario
  formulario.classList.add('ok')
  const textoNoP = document.querySelector('#textos')
  textoNoP.innerText = msg
}

resolver().then(deuCerto)

function resolver (){
  return new Promise((resolve, reject) => {
    formularioOk.addEventListener('submit', event => {
      event.preventDefault();
      trocar.classList.remove('ok')
      trocaBotao.classList.add('ok')                  
      setTimeout(function() {
        const textodigitado = document.forms.formulario.texto.value
        resolve(textodigitado)
      },10000)     
      })
  })
}

