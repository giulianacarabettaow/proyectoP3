import React, {Component} from "react";
import MoviesCards from "../MoviesCard/MoviesCard";


class SearchResults extends Component{
    constructor(props){
        super(props);
        this.state={
            resultado:[],
            query:props.match.params.query
        }
        console.log(this.props.match.params.query)
    }

    componentDidMount(){

        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.state.query}&api_key=ba0b591fbb4dcbf21e7a279fceca5d5e`)
        .then((res) => res.json())
        .then((data) =>
            this.setState({
                resultado: data.results,
            })
        )
        .catch(error => console.log(error));
    }


    render(){
        console.log(this.state.resultado)
        return(
        <React.Fragment>

        <section1 className="section1">
            <article  className="article Peliculas">

                <h3 className= "tituloPrincipalHome">Resultado de buscado {this.props.match.params.query}</h3>

                <ul className="categories MasVistas">
                    
                {this.state.resultado.length > 0 ?  
                
                <ul className="categoriesMasVistas">
                {this.state.resultado.map ((movie,idx)=> <MoviesCards key={movie.id+idx} name={movie.title} descripcion={movie.overview} id={movie.id} img={movie.poster_path}  />  )}                
               </ul> 
               
                            : 
                
                <h2 className='tituloDetalle'>No hay resultados para tu búsqueda...</h2>} 
                    
                </ul>

            </article>
        </section1>
        </React.Fragment>
        )
    }
}

export default SearchResults