import React, { Component } from 'react'
import axios from 'axios'

import PromocaoHome from './PromocaoHome'
import css from './css/Categoria.css'

// https://mercadodev-cdd2a.firebaseio.com/anuncios.json?orderBy=%22categoria%22&equalTo=%22empregos-e-negocios%22

class Categoria extends Component {
    constructor(props){
        super(props)

        this.state = {
            ordens_de_servicos: {},
            isLoading: false
        }
        
        this.loadOrdens_de_servicos = this.loadOrdens_de_servicos.bind(this)
        this.loadOrdens_de_servicos(this.props.match.params.urlCategoria)
    }

    loadOrdens_de_servicos(urlCategoria){
        this.setState({ 
            isLoading: true,
            ordens_de_servicos: {}
         })
        //carregar dados
        const url = `https://hschelper-801df.firebaseio.com/ordens_de_servicos.json?orderBy=%22categoria%22&equalTo=%22${urlCategoria}%22`
        axios.get(url)
        .then(data => {
            this.setState({ ordens_de_servicos: data.data, isLoading: false })
            this.categoria = urlCategoria
        })
    }

    componentWillReceiveProps(newProps){
        if(newProps.match.params.urlCategoria){
            if(this.categoria !== newProps.match.params.urlCategoria){
                this.loadOrdens_de_servicos(newProps.match.params.urlCategoria)
            }
        }
    }

    render(){
        return(
            <div>
                <div className='breadcrumb'>
                    <h1>
                    Categoria: &nbsp; 
                    {this.props.match.params.urlCategoria}
                    </h1>
                </div>
                {
                    this.state.isLoading && <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                }
                {
                    !this.state.isLoading  && Object.keys(this.state.ordens_de_servicos).length === 0 && <p>Poxa ;( não temos produtos nessa categoria!</p>
                }
                <div className="row" >
                    {Object.keys(this.state.ordens_de_servicos).map( key => {
                        const ordem_de_servico= this.state.ordens_de_servicos[key]
                        return <PromocaoHome key={key} id={key} ordem_de_servico ={ordem_de_servico} />
                    })}
                </div>
                
            </div>
        )
    }
}
export default Categoria