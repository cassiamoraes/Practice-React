import React, { useState } from "react";
//todo é um componente que estamos criando, um componente sempre deve retornar algo
function Todo(props){//aqui minha Todo recebe um props
    const[isEditing, setEditing] = useState(false)
    const[newName, setNewName] = useState("")
    const[filter, setFilter] = useState("All")

    //função define novo nome
    function handleChange(e){
      setNewName(e.target.value)
    }

    //posiciona o ID no novo nome
    function handleSubmit(e){
      e.preventDefault()
      props.editTask(props.id, newName)
      setNewName("")
      setEditing(false)
    }

    //edita o nome da tarefa caso eu queira
    const editingTemplate = (
      <form className="stack-small" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="todo-label" htmlFor={props.id}>
              New name for {props.name}{/*aqui meu props chama o name dado no App.js*/}
          </label>
          <input id="{props.id}" className="todo-text" type="text" value={newName} onChange={handleChange} />
        </div>
        <div className="btn-group">
          <button type="button" className="btn todo-cancel" onClick={()=>setEditing
          (false)}>
            Cancel
            <span className="visually-hidden">renaming {props.name}</span>
          </button>
          <button type="submit" className="btn btn_primary todo-edit">
            Save
            <span className="visually-hidden">new name for {props.name}</span>
          </button>
        </div>
      </form>
    );

    //template original com as funcionalidades de editar e deletar
    const viewTemplate = (
      <div className="stack-small">
        <div className="c-cb">
        <input id={props.id} 
            type="checkbox" 
            defaultChecked="{props.completed}" 
            onChange={()=>
            props.toggleTaskCompleted(props.id)} //função anonima para chamar o toggleTask que criamos no app
         />{/*aqui o props vai receber o completed de acordo com o que foi defindo no App.js */}
          <label className="todo-label" htmlFor={props.id}>
              {props.name}
          </label>          
        </div>
        <div className="btn-group">
              <button type="button" className="btn" onClick={()=>setEditing(true)}>
                  Edit <span className="visually-hidden">{props.name}</span>
              </button>
              <button type="button" className="btn btn_danger" onClick={()=>props.deleteTask(props.id)}>
                  Delete <span className="visually-hidden">{props.name}</span>
              </button>
        </div>
      </div>
    )

    return(
        <li className="todo">
          {isEditing ? editingTemplate : viewTemplate}
        </li>
    );
}

export default Todo;
