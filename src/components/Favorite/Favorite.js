import React, { Component } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import MoviesPopular from '../MoviesPopular/MoviesPopular';

class Favorite extends Component{
    constructor(){
        super()
        this.state={ 
            favoritos:[]
        }
    }

    componentDidMount(){
        let idFavoritos=[];

        let recuperoStorage= localStorage.getItem("favoritos")
        console.log(recuperoStorage)

        
        if (recuperoStorage !==null){
            idFavoritos=JSON.parse(recuperoStorage)
         
            this.setState({
                favoritos:idFavoritos,
            })
        }
  
    }
    

    render(){
        console.log(this.state.favoritos)
        return(
            <React.Fragment>
            <section className="section1">
            <article  className="articlePeliculas">
            <h2 className= "tituloPrincipalHome">Lo más visto en películas</h2>

                <ul className="categoriesMasVistas">
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
        )
    }
      
}

export default Favorite