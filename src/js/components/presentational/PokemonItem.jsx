import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PokemonItem extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const pokemonItem = this.props.pokemonData;

        return(
            <div className="card c-card">
                <div className="card-body">
                    <h5 className="c-card-title card-title"><span className="bs bs-pushpin"></span> {pokemonItem.name}</h5>
                    <p className="card-text">Si quieres saber mas sobre <b>{pokemonItem.name}</b>, lo único que tienes que hacer es dar click en el botón de abajo.</p>
                    <Link className="btn btn-primary" to={{pathname: '/pokemon-card', state: {pokemonName: pokemonItem}}} >
                    <span className="bs bs-point-right"></span>  Ver detalle...
                    </Link>
                </div>
            </div>
        )
    }
}
export default PokemonItem