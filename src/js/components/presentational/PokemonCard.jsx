import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

class PokemonCard extends Component{
    constructor(props){
        super(props)
        console.log(this.props.location.state) //aquó no viene nada  :( en PokemonItem.jsx en la línea 16 le mando datos harcodeados para ver si los recibo en props pero no me viene nada, rip
        this.state = {
            name: JSON.stringify(this.props.location.state)
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