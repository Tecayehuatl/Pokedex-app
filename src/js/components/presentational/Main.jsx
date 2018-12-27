import React, { Component } from 'react'
import Pokemons from './Pokemons.jsx'
import PokemonCard from './PokemonCard.jsx'
import { Switch, Route } from 'react-router-dom'

class Main extends Component {  
    render(){
        return(
            <main className="container o-main">
              <div>
                {/* <div className="lds-facebook" >
                    <div></div>
                    <div></div>
                    <div></div>
                </div> */}
                <Switch>
                    <Route path="/" component={ Pokemons } exact/>
                    <Route path="/PokemonCard" component={ PokemonCard }/>
                    {/* Error implementation */}
                </Switch>
              </div>
            </main>
        )
    }
}

export default Main