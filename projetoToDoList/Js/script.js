const Main = {
  
  init: function() {
    this.cacheSelectors()
    this.bindEvents()
  },
  cacheSelectors: function(){                                                    //Seleciona minhas tags
    this.$checkButtons = document.querySelectorAll('.check')                     // colocando os $ para identificar que são tags
    this.$inputTask = document.querySelector("#inputTask")                       // Selecionando o input(footer)
    this.$listValue = document.querySelector('#list')                            // Selecionando a lista
    this.$buttonRemove = document.querySelectorAll('.remove')                    // Selecionando o botão de remover
  },
  

  bindEvents: function(){                                                       //Dizer o que vou fazer com cada Tag selecionada
    const self = this
    this.$checkButtons.forEach(function(button){                                // para cada bolinha selecionada
      button.addEventListener('click', self.Events.checkButton_click)           //Quando clicar na bolinha pegar a função em Events
    });
    this.$inputTask.addEventListener('keypress',self.Events.inputTask_keypress.bind(this)); //Ao apertar uma tecla execute a função
    this.$buttonRemove.forEach(function(button){                                            // para cada clicle no botão de remover execute a funçào
      button.addEventListener('click', self.Events.remove_button)
    })
  },

  Events:{                                                                      //Criar as funções para ser utilizadas
    checkButton_click: function (e){                                            // definindo a função
      const li = e.target.parentElement                                         // Selecionado o pai do target que no caso é o li
      const isDone = li.classList.contains('done')                             // Verficando se a classe done esta na tag li
      if(!isDone){
        return li.classList.add('done')                                        // Boas praticas, verificar primeiro o contrario e retornar se for verdadeiro
      }
      li.classList.remove('done')
    },
    inputTask_keypress: function (e){ 
      const key = e.key                                                         //Salvando o nome da tecla precionada
      const value = e.target.value                                              // Salvando os valores das teclas na caixa de input
      // console.log(key)
      if (value === ''){
        return                                                                   // Caso o input esteja vazio não adiconar tarefa
      }
      if(key === 'Enter'){                                                        // Caso tiver e for precionado o botão enter, adicionar a lista com o valor do input 
        this.$listValue.innerHTML += `
          <li>
            <div class="check"></div>            
            <label class="task">
              ${value}
            </label>
            <button class="remove"></button>
          </li>
        `
        e.target.value = ''                                               // deixa o input vazio depois
        this.cacheSelectors()                                             // Chama as funções, porque ao adiconar os itens novos os eventos somem
        this.bindEvents()
      } 
    },
    remove_button: function (e){ 
      const hideLi = e.target.parentElement
      hideLi.classList.add('remove')
      setTimeout(function(){
        hideLi.classList.add('hidden')
      },300)
    }
  }
  
}
Main.init()