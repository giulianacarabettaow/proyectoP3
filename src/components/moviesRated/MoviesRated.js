import React, {Component} from "react";
import {Link} from "react-router-dom";


class MoviesRated extends Component{
    constructor(props){
        super(props)
        this.state={
            extra: false,
            ButtonFavs:"Agregar a favoritos",
            favoritos:[],
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
        <React.Fragment>
            <img/>
            <li>Name:{this.props.name} </li>
           
             <li>{ this.state.extra ? this.props.descripcion : ''} </li>
             {
                this.state.extra ? 

                    <button type="button" onClick={()=>this.noVerDescricion()} >Ocultar</button>
                :
                    <button type="button" onClick={()=>this.verDescricion()} >Ver descipcion</button>

             }
            <li><Link to={`/moviesRated/id/${this.props.id}`}><blutton type='button'>Ir al detalle</blutton></Link></li>
             
             {/* <li><button onClick={this.agregarFavs(this.props.id)}type="button">{this.state.ButtonFavs}</button></li> */}

        </React.Fragment>
        )
    }

}

export default MoviesRated