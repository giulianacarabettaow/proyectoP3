import React, { Component } from 'react'


class MoviesPopularDetail extends Component{
    constructor(props){
        super(props)
        this.state={ 
            oneMovie:[],
            id: props.match.params.id,
            ButtonFavs:"Agregar a favoritos",

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

    let arrayFavoritos=[];
    let recuperosStorage= localStorage.getItem("favoritos")
    if (recuperosStorage !==null){
        arrayFavoritos=JSON.parse(recuperosStorage);
        if (arrayFavoritos.includes(this.props.id)){
            this.setState({
                ButtonFavs:"Quitar de favoritos"
            })
        }
    } 

    }

    agregarFavs(id){
        let arrayFavoritos=[];
        let recuperosStorage= localStorage.getItem("favoritos");

        if (recuperosStorage !==null){
            arrayFavoritos=JSON.parse(recuperosStorage);
        }
        
    if (arrayFavoritos.includes(id)){

        //en el caso del que el id este en el array queremos sacar el id
        arrayFavoritos=arrayFavoritos.filter(unId => unId !==id)

        this.setState({

            botonfav: "Agregar a favoritos"
        })
    
     } else{
        arrayFavoritos.push(id);
        this.setState({
            botonfav:"Quitar de favoritos"
        })
        }


    let arrayFavoritosAString = JSON.stringify(arrayFavoritos)
    localStorage.setItem('favoritos', arrayFavoritosAString)

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
                        <button onClick={()=>this.agregarFavs(this.props.id)}  type="button">{this.state.ButtonFavs}</button>
                    </ul>

                    </section>
                </React.Fragment>
            
            )
            }
        
}

export default MoviesPopularDetail