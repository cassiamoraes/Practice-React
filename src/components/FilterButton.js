import React from "react";

function FilterButton(props){
    return(
        <button 
            type="button" 
            className="btn toggle-btn" 
            aria-pressed={props.isPressed}
            onClick={()=>props.setFilter(props.name)}>{/*aria-pressed recurso a tecnologia assistida*/}
              <span className="visually-hidden">Show </span>{/*visually-hidden também para usuarios sem contexto visual*/}
              <span>{props.name} </span>
              <span className="visually-hidden">tasks</span>
          </button>
    )
}

export default FilterButton
