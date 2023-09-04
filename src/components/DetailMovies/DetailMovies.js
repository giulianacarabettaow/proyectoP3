import React, {Component} from "react";






class DetailMovies extends Component{
    constructor(props){
        super(props)
        this.state={
            peliculas: [],
        }
    }
    render(){
        console.log (this.props)
        return(
            <section className="bordesDetail">
            <article className="imagenDetalle">
                
            </article>

            <ul className="genero">
    
            </ul>

            <article className="detalles">

            </article>
            <h3>Género/s:</h3>
            <article className="detallesGen">

            </article>
            <h3>Miralo en:</h3>
            <article className="provider">
            </article>

        </section>
        )
    }
}





export default DetailMovies