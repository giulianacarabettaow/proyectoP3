import React, {Component} from "react";
import {Link} from 'react-router-dom';
import '../../styles.css';

class MoviesCards extends Component{
    constructor(props){
        super(props)
        this.state={
            // MoviesCards: this.props.MoviesCards, no va creo
            show: false,
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



    verDescricion(){
        this.setState({
            show: true
    })}

    noVerDescricion(){
        this.setState({
            show: false
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

            if(this.props.handle){
                this.props.handle()
            }
        }

    render(){
        return(
            <React.Fragment>
            <ul className="listaPelis">
            <img src={`https://image.tmdb.org/t/p/w342/${this.props.img}`} className="imgPeli" alt={this.props.name}/>
                <li className="titleMovies">{this.props.name} </li>
            
                <li>{ this.state.show ? this.props.descripcion : ''} </li>
                {
                    this.state.show ? 

                        <button className="botonesHome" type="button" onClick={()=>this.noVerDescricion()} >Ocultar</button>
                    :
                        <button  className="botonesHome" type="button" onClick={()=>this.verDescricion()} >Ver descipcion</button>

                }
                <li><Link to={`/moviesDetail/id/${this.props.id}`}><button className="botonesHome" type='button'>Ir al detalle</button></Link></li>
                
                <li><button className="botonesHome" onClick={()=>this.agregarFavs(this.props.id)}type="button">{this.state.ButtonFavs}</button></li>
            </ul>

        </React.Fragment>
        )
    }
}

export default MoviesCards