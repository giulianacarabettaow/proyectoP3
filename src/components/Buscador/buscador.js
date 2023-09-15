import React, { Component } from "react";

class Buscador extends Component {
    constructor(){
        super()
        this.state = {
            valor: ''
        }
    }


    EvitarSubmit(event){
        event.preventDefault()
    }

    GuardarCambios(event){
        this.setState(
        {
            valor:event.target.value
        },
            ()=>this.props.filtro(this.state.valor)
        )
    }
    
    render(){
        return(
            <form onSubmit={(event) => this.evitarSubmit(event)}>
                 <input type="text" onChange={(event) => this.guardarCambios(event)} value={this.state.valor} placeholder= 'Search'/>

            </form>
        )
    }


}
export default Buscador
