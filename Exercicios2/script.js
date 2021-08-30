let menuLateral = document.querySelector('.menuLateral')
let textoBtn = document.querySelector('.btn')
console.log(textoBtn)
let flag = false

function entrarFechar(){
  if (flag === true){
    flag = false
    menuLateral.classList.remove('teste') 
    textoBtn.innerText = 'Entrar'
  }
  else{
    flag =true
    menuLateral.classList.add('teste')    
    textoBtn.innerText = 'Fechar'
    
  }
}