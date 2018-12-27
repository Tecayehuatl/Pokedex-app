import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Wrapper from './js/components/container/Wrapper.jsx'
import PokemonCard from './js/components/presentational/PokemonCard.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/main.scss' 

ReactDOM.render(
    <Router>
        <div>
        <Switch>
            <Route path="/" component={ Wrapper } exact/>
            <Route path="/PokemonCard" component={ PokemonCard }/>
        </Switch>
        </div>
    </Router>
, document.getElementById('app'));