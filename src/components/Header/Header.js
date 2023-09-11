import React, {Component} from "react";
import {Link} from "react-router-dom";
import '../../styles.css';

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
                    <Link to='/Favoritos'><li>Favoritos</li></Link>
                    <Link to='/verTodas'><li>Ver todas</li></Link>
                </ul>
            </nav>

            </React.Fragment>
        )
    }

}

export default Header