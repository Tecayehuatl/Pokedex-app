import React from 'react'
import ReactDOM from 'react-dom'
import Wrapper from './js/components/container/Wrapper.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/main.scss' 
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
    <Router>
        <Wrapper />
    </Router>, document.getElementById('app'));