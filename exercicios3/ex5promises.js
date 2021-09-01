
function deuCerto(msg){
  console.log(msg)
}

resolver().then(deuCerto)

function resolver (){
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve('Deu certo')
    },10000)
  })
}