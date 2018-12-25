import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Wrapper from './js/components/container/Wrapper.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/main.scss' 
import api from '../api/index.js'

api.getPokemons((result)=> {
    console.log(result)
});

ReactDOM.render(<Wrapper />, document.getElementById('app'));