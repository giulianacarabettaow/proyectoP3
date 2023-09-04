import React, {Component} from "react";






class Home extends Component{
    constructor(){
        super()
        this.state={ 
            peliculas:[] //aca van a aparecer las peliculas en el objeto literal de state dentro del array peliculas
        }
    }

    componentDidMount(){
        //buscamos los datos de la API
        fetch ('https://api.themoviedb.org/3/movie/popular?api_key=ba0b591fbb4dcbf21e7a279fceca5d5e')
        .then(res=> res.json()) //trae los datos y los pasa a json
        .then(data=> this.setState({ //este DATA muestra los datos ya jsoneados. La info de data la sube al estado
            peliculas: data.results, //estos datos se guardan en el array del estado (linea 12) // estamos accediendo al objeto data de la api, metodo results

        })) 
        .catch()
    }

    render(){
        console.log(this.state.peliculas);
        return ("hola") 
    }




}














export default Home