import React, {Component} from 'react'
import PokemonItem from './PokemonItem.jsx'
import axios from 'axios'

class Pokemons extends Component{
    constructor(){
        super()
        this.state = {
            pokemonList: [],
            isLoaded: false,
        }
    }

    componentDidMount(){
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(response => {
                this.setState({
                    pokemonList: response.data.results,
                    isLoaded: true
                })
            })
            .catch(response => console.log(response))
    }

    render(){
        return(
            <div className="row">
                <div className="col-12">
                  
                     <div className="lds-facebook" style={this.state.isLoaded === false ? {display: 'block'} : { display: 'none'}}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="o-container">
                        {this.state.pokemonList.map(function(pokemonItem){
                            return <PokemonItem key={pokemonItem.name} pokemonData={pokemonItem} />
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Pokemons