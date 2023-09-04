import React, {Component, Fragment} from "react";

class DetailMovies extends Component{
    constructor(props){
        super(props)
        this.state={
            moviesPopular: [],
            descripcion: false
        }
    }

    verDescricion(){
        this.setState({
            descripcion: true
        })
    }

    noVerDescripcion(){
        this.setState({
            extra: false
        })
    }

    render(){
        // console.log (this.props)
        console.log(this.props.title)
        return(
        <Fragment>
            <img/>
            <li>Name:{this.props.name} </li>
            <button></button>
            {/* <li> { this.state.descripcion ? this.props.descripcion  }</li>
                {
                this.state.descripcion ? 
                <button type="button" onClick={()=>this.verDescricion}>Ver descripción</button>
                    
                } */}
            <li>Estreno:</li>
        </Fragment>
        )
    }
}





export default DetailMovies