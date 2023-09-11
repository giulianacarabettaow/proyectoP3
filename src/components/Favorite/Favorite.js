import React, { Component } from 'react';
import '../../../public/css/styles.css';


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
            <h2>jsaj</h2>
        )
    }
      
}

export default Favorite