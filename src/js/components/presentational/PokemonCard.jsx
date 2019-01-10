import React, {Component} from 'react'
//import {withRouter} from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

class PokemonCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: this.props.location.state.pokemonName.name,
            url: this.props.location.state.pokemonName.url,
            srcImage: '',
            abilitiesLength: 0,
            weight: 0,
            types: []
        }
    }
    componentDidMount(){
        axios.get(this.state.url)
            .then(response => {
                console.log(response.data)
                let data = response.data
                let srcNotPokemonImageFound = '../../../../assets/img/not-found.jpg'
                let srcImage = data.sprites.front_default !== undefined ? data.sprites.front_default :  srcNotPokemonImageFound
                
                this.setState({
                    abilitiesLength: data.abilities.length || 0,
                    weight: data.weight || 0,
                    types: data.types,
                    srcImage: srcImage
                })
            })
            .catch(response => {console.log(`Error ${response}`)})
    }
    render(){
        
        return(
            <div>
                <Link className="c-link" to="/"><span className="bs bs-home"></span> Regresar</Link>
                <hr/>
                <h1>Pokédex</h1>
                <div className="c-pokedex">
                    <div className="c-left-side">
                        <div className="c-left-header">
                            <div className="c-sensor"
                            ></div>
                        </div>
                        <div className="c-left-body">
                            <div className="c-main-screen">
                                <div className="c-main-screen__screen">
                                    <img className="c-main-screen__img" src={this.state.srcImage} />
                                </div>
                                <div className="c-poke-controls">
                                    <div className="c-poke-button"></div>
                                </div>
                            </div>
                        </div>
                        <div className="c-left-footer">
                            <div className="c-footer-controls">
                                <div className="c-poke-button c-poke-button--big c-poke-button--blue"></div>
                                <div className="c-cross-button">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="c-right-side">
                        <div className="c-reader">
                            <h2 className="u-capitalize"><span className="bs bs-info"></span> {this.state.name}</h2>
                            <p>Número de habilidades de {this.state.name}: {this.state.abilitiesLength}</p>
                            <p>Peso: {this.state.weight} Kg.</p>
                            {/* <p>Tipos: { this.state.types.map(item => <span>{item}</span>)}</p> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PokemonCard