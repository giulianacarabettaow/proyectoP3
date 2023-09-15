import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Buscador extends Component {
    constructor(){
        super()
        this.state = {
            resulado:[]
        }
    }


    EvitarSubmit(event){
        event.preventDefault()
        console.log('No me mandé')
    }

    GuardarValorIngresado(event){
        this.setState({
            valor:event.target.value
        })
        console.log(this.state.valor)
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

            {/* <Link to={`/searchResults/query/${this.state.valor}`}> */}
            <button type="submit" className="search">Buscar</button>
            {/* </Link> */}

            </form> 
            </React.Fragment>
        )
    }
}
export default Buscador
