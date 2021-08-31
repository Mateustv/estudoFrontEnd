const Main = {
  
  task: [],

  init: function() {
    this.cacheSelectors()
    this.bindEvents()
    this.getStorage()
    this.buildTask()
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
      button.addEventListener('click', self.Events.remove_button.bind(self))
    })
  },
  
  
  getStorage: function (){
    const valueTasks = localStorage.getItem('task')
    if(valueTasks){
      this.task = JSON.parse(valueTasks)
    }else{
      localStorage.setItem('task', JSON.stringify([]))
    }
  },
  

  getTaskHtml: function(task){ 
    return`
      <li>
        <div class="check"></div>            
        <label class="task">
          ${task}
        </label>
        <button class="remove" data-task = "${task}"></button>
      </li>
    `
  },
  
  buildTask: function(){ 
    let html = ''
    this.task.forEach(value => {
      html += this.getTaskHtml(value.task)
    })
    this.$listValue.innerHTML = html

    this.cacheSelectors()
    this.bindEvents()
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
      if (value === ''){
        return                                                                   // Caso o input esteja vazio não adiconar tarefa
      }
      if(key === 'Enter'){                                                        // Caso tiver e for precionado o botão enter, adicionar a lista co 
        this.$listValue.innerHTML += this.getTaskHtml(value) 
        e.target.value = ''                                               // deixa o input vazio depois
        this.cacheSelectors()                                             // Chama as funções, porque ao adiconar os itens novos os eventos somem
        this.bindEvents()        
        
        const savedTasks = localStorage.getItem('task')
        const savedTasksArr = JSON.parse(savedTasks)
          
          const arrTask = [
            {task: value},...savedTasksArr,
          ]
          const jsonTask = JSON.stringify(arrTask)
          this.task = arrTask
          localStorage.setItem('task', jsonTask) 
      }
    },
    
    remove_button: function (e){ 
      const hideLi = e.target.parentElement
      const value = e.target.dataset['task']
      console.log(value)
      const removeLocalStorage = this.task.filter(withDrawValue => withDrawValue.task !== value)
      localStorage.setItem('task',JSON.stringify(removeLocalStorage))
      
      hideLi.classList.add('remove')
      setTimeout(function(){
        hideLi.classList.add('hidden')
      },300)
    }
  }
  
}
Main.init()