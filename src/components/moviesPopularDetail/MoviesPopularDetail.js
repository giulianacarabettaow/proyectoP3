import React, { Component } from 'react'


class MoviesPopularDetail extends Component{
    constructor(props){
        super(props)
        this.state={ 
            
        }
    }

    render(){
        return(
                <React.Fragment>
                    <section>
                        <h2>{this.props.titulo}</h2>
                    <ul>
                        <li>Calificacion:{this.props.rating}</li>
                        <li>Fecha de estreno:{this.props.fechaDeEstreno}</li>
                        <li>Duracion = no esta la data en la api</li>
                        <li>Sinopsis:{this.props.sinopsis}</li>
                        <li>Genero:{this.props.genero}</li>
                        <button>Agregar a fav</button>
                    </ul>

                    </section>
                </React.Fragment>
            
            )
    }
}

export default MoviesPopularDetail