import React, {Component} from "react";
import {Link} from 'react-router-dom';


class SearchResults extends Component{
    constructor(props){
        super(props);
        this.state={
            resultado:[],
            // query:props.match.params.query
        }
        console.log(props.match.params.query)
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.match.params.query}&api_key=399cd9827f714613d04693cee425808c&language=en-US&page=1&include_adult=false`)
        .then((res) => res.json())
        .then((data) =>
            this.setState({
                resultado: data.results,
            })
        )
        .catch(error => console.log(error));

    }

    render(){
        return(
            <h2>Hola Ro</h2>
        // <React.Fragment>
        // <h3>Resultado de buscado</h3>

        
        // <ul>
        // {/* {this.state.resultado.map((data,idx) => 
        //     {

        //         if (data.title().includes(this.props.match.params.query())){
        //         return <SearchResults key={data + idx} Buscador={data} /> //creo que lo unico que me falla aca es el buscador
        //         }
        //     }
        // }         */}
        // </ul>


        // </React.Fragment>
        )
    }
}

export default SearchResults;

