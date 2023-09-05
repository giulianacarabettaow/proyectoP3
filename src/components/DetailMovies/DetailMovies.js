import React, {Component, Fragment} from "react";

class DetailMovies extends Component{
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
                
                
            <li>Estreno:</li>
        </Fragment>
        )
    }
}





export default DetailMovies