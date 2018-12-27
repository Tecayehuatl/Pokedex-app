import React, {Component} from 'react'
import api from '../../../../api/index'
import PokemonItem from './PokemonItem.jsx'

class Main extends Component {  
    constructor(){
        //data()
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
            <main className="container o-main">
                <div className="lds-facebook" >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="o-container">
                            {this.state.pokemonList.map(function(pokemonItem){ return <PokemonItem   key={pokemonItem.name} pokemonItem={pokemonItem} /> })}
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Main