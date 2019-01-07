import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//components
import Pokemons from './Pokemons.jsx'
import PokemonCard from './PokemonCard.jsx'
import ErrorPage from './Error.jsx'

class Main extends Component {  
    render(){
        return(
            <main className="container o-main">
              <div>
                <Router>
                    <Switch>
                        {/*  Routes registered, we can use them where we want */}
                        <Route path="/" component={ Pokemons } exact/>
                        <Route path="/pokemon-card" component={ PokemonCard }/>
                        <Route component={ ErrorPage } />
                    </Switch>
                </Router>
              </div>
            </main>
        )
    }
}

export default Main