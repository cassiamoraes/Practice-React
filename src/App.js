import React from "react";
import Todo from "./components/Todo"
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";


function App(props) {
  //Lembre-se de que cada tarefa que mapeamos tem as propriedades id, namee completedque queremos passar para nosso <Todo />componente
  const taskList = props.tasks.map((task) => (
    <Todo 
      id={task.id} 
      name={task.name} 
      completed={task.completed} 
      key={task.id}//O React tenta fazer suas próprias suposições para acompanhar as coisas, mas podemos ajudar passando uma keyprop para nossos <Todo />componentes. keyé um prop especial que é gerenciado pelo React – você não pode usar a palavra keypara nenhum outro propósito.
    />
  ))
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      
        <h2 id="list-heading">3 tasks remaining</h2>
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


