import React from 'react'
import { Link } from 'react-router-dom'
import css from './css/LinkCategoria.css'

const LinkCategoria = ({categoria}) => {
    return(
        <Link to={`/categorias/${categoria.url}`} className="btn btn-light h-100 m-2 col-sm">
        <i className={`fa ${categoria.icon} fa-2x`} aria-hidden="true"></i><br />
        {categoria.categoria}
        </Link>
    )
}
export default LinkCategoria