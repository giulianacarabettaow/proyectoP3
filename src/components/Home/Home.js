import React, {Component} from "react";
import MoviesPopular from '../MoviesPopular/MoviesPopular';
import MoviesRated from "../MoviesRated/MoviesRated";
import '../../styles.css';

class Home extends Component{
    constructor(){
        super()
        this.state={ 
            moviesPopular:[], //aca van a aparecer las peliculas en el objeto literal de state dentro del array peliculas
            moviesTopRated:[],
       
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


    render(){
        // console.log(this.state.moviesPopular);
        console.log(this.state)
        return (
            <React.Fragment>
            <section className="section1">
            <article  className="article Peliculas">
            <h2 className= "tituloPrincipalHome">Lo más visto en películas</h2>

                <ul className="categories MasVistas">
                 {this.state.moviesPopular.slice(0,5).map ((popular,idx)=> <MoviesPopular key={popular.id} name={popular.title} descripcion={popular.overview} id={popular.id} img={popular.poster_path}  />  )}                
                </ul>                    

            </article>
            <article  className="article Peliculas">
            <h2 className= "tituloPrincipalHome">Lo más valorado películas</h2>

                <ul className="categories MasVistas">
                 {this.state.moviesTopRated.slice(0,5).map ((rated,idx)=> <MoviesRated key={rated.id} name={rated.title} descripcion={rated.overview} id={rated.id} img={rated.poster_path}  />  )}                
                </ul>                    

            </article>
            </section>
            </React.Fragment>

        )}

}














export default Home