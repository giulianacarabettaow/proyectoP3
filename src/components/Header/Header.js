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
            <section className="contenedorpadre">

            <article className="title">
                <h1>Filmspot</h1>
            </article>
            
            
            <nav className="menuprincipal">
                <ul className="ulMenu">
                    <Link to='/'><li className="liMenu">Home</li></Link>
                    <Link to='/Favoritos'><li className="liMenu">Favoritos</li></Link>
                    <Link to='/verTodas'><li className="liMenu">Ver todas</li></Link>
                </ul>
            </nav>
            
            </section>
            </React.Fragment>
        )
    }

}

export default Header