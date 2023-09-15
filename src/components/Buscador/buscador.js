import React, { Component } from "react";

class Buscador extends Component {
    constructor(){
        super()
        this.state = {
            resulado:[]
        }
    }


    EvitarSubmit(event){
        event.preventDefault()
    }

    GuardarCambios(event){
        this.setState({
            valor:event.target.value
        })
        console.log(this.state.valor)
    }
    
    render(){
        return(
            <React.Fragment>
            <form className="formulario" onSubmit={(event)=>this.EvitarSubmit(event)}>
                    <input type="text" onChange={(event)=>this.GuardarCambios(event)} value={this.props.buscado} className="input" placeholder="Busca tu película"/>
                    <button type="submit" className="search">Buscar</button>
            </form> 
            </React.Fragment>
        )
    }
}
export default Buscador
