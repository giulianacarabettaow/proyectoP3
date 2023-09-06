import React, {Component, Fragment} from "react";
import {Link} from 'react-router-dom';

class MoviesPopular extends Component{
    constructor(props){
        super(props)
        this.state={
            moviesPopular: [],
            extra: false
        }
    }

    verDescricion(){
        this.setState({
            extra: true
    })}

    noVerDescricion(){
        this.setState({
            extra: false
    })}
    

    render(){
        return(
        <Fragment>
            <img/>
            <li>Name:{this.props.name} </li>
           
             <li>{ this.state.extra ? this.props.descripcion : ''} </li>
             {
                this.state.extra ? 

                    <button type="button" onClick={()=>this.noVerDescricion()} >Dejar de ver la descipcion</button>
                :
                    <button type="button" onClick={()=>this.verDescricion()} >Ver la descipcion</button>

             }
                 {/* <Link to={`/personajes/id/${this.props.datosPersonaje.id}`}><button type='button'><h2>{this.props.datosPersonaje.name}</h2></button></Link> Nombre */}
            <li><Link to={`/moviesPopular/id/${this.props.id}`}><blutton type='button'>Ir a detalle</blutton></Link></li>
                
            <li>Estreno:</li>
        </Fragment>
        )
    }
}





export default MoviesPopular