import React, { Component } from 'react'
import MoviesPopular from '../MoviesPopular/MoviesPopular'

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
        // console.log(recuperoStorage)

        
        if (recuperoStorage !==null){
            idFavoritos=JSON.parse(recuperoStorage)
         
            // this.setState({
            //     idfavoritos:JSON.parse(recuperoStorage),
            // }, console.log(this.state.idfavoritos) )
        

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
    

    render(){
        //console.log(this.state.idfavoritos)
        console.log(this.state.objFav)
        return(
            <h2>hiav</h2>
            // <React.Fragment>
            // <section className="section1">
            // <article  className="articlePeliculas">
            // <h2 className= "tituloPrincipalHome">Lo más visto en películas</h2>

            //     <ul className="categoriesMasVistas">
            //      {this.state.favoritos.map ((popular,idx)=> <MoviesPopular key={popular.id} name={popular.title} descripcion={popular.overview} id={popular.id}  />  )}                
            //     </ul>                    

            //  </article>
            /* <article  className="articlePeliculas">
            <h2 className= "tituloPrincipalHome">Lo más valorado películas</h2>

                <ul className="categoriesMasVistas">
                 {this.state.moviesTopRated.slice(0,5).map ((rated,idx)=> <MoviesRated key={rated.id} name={rated.title} descripcion={rated.overview} id={rated.id}  />  )}                
                </ul>                    

            </article> */

            // </section>
            // </React.Fragment>
        )
    }
      
}

export default Favorite