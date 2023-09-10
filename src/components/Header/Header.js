import React, {Component} from "react";
import {Link} from "react-router-dom";

class Header extends Component{
    constructor(){
        super()
        this.state={
            hola:'',
        }   
    }

    render(){
        return(
            <React.Fragment>
            <nav>
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link><li>Favoritos</li></Link>
                    <Link><li>Ver todas</li></Link>
                </ul>
            </nav>

            </React.Fragment>
        )
    }

}

export default Header