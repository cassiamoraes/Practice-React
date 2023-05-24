import React from "react";
//todo é um componente que estamos criando, um componente sempre deve retornar algo
function Todo(props){//aqui minha Todo recebe um props
    return(
        <li className="todo stack-small">
              <div className="c-cb">
                <input id={props.id} type="checkbox" defaultChecked="{props.completed}" /> {/*aqui o props vai receber o completed de acordo com o que foi defindo no App.js */}
                  <label className="todo-label" htmlFor={props.id}>
                    {props.name}{/*aqui meu props chama o name dado no App.js*/}
                  </label>
              </div>
              <div className="btn-group">
                  <button type="button" className="btn">
                    Edit <span className="visually-hidden">{props.name}</span>
                  </button>
                  <button type="button" className="btn btn_danger">
                    Delete <span className="visually-hidden">{props.name}</span>
                  </button>
              </div>
            </li>
    );
}

export default Todo;