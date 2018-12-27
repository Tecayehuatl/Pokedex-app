import React, { Component } from 'react'

class PokemonItem extends Component{
    render(){        
        const pokemonItem = this.props.pokemonItem;
        return(
            <div className="card c-card">
                <div className="card-body">
                    <h5 className="c-card-title card-title"><span className="bs bs-pushpin"></span> {pokemonItem.name}</h5>
                    <p className="card-text">Si quieres saber mas sobre <b>{pokemonItem.name}</b>, lo único que tienes que hacer es dar click en el botón de abajo.</p>
                    <a className="btn btn-primary" href={pokemonItem.url} target="_blank" >
                    <span className="bs bs-point-right"></span>  Ver detalle...</a>
                </div>
            </div>
        )
    }
}
export default PokemonItem