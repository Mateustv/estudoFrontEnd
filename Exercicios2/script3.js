const btnIr = document.querySelector('#btnIr')
const btnParar = document.querySelector('#btnParar')
const cont =  document.querySelector('#contador')
let i = 0

let  diminuire
let  aumentare


btnParar.onclick = function() {
  clearInterval(aumentare)
  
  btnIr.classList.remove('aumentar')
  btnParar.classList.add('diminuir')
    
  diminuire = setInterval(function(){
    i--
    cont.innerText = i
    },500)
  }

btnIr.onclick = function(evento) {
  clearInterval(diminuire)

  btnParar.classList.remove('diminuir')
  btnIr.classList.add('aumentar')
  
  aumentare = setInterval(function(){
    i++
    cont.innerText = i
  },500)
  
}