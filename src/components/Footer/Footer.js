import React, {Component} from "react";
import {Link} from 'react-router-dom';
import '../../styles.css';


class Footer extends Component{
    constructor(){
        super()
        this.state={
            hola:'',
        }
    }

    render(){
        return(
            <React.Fragment>
            <section className="">
            <nav>
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/Favoritos'><li>Favoritos</li></Link>
                    <Link to='/verTodas'><li>Ver todas</li></Link>
                </ul>
            </nav>

            <p>Giuliana Carabetta Owens, Ignacio Tettamanti y Timoteo Herrera</p>
            </section>
            </React.Fragment>
        )
    }
}

export default Footer