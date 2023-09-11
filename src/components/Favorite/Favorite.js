import React, { Component } from 'react'
<<<<<<< HEAD
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import MoviesPopular from '../MoviesPopular/MoviesPopular';
=======
import MoviesPopular from '../MoviesPopular/MoviesPopular'
>>>>>>> 909ece067c88221b89a23c337e26601a2dde66bf

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
<<<<<<< HEAD
                 {this.state.favoritos.map ((popular,idx)=> <MoviesPopular key={popular.id} name={popular.title} descripcion={popular.overview} id={popular.id}  />  )}                
                </ul>                    

            </article>
            {/* <article  className="articlePeliculas">
            <h2 className= "tituloPrincipalHome">Lo más valorado películas</h2>

                <ul className="categoriesMasVistas">
                 {this.state.favoritos.map ((rated,idx)=> <MoviesRated key={rated.id} name={rated.title} descripcion={rated.overview} id={rated.id}  />  )}                
                </ul>                    

            </article> */}
            </section>
            </React.Fragment>
=======
                 {this.state.objFav.map ((popular,idx)=> <MoviesPopular key={popular.id} name={popular.title} descripcion={popular.overview} id={popular.id}  />  )}                
                </ul>                    

             </article>

            </section>
            </React.Fragment>

>>>>>>> 909ece067c88221b89a23c337e26601a2dde66bf
        )
    }
      
}

export default Favorite