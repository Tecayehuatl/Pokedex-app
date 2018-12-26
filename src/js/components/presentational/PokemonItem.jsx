import React, { Component } from 'react'

class PokemonItem extends Component{
    
     
    render(){
        const pokemonItem = this.props.pokemonItem;
        return(
            <div>
                <div className="card c-card">
                    <div className="card-body">
                        <h5 className="c-card-title card-title">{pokemonItem.name}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="{pokemon.url}" className="btn btn-primary">Ver detalle...</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default PokemonItem