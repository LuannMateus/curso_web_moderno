import React, { Component } from 'react'

// Obs: O this sempre será usado para referenciar a class Saudacao.

// Criando a classe Saudacao herdando Component
export default class Saudacao extends Component {

    // Inicializando o state, passando os argumetnos (props).
    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }
    
    // Criando o constructor para inicializar as props.
    constructor(props) {
        // Herdando as props da classe super (Component)
        super(props)
        
        // Inicializando a função, travando o escopo para a classe usando o bind.
        this.setTipo = this.setTipo.bind(this)
    }

    // Função usada para mudar a view, usando o conceito do state.
    setTipo(e) {
        this.setState({ tipo: e.target.value })
    }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }

    // Função usando para enviar os elementos JSX.
    render() {
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..." 
                    value={tipo} onChange={this.setTipo} />
                <input type="text" placeholder="Nome..."
                    value={nome} onChange={e => this.setNome(e)} />
            </div>
        )
    }
}