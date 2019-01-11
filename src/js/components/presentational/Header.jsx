import React, { Component }  from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render(){
        return(
            <header className="o-header">
                <div className="row">
                    <div className="col-12 col-sm-6">
                        {/*Image credit: https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png */}
                        <Link to="/"><img className="o-header__logo" src="../assets/img/pokemon-logo.png" alt="Buscador de Pokémon" /></Link>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header