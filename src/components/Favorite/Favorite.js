import React, { Component } from 'react'

let recuperoStorage= localStorage.getItem("favoritos")
console.log(recuperoStorage)

class Favorite extends Component{
    constructor(props){
        super(props)
        this.state={ 
            oneMovie:[],
            recuperoStorage: props.match.params.id,
        
        }
        console.log(this.state)
    }

    render(){
        return(
            <React.Fragment>
                <ul>{this.state.oneMovie.original_title}</ul>
            </React.Fragment>
        )
    }
}

export default Favorite