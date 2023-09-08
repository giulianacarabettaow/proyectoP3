import React, {Component} from "react";
import {Link} from 'react-router-dom';
import MoviesPopularDetail from "../MoviesPopularDetail/MoviesPopularDetail";

class MoviesPopular extends Component{
    constructor(props){
        super(props)
        this.state={
            moviesPopular: this.props.moviesPopular,
            extra: false
        }
        console.log(this.state)
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
            <li><Link to={`/moviesPopular/id/${this.props.id}`}><blutton type='button'>Ir al detalle</blutton></Link></li>
             

        </React.Fragment>
        )
    }
}





export default MoviesPopular