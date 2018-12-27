import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from "../presentational/Header.jsx"
import Main from "../presentational/Main.jsx"
import Footer from "../presentational/Footer.jsx"

class Wrapper extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <Router>
                <div className="o-wrapper">
                    <Header />
                    <Main></Main>
                    <Footer></Footer>                    
                </div>
            </Router>
        )
    }
}

export default Wrapper