import React, {Component, Fragment} from "react";

class DetailMovies extends Component{
    constructor(props){
        super(props)
        this.state={
            peliculas: [],
        }
    }
    render(){
        // console.log (this.props)
        console.log(this.props.title)
        return(
        <Fragment>
            <img/>
            <li>Name:{this.props.name} </li>
            <li>Estreno:</li>
        </Fragment>
        )
    }
}





export default DetailMovies