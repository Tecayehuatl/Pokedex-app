import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Wrapper from './js/components/container/Wrapper.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/main.scss' 

ReactDOM.render(
    <Router>
        <Wrapper />
    </Router>
, document.getElementById('app'));