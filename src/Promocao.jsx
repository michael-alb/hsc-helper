import React, {Component} from 'react'
import axios from 'axios'

class Promocao extends Component{
    constructor(props){
        super(props)

        this.state = {
            ordem_de_servico: {},
            isLoading: true
        }

        const id = this.props.match.params.idPromocao
        const url = `https://hschelper-801df.firebaseio.com//ordens_de_servicos/${id}.json`
        axios
            .get(url)
            .then(data =>{
                this.setState({ ordem_de_servico: data.data, isLoading: false })
            })
    }
    render(){
        const ordem_de_servico = this.state.ordem_de_servico

        if(this.state.isLoading){
            return <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
        }

        return(
            <div>
                <h1>{ordem_de_servico.nome}</h1>
                <img src={ordem_de_servico.foto}/>
                <p>{ordem_de_servico.descricao}</p>
                <p className="small">{ordem_de_servico.fonecedor}</p>
            </div>
        )
}
}
export default Promocao