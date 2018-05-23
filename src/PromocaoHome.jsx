import React from 'react'
import { Link } from 'react-router-dom'
import css from './css/AnuncioHome.css'


const PromocaoHome = ({id, ordem_de_servico}) => {
    return(
        <div className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100">
          <img className="card-img-top" src={ordem_de_servico.foto} alt="Foto" />
          <div className="card-body">
            <h4 className="card-title">
              <a to={`/anuncios/ver/`}>{ordem_de_servico.nome}</a>
            </h4>
            <p className="card-text">{ordem_de_servico.descricao}</p>
            <Link to={`/categorias/${ordem_de_servico.categoria}/${id}`} className="btn btn-danger btn-lg btn-block">Visualizar OS</Link>
          </div>
        </div>
        </div>
    )
}
export default PromocaoHome