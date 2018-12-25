import React, { Component } from 'react'

class Footer extends Component {
    render(){
        return(
            <footer className="o-footer">
                <p className="o-footer__text">Enrique Tecayehuatl</p>
                <p className="o-footer__text"><a className="o-footer__link" href="https://github.com/tecayehuatl" target="_blank">Github</a></p>
                <p className="o-footer__text"><a className="o-footer__link" href="https://linkedin.com/in/enriquetecayehuatl" target="_blank">Linkedin</a></p>
            </footer>
        )
    }
}

export default Footer