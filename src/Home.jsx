import React, {Component} from 'react'
import base from './base'

import HeaderHome from './HeaderHome'
import PromocaoHome from './PromocaoHome'
import AdsHome from './AdsHome'
import LinkCategoria from './LinkCategoria'


class Home extends Component{
    constructor(props){
        super(props)
    
        this.state = {
          ordens_de_servicos: []
        }
        base.bindToState('ordens_de_servicos',{
          context: this,
          state: 'ordens_de_servicos',
          queries:{
            limitToLast: 6
          }
        })
      }

    render() {
    let index = 0
    return (
        <div>
            <HeaderHome />
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="container">
                <h3>Categorias</h3>
                <div className="row">
                { this.props.categorias.map( (cat, indice) => {
                    return [
                            <LinkCategoria categoria={cat} key={indice} />,
                            ++index%8 === 0 && <div key={'c'+indice} className="w-200"></div>
                        ]
                })}
                </div>
                    <br/>
                    <br/>
                <h4>Ultimos Ordens de Serviços</h4>
                <div className="row">
                    { Object.keys(this.state.ordens_de_servicos).map( key => {
                      const ordem_de_servico = this.state.ordens_de_servicos[key]
                    return <PromocaoHome key={key} id={key} ordem_de_servico={ordem_de_servico} />
                    })}
                </div>
                </div>
        </div>
    )
    }
}
export default Home