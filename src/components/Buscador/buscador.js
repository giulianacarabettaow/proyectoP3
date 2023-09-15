import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Buscador extends Component {
    constructor(props){
        super(props)
        this.state = {
            valor:''
        }
    }


    EvitarSubmit(event){
        event.preventDefault()
        console.log('No me mandé')
    }

    GuardarValorIngresado(campoInput){
        this.setState({
            valor:campoInput.target.value //la propiedad target busca partes del evento. Es una propiedad que esta adentro del obj literal del evento
        },()=>console.log(this.state.valor) //haces el console en el seg parametro del setState. LE estoy diciendo: Ejecutate solamente cuando el estado este actualizado. 
        )
    }
    
    render(){
        return(
            <React.Fragment>
            <form className="formulario" action='/searchResults/query/:query' method="get" onSubmit={(event)=>this.EvitarSubmit(event)}>

                    <input 
                    type='text' 
                    name='buscador'
                    id=''
                    value={this.state.valor}
                    onChange={(event)=>this.GuardarValorIngresado(event)}  
                    className="input" 
                    placeholder="Busca tu película"/>

            <Link to={`/searchResults/query/${this.state.valor}`}>
            <button type="submit" className="search">Buscar</button>
            </Link>

            </form> 
            </React.Fragment>
        )
    }
}
export default Buscador