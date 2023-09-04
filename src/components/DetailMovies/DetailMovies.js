import React, {Component} from "react";

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
            <section className="bordesDetail">
            {/* <article className="imagenDetalle">
                <img/>
            </article> */}

            <article className="detalles">

            </article>
            <h3>Título:{this.props.title}</h3>
           
            <ul>
                <li>Descripción:{this.props.descripcion}</li>
                <button type="button">Leer más</button>

                <button type="button">Ir a detalle</button>

                <button type="button">Agregar a Favoritos</button>
            </ul>
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