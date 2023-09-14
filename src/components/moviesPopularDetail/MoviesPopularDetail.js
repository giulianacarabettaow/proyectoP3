import React, { Component } from 'react';
import '../../styles.css';


class MoviesPopularDetail extends Component{
    constructor(props){
        super(props)
        this.state={ 
            oneMovie:[],
            arrayGenres:[],
            id: props.match.params.id,
            ButtonFavs:"Agregar a favoritos",
        }
    }
    componentDidMount(){
       
        fetch (`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=ba0b591fbb4dcbf21e7a279fceca5d5e`)
        .then(res=> res.json()) 
        .then(data=> this.setState({ 
            oneMovie: data,
        })) 
        .catch()

        let arrayFavoritos=[];
        let recuperoStorage= localStorage.getItem("favoritos") 
            console.log(recuperoStorage);
        if (recuperoStorage !==null){
            arrayFavoritos=JSON.parse(recuperoStorage);
        
        if (arrayFavoritos.includes(Number(this.state.id))){
            this.setState({
                ButtonFavs:"Quitar de favoritos"
                })
            }
        } 
     }

    agregarFavs(id){
        console.log(id)
        id=Number(id)
        let arrayFavoritos=[];
        let recuperoStorage= localStorage.getItem("favoritos");

        if (recuperoStorage !==null){
            arrayFavoritos=JSON.parse(recuperoStorage);
        }
        
            if (arrayFavoritos.includes(id)){
                //en el caso del que el id este en el array queremos sacar el id
                arrayFavoritos=arrayFavoritos.filter(unId => unId !==id) // el primer parametro es cada elemento del array 'unId'

        //en el caso del que el id este en el array queremos sacar el id
        arrayFavoritos=arrayFavoritos.filter(unId => unId !==  id)

        this.setState({

            ButtonFavs: "Agregar a favoritos"
        })
    
     }else{
        arrayFavoritos.push(id);
        this.setState({
            ButtonFavs:"Quitar de favoritos"
        })
        }


    let arrayFavoritosAString = JSON.stringify(arrayFavoritos)
    localStorage.setItem('favoritos', arrayFavoritosAString)
        console.log(arrayFavoritos);
    }

    render(){ 
        console.log(this.state.oneMovie);
        return(
                <React.Fragment>
                    <section>
                        <h2>{this.state.oneMovie.original_title}</h2>
                    <ul>
                        <img src={`https://image.tmdb.org/t/p/w500/${this.state.oneMovie.poster_path}`}/>    
                        <li>Calificacion:{this.state.oneMovie.vote_average}</li>
                        <li>Fecha de estreno:{this.state.oneMovie.release_date}</li>
                        <li>Duracion = no esta la data en la api</li>
                        <li>Sinopsis:{this.state.oneMovie.overview}</li>

                        <ul>Genero:</ul>
                        {this.state.oneMovie.genres?.map(genres=> <li>{genres.name}</li>) }
                        
                        <button onClick={()=>this.agregarFavs(this.state.id)}  type="button">{this.state.ButtonFavs}</button>
                    </ul>

                    </section>
                </React.Fragment>
            
            )
            }
        
}

export default MoviesPopularDetail