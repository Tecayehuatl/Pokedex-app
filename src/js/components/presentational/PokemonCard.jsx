import React, {Component} from 'react'
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
        let types;
        if(this.state.types !== undefined) {
            types = this.state.types.map((type, index) => {
                return   <strong key={index}><span> {type.type.name}, </span></strong>
            })
        } else { types = `No se encontraron tipos de ${this.state.name}`}

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
                            <p>Número de habilidades de <em>{this.state.name}</em>: <strong>{this.state.abilitiesLength}</strong></p>
                            <p>Peso: <strong>{this.state.weight} Kg.</strong></p>
                            <p>Tipos: <span>{types}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PokemonCard