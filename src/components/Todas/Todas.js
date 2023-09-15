import React, {Component} from "react";
import MoviesCards from '../MoviesCard/MoviesCard';
import Buscador from "../Buscador/Buscador";
import '../../styles.css';


class Todas extends Component{
    constructor(){
        super()
        this.state={ 
            MoviesCards:[], //aca van a aparecer las peliculas en el objeto literal de state dentro del array peliculas
            moviesTopRated:[],
            filtrado:[],
            loading:true, 
            verPop: false,
        }
    }

    componentDidMount(){
        //buscamos los datos de la API
        fetch ('https://api.themoviedb.org/3/movie/popular?api_key=ba0b591fbb4dcbf21e7a279fceca5d5e')
        .then(res=> res.json()) //trae los datos y los pasa a json
        .then(data=> this.setState({ //este DATA muestra los datos ya jsoneados. La info de data la sube al estado
            MoviesCards: data.results, //estos datos se guardan en el array del estado (linea 12) // estamos accediendo al objeto data de la api, metodo results
            idPopular: data.results.id,
            filtrado:data.results
        })) 

        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=c71f5b75c8e3c6372967558c16ff597f')
        .then(res=>res.json())
        .then(data=>this.setState({
            moviesTopRated: data.results,
            loading:false
        }))

        .catch()
    
    }   

    verPopular(){
        this.setState({
            verPop:true
        })
    }

    
    render(){
        // console.log(this.state.MoviesCards);
        console.log(this.state)
        return (
            <div>{this.state.laoding ?  
            <React.Fragment>
                <section className='sectionDetalle'>

                    <div className='principalDetalle'>
                    <h2 className='tituloDetalle'>Cargando...</h2>  
                    </div>
            
                </section>
            </React.Fragment> :
            <React.Fragment>
                
            <section className="sectionTodas">

            <article className="articleBuscador">
                <Buscador/>
            </article>
           
                <article  className="article Peliculas">
                        <h2 className= "tituloPrincipalHome">Todas las películas populares</h2>

                        <ul className="categories MasVistas">
                        {this.state.MoviesCards.map ((popular,idx)=> <MoviesCards key={popular.id} name={popular.title} descripcion={popular.overview} id={popular.id} img={popular.poster_path} />  )}                
                        </ul>                    

                    </article>
                    <article  className="article Peliculas">
                    <h2 className= "tituloPrincipalHome">Todas las películas aclamadas por las críticas</h2>

                        <ul className="categories MasVistas">
                        {this.state.moviesTopRated.map ((rated,idx)=> <MoviesCards key={rated.id} name={rated.title} descripcion={rated.overview} id={rated.id} img={rated.poster_path} />  )}                
                        </ul>                    
                    </article>
                
            </section>
            </React.Fragment>
            }</div>
        )}
    }

export default Todas
