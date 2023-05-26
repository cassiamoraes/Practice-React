import React, {useState} from "react"; //importamos o estado para poder usar a hook
//os componentes n apenas possuem o state, mas tbm podem atualiza-los
//dentro dos states possuimos funções, nesse caso essas funções são os hooks (ganchos)
//useState retorna duas coisas, o estado e a função p/ atualizar o estado posteriormente

function Form(props){

    const [name, setName] = useState("")
    
    function handleSubmit(e){//para o comportamento padrão de att a pagina e adiciona uma tarefa, nesse caso um alerta
        e.preventDefault()
        props.addTask(name)//adiciona uma tarefa, no caso o nome digitado
        setName("") //seta o valor vazio após adicionar a tarefa para limpar a entrada
    }

    function handleChange(e){//captura uma entrada enquanto ele digita, e nesse caso alteraremos o nosso name estado
        setName(e.target.value) //target - registra elemento que disparou o evento e setName seta um valor
    }

    return(
        <form onSubmit={handleSubmit}> {/*chama a função como se fosse um onClick*/}
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
          value={name} //chama o useSate que definimos acima
          onChange={handleChange}//chama a função handleChance 
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
    )
}

export default Form
