import React, {component} from "react";

import Buscador from "../Buscador/Buscador";

class SearchResults extends component{
    constructor(props){
        super(props);
        this.state={
            resultado:[]
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.match.params.query}&api_key=399cd9827f714613d04693cee425808c`)
        .then((res) => res.json())
        .then((data) =>
            this.setState({
                resultado: data.results,
            })
        )
        .catch(error => console.log(error));

    }

    render(){
        <h3>Resultado de buscado</h3>
        {this.state.filtrado.map((data,idx) => {
            if (data.title().includes(this.props.match.params.query())){
                return <SearchResults key={data + idx} Buscador={data} /> //creo que lo unico que me falla aca es el buscador

            }
        }
        
        )}
    }
}

export default SearchResults