import React, { Component } from 'react'

class Footer extends Component {
    render(){
        return(
            <footer className="o-footer">
                <p className="o-footer__text">Enrique Tecayehuatl</p>
                <p className="o-footer__text"><a className="o-footer__link" href="https://github.com/tecayehuatl" target="_blank"><span className="bs bs-github"></span> Github</a></p>
                <p className="o-footer__text"><a className="o-footer__link" href="https://linkedin.com/in/enriquetecayehuatl" target="_blank"><span className="bs bs-linkedin"></span> Linkedin</a></p>
            </footer>
        )
    }
}

export default Footer