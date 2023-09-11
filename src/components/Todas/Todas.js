import React, {Component} from "react";
import MoviesPopular from '../MoviesPopular/MoviesPopular';
import MoviesRated from "../MoviesRated/MoviesRated";
import './Todas.css';


class Todas extends Component{
    constructor(){
        super()
        this.state={ 
            moviesPopular:[], //aca van a aparecer las peliculas en el objeto literal de state dentro del array peliculas
            moviesTopRated:[],
            buscado:"",
       
        }
    }

    componentDidMount(){
        //buscamos los datos de la API
        fetch ('https://api.themoviedb.org/3/movie/popular?api_key=ba0b591fbb4dcbf21e7a279fceca5d5e')
        .then(res=> res.json()) //trae los datos y los pasa a json
        .then(data=> this.setState({ //este DATA muestra los datos ya jsoneados. La info de data la sube al estado
            moviesPopular: data.results, //estos datos se guardan en el array del estado (linea 12) // estamos accediendo al objeto data de la api, metodo results
            idPopular: data.results.id
        })) 

        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=c71f5b75c8e3c6372967558c16ff597f')
        .then(res=>res.json())
        .then(data=>this.setState({
            moviesTopRated: data.results
        }))

        .catch()
    
    }   

    evitarSubmit (event){
        event.preventDefault();
    }

    guardarDatos(eventoCampoImput){
        this.setState({
            buscado:eventoCampoImput.target.value
        })
    }

    
    render(){
        // console.log(this.state.moviesPopular);
        console.log(this.state)
        return (
            <React.Fragment>
            <section className="section1">

            <form action=" " onSubmit={(event)=>this.evitarSubmit(event)}>
            <label>Busqueda de peliculas</label>
             <input type="text" onChange={(event)=>this.guardarDatos(event)} value={this.state.buscado} />
             <button type="submit">Buscar</button>
            </form>

            <article  className="articlePeliculas">
            <h2 className= "tituloPrincipalHome">Lo más visto en películas</h2>

                <ul className="categoriesMasVistas">
                 {this.state.moviesPopular.map ((popular,idx)=> <MoviesPopular key={popular.id} name={popular.title} descripcion={popular.overview} id={popular.id}  />  )}                
                </ul>                    

            </article>
            <article  className="articlePeliculas">
            <h2 className= "tituloPrincipalHome">Lo más valorado películas</h2>

                <ul className="categoriesMasVistas">
                 {this.state.moviesTopRated.map ((rated,idx)=> <MoviesRated key={rated.id} name={rated.title} descripcion={rated.overview} id={rated.id}  />  )}                
                </ul>                    

            </article>
            </section>
            </React.Fragment>

        )}

}














export default Todas