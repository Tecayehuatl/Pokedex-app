import React, {Component} from 'react'
import api from '../../../../api/index'
import PokemonItem from './PokemonItem.jsx'

class Main extends Component {  
    constructor(){
        super()
        this.state = { pokemonList: []}
    } 

    componentDidMount(){
        /*
            Asynchronous function, it simulates a function that takes two seconds fetching data from an "API", check the ./api/indez file
         */
        api.getPokemons((result)=> { 
            this.setState({
                pokemonList: result.result
            })
        })
    }

    render(){
        /*
            trying to create an object array for rendering pokemon view, its undefined :(
         */
        //const pokemons = pokemonList.map((pokemon)=> <PokemonItem />)
        
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
                            {this.state.pokemonList.map(function(item){return <PokemonItem />})}
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Main