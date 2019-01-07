import React, { Component } from 'react'
import Header from "../presentational/Header.jsx"
import Main from "../presentational/Main.jsx"
import Footer from "../presentational/Footer.jsx"

class Wrapper extends Component{

    render(){
        return(
            <div className="o-wrapper">
                <Header />
                <Main></Main>
                <Footer></Footer>                                 
            </div>
        )
    }
}

export default Wrapper