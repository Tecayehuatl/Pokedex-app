import React, {Component} from 'react'
class PokemonCard extends Component{
    constructor(props){
        super(props)
        console.log(this.props.match.props) //aquó no viene nada  :( en PokemonItem.jsx en la línea 16 le mando datos harcodeados para ver si los recibo en props pero no me viene nada, rip
        this.state = {
            name: 'Aqí debería recibir los parámetros mandados'
        }
    }
    render(){
        return(
            <div>
                <h1>Pokemon Card View Template</h1>
                <h6>{this.state.name}</h6>
            </div>
        )
    }
}

export default PokemonCard