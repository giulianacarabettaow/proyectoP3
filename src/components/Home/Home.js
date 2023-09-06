import React, {Component} from "react";
import MoviesPopular from '../moviesPopular/MoviesPopular'


class Home extends Component{
    constructor(){
        super()
        this.state={ 
            moviesPopular:[] //aca van a aparecer las peliculas en el objeto literal de state dentro del array peliculas
        }
    }

    componentDidMount(){
        //buscamos los datos de la API
        fetch ('https://api.themoviedb.org/3/movie/popular?api_key=ba0b591fbb4dcbf21e7a279fceca5d5e')
        .then(res=> res.json()) //trae los datos y los pasa a json
        .then(data=> this.setState({ //este DATA muestra los datos ya jsoneados. La info de data la sube al estado
            moviesPopular: data.results, //estos datos se guardan en el array del estado (linea 12) // estamos accediendo al objeto data de la api, metodo results

        })) 
        .catch()

        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=c71f5b75c8e3c6372967558c16ff597f')
        .then(res=>res.json())
        .then(data=>this.setState({
            moviesTopRated: data.results
        }))
    }   

    masVistas(){
        
    }

    render(){
        console.log(this.state.moviesPopular);
        return (

            <article  className="article peliculas">
            <h2>Lo más visto en películas</h2>

                <ul className="categories masvistas">
                    {this.state.moviesPopular.map ((popular,idx)=> <MoviesPopular key={popular.id} name={popular.title} descripcion={popular.overview} id={popular.id}  /> )}
                           
                </ul>                    

            </article>


        )}

}














export default Home