import React, {Component} from "react";
import '../../styles.css';

class Loader extends Component{
    constructor(){
        super()
        this.state={
            
        }
    }

    render(){
        return(
            <React.Fragment>
                <p>Cargando</p>
            </React.Fragment>
        )
    }
}

export default Loader