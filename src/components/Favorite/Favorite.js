import React, { Component } from 'react'

class Favorite extends Component{
    constructor(){
        super()
        this.state={ 
            favoritos:[]
        }
    console.log(this.state)

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
        return(
            <h2>jsaj</h2>
        )
    }
      
}

export default Favorite