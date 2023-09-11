import React, {Component} from "react";
import {Link} from 'react-router-dom';

class MoviesPopular extends Component{
    constructor(props){
        super(props)
        this.state={
            // moviesPopular: this.props.moviesPopular, no va creo
            extra: false,
            ButtonFavs:"Agregar a favoritos",
            favoritos:[],
            id:props.id 
        }
         console.log(this.state)
    }

     componentDidMount(){
          
         let arrayFavoritos=[];
         
         let recuperoStorage= localStorage.getItem("favoritos")

          if (recuperoStorage !==null){
    
              arrayFavoritos=JSON.parse(recuperoStorage);
              this.setState({
                  favoritos: arrayFavoritos
              })

              if (arrayFavoritos.includes(this.state.id)){
                  this.setState({
                      ButtonFavs:"Quitar de favoritos"
                  })
              }
          } 
     }

     componentDidUpdate(){
        console.log(this.state)
     }

    verDescricion(){
        this.setState({
            extra: true
    })}

    noVerDescricion(){
        this.setState({
            extra: false
    })}
    
     agregarFavs(id){
         console.log(id)
    
         let arrayFavoritos=[];
         let recuperoStorage= localStorage.getItem("favoritos");

         if (recuperoStorage !==null){
             arrayFavoritos=JSON.parse(recuperoStorage);
         }
        
         if (arrayFavoritos.includes(id)){
             //en el caso del que el id este en el array queremos sacar el id
             arrayFavoritos=arrayFavoritos.filter(unId => unId !==id) // el primer parametro es cada elemento del array 'unId'

         this.setState({
            favoritos:arrayFavoritos,
             ButtonFavs: "Agregar a favoritos"
         })
    
          }else{
             arrayFavoritos.push(id);
             this.setState({
             favoritos:arrayFavoritos,
             ButtonFavs:"Quitar de favoritos"
         })
         }
            let arrayFavoritosAString = JSON.stringify(arrayFavoritos)
            localStorage.setItem('favoritos', arrayFavoritosAString)
            console.log(arrayFavoritos);
        }

    render(){
        return(
        <React.Fragment>
            <img/>
            <li>Name:{this.props.name} </li>
           
             <li>{ this.state.extra ? this.props.descripcion : ''} </li>
             {
                this.state.extra ? 

                    <button type="button" onClick={()=>this.noVerDescricion()} >Ocultar</button>
                :
                    <button type="button" onClick={()=>this.verDescricion()} >Ver descipcion</button>

             }
            <li><Link to={`/moviesPopular/id/${this.props.id}`}><button type='button'>Ir al detalle</button></Link></li>
             
             <li><button onClick={()=>this.agregarFavs(this.props.id)}type="button">{this.state.ButtonFavs}</button></li>

        </React.Fragment>
        )
    }
}

export default MoviesPopular