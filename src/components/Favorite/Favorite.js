import React, { Component } from 'react'
import MoviesPopular from '../MoviesPopular/MoviesPopular'
import '../../styles.css';

class Favorite extends Component{
    constructor(){
        super()
        this.state={ 
            objFav:[]
        }
    }

    componentDidMount(){
        let idFavoritos=[];
        let resultadoPorId =[];
        let recuperoStorage= localStorage.getItem("favoritos")

        
        if (recuperoStorage !==null){
            idFavoritos=JSON.parse(recuperoStorage)
        
            idFavoritos.forEach(unFav => {
                fetch(`https://api.themoviedb.org/3/movie/${unFav}?api_key=ba0b591fbb4dcbf21e7a279fceca5d5e`)

                .then( res=> res.json()) 

                .then( data=> {
                    resultadoPorId.push(data)
                    
                    this.setState({
                        objFav:resultadoPorId
                    })
                }) 
            })
        }
    }

    componentDidUpdate(){
        // aca hay que ir recargando
        
        
    }   

    eliminarFav(id){
        this.state.objFav.filter( unFav => unFav.id !== id)
    }

    render(){
        console.log(this.state.objFav)
        return(
            <React.Fragment>
            <section className="section1">
            <article  className="articlePeliculas">
            <h2 className= "tituloPrincipalHome">Lo más visto en películas</h2>

                <ul className="categoriesMasVistas">

                 {this.state.favoritos.map ((popular,idx)=> <MoviesPopular key={popular.id} name={popular.title} descripcion={popular.overview} id={popular.id}  />  )}                
                </ul>                    

            </article>

            </section>
            </React.Fragment>


        )
    }
      
}

export default Favorite