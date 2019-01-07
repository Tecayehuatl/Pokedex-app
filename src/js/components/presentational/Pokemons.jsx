import React, {Component} from 'react'
import api from '../../../../api/index'
import PokemonItem from './PokemonItem.jsx'

class Pokemons extends Component{
    constructor(){
        super()
        this.state = { 
            pokemonList: [],
            isLoaded: false
        }
    }
    
    componentDidMount(){
        /*
            Asynchronous function, it simulates a function that takes two seconds fetching data 
         */
        api.getPokemons((result)=> { 
            this.setState({
                pokemonList: result.results,
                isLoaded: true
            })
        })
    }

    render(){
        return(
            <div className="row">
                <div className="col-12">
                    {/* 
                        Hide this loading asset when api is done 
                    */}
                    <div className="lds-facebook" >
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