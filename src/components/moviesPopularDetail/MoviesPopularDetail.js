import React, { Component } from 'react'


class MoviesPopularDetail extends Component{
    constructor(props){
        super(props)
        this.state={ 
            titulo: '',

            id: props.match.params.id
        }
        console.log(this.state)
    }
    componentDidMount(){
       
        fetch (`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=ba0b591fbb4dcbf21e7a279fceca5d5e`)
        .then(res=> res.json()) 
        .then(data=> this.setState({ 
            titulo: data.original_title, 
            calificacion: data.vote_average,
            fechaDeEstreno: data.release_date,
            sinopsis: data.overview
        })) 
        .catch()
    }


    render(){
        return(
                <React.Fragment>
                    <section>
                        <h2>{this.state.titulo}</h2>
                    <ul>
                        <li>Calificacion:{this.state.calificacion}</li>
                        <li>Fecha de estreno:{this.state.release_date}</li>
                        <li>Duracion = no esta la data en la api</li>
                        <li>Sinopsis:{this.state.sinopsis}</li>
                        <li>Genero:</li>
                        <button>Agregar a fav</button>
                    </ul>

                    </section>
                </React.Fragment>
            
            )
    }
}

export default MoviesPopularDetail