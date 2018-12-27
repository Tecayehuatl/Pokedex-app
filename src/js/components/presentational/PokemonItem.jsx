import React, { Component } from 'react'

class PokemonItem extends Component{
    render(){        
        const pokemonItem = this.props.pokemonItem;
        return(
            <div>
                <div className="card c-card">
                    <div className="card-body">
                        <h5 className="c-card-title card-title"><span className="bs bs-pushpin"></span> {pokemonItem.name}</h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href={pokemonItem.url} target="_blank" className="btn btn-primary">
                        <span className="bs bs-point-right"></span> Ver detalle...</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default PokemonItem