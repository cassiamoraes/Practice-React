import React, {useState} from "react";
import Todo from "./components/Todo"
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import {nanoid} from "nanoid"

//filtros do formulario (todas as tarefas, as ativas e as completas)
const FILTER_MAP = {//funções que usaremos p/ filtrar os dados dos tasks array 
  All: () => true, //mostra todas as tarefas então retorna true para todas
  Active: (task) => !task.completed, //mostra as tarefas cujo completed prop é false
  Completed: (task) => task.completed //mostra as tarefas cujo completed prop é true
}

//metodo retorna os nomes da matriz
const FILTER_NAMES = Object.keys(FILTER_MAP)

function App(props) {

  const [tasks, setTasks] = useState(props.tasks)//armazenaremos as  tarefas no estado
  const [filter, setFilter] = useState("All")

  //basicamente a função abaixo converte os dados informados para name em um objeto do qual podemos manipular
  function addTask(name){//não podemos simplismente passar uma string(name) para essa função, pq tasks são elementos
    const newTask = {id: `todo-${nanoid()}`, //assim mudamos os ids
                     name, 
                     completed: false} //nesse array colocamos name na mesma estrutura das tarefas que ja existem, essa matriz atualiza o estado para um novo
    setTasks([...tasks, newTask]) //aqui o setTasks atualiza esse estado que informamos acima
  }

  //queremos que altere a propriedade da completed somente da que foi alterada
  function toggleTaskCompleted(id){//registra as tarefas informadas
    const updateTasks = tasks.map((task)=>{
      //se esta tarefa tiver o mesmo ID da editada
      if(id === task.id){
      //usa o prop do objeto para criar um novo objeto
      //cujo prop `completed` foi invertido
        return {...task, completed: !task.completed}
      }
      return task
    })
    setTasks(updateTasks)
  }

  //setTasks espera um array como argumento, por isso vamos percorrer as listas e deletar a tarefa que foi selecionada
  function deleteTask(id){
    //filter cria uma copia de uma parte de uma determinada matriz, a frente fornecedimento da função
    const remainingTasks = tasks.filter((task) => id !== task.id)
    setTasks(remainingTasks)
  }

  function editTask(id, newName){
    const editedTaskList = tasks.map((task) => {
      //se a tarefa tem o mesmo ID da tarefa editada
      if(id === task.id){
        return{...task, name: newName}
      }
      return task
    })
    setTasks(editedTaskList)
  }

  //Lembre-se de que cada tarefa que mapeamos tem as propriedades id, name completed que queremos passar para nosso <Todo />componente
  //**error - não esquecer de instalar o nanoid para que os ids mudem conforme as tarefas sejam adicionadas
  const taskList = tasks
    .filter(FILTER_MAP[filter])//antes de mapear o estado da tarefa, fazemos o filtro do estado p/ mostra o que queremos
    .map((task) =>(
    <Todo 
      id={task.id} 
      name={task.name} 
      completed={task.completed} 
      key={task.id}//O React tenta fazer suas próprias suposições para acompanhar as coisas, mas podemos ajudar passando uma keyprop para nossos <Todo />componentes. keyé um prop especial que é gerenciado pelo React – você não pode usar a palavra keypara nenhum outro propósito.
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ))

  //filterbutton é um componente do react que cria um menu suspenso
  const filterList = FILTER_NAMES.map((name)=>(//const para mapear nosso array de nomes e retornar um filterbutton componente
    <FilterButton 
      key={name} 
      name={name}
      isPressed={name === filter}
      setFilter={setFilter} 
    />
  ))

  //contagem na tela
  //verifica se a task é diferente de um para trocar tasks para task
  const tasksNoun = taskList.length !== 1? "tasks" : "task"
  const headingText = `${taskList.length} ${tasksNoun} tasks remaining`
  
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask}/> {/*chama a função de addTask criada acima*/}
      <div className="filters btn-group stack-exception">
        {filterList} {/*aqui chamamos o filterButton*/}
      </div>
      
        <h2 id="list-heading">{headingText}</h2>
        <ul
          role="list" /*ajuda a tecnologia assistiva a explicar que tipo de elemento uma tag representa*/
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading"> {/*descreve o propósito da lista abaixo dele*/}
          {taskList}{/*array para trazer componentes do Todo*/}
        </ul>
    </div>
  );
}

export default App;


