import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class FormContainer extends Component{
    constructor(){
        super()
        this.state = {
            title: ''
        }
    }

    render(){
        return(
            <form id="article-form">
                <h1>Main view</h1>
            </form>
        )
    }
    
}

//ReactDOM.render(<FormContainer />, document.getElementById("app"))

export default FormContainer