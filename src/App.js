import Todo from "./components/Todo"

function App(props) {
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <form>
        <h2 className="laber-wrapper">
          <label htmlFor='new-todo-input' className="laber__lg">
            What needs to be done?
          </label>
        </h2>
        <input 
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
      <div className="filters btn-group stack-exception">
          <button type="button" className="btn toggle-btn" aria-pressed="true">{/*aria-pressed recurso a tecnologia assistida*/}
              <span className="visually-hidden">Show </span>{/*visually-hidden também para usuarios sem contexto visual*/}
              <span>all </span>
              <span className="visually-hidden">tasks</span>
          </button>
          <button type="button" className="btn toggle-btn" aria-pressed="false">
              <span className="visually-hidden">Show </span>
              <span>Active </span>
              <span className="visually-hidden">tasks</span>
          </button>
          <button type="button" className="btn toggle-btn" aria-pressed="false">
              <span className="visually-hidden">Show </span>
              <span>Completed </span>
              <span className="visually-hidden">tasks</span>
          </button>
      </div>
        <h2 id="list-heading">3 tasks remaining</h2>
        <ul
          role="list" /*ajuda a tecnologia assistiva a explicar que tipo de elemento uma tag representa*/
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading"> {/*descreve o propósito da lista abaixo dele*/}
            <Todo name="Eat" completed={true} id="todo-0" />{/*o name define o nome dados ao label do meu componente*/}
            <Todo name="Sleep" completed={false} id="todo-1" /> {/*o completed trará a primeira checkbox peenchida, as demais não*/}
            <Todo name="Repeat" completed={false} id="todo-2" />
        </ul>
    </div>
  );
}

export default App;


