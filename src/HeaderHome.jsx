import React from 'react'
import { Link   } from 'react-router-dom'

import logo from './logo.png'
import css from './css/HeaderHome.css'

//functional stateless component
//<p className="text-center"><Link className="btn btn-anuncie btn-lg" to="/novo-anuncio" role="button">Cadastrar nova O.S. &raquo;</Link></p>
const HeaderHome = (props) => {
    return(
        
        <div className="container">
        <nav className="navbar fixed-top bg-danger">
            <a className="navbar-brand" href="#"><img src={logo} className="App-logo" alt="logo" width="80"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul><li>Cadastrar</li></ul>
            </div>
        </nav>

         <p className="text-center"><Link className="btn btn-anuncie btn-lg" to="/novo-anuncio" role="button">Cadastrar OScd &raquo;</Link></p>
        </div>
    )
}

export default HeaderHome