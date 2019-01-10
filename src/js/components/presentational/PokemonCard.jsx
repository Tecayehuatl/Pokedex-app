import React, {Component} from 'react'
//import {withRouter} from 'react-router-dom'
import axios from 'axios'

class PokemonCard extends Component{
    constructor(props){
        super(props)
        //console.log(this.props.location.state)
        this.state = {
            name: this.props.location.state.pokemonName.name,
            url: this.props.location.state.pokemonName.url
        }
    }
    componentDidMount(){
        axios.get(this.state.url)
            .then(response => {console.log(response.data)})
            .catch(response => {console.log(`Error ${response}`)})
    }
    render(){
        return(
            <div>
                
                {/* <h6>{this.state.url}</h6> */}

                {/* <div className="bs bs-point-right"></div>
                <div className="bs bs-plus"></div>
                <div className="bs bs-info"></div>
                <div className="bs bs-home"></div>
                 */}
                
                {/* <h1 className="card-title">{this.state.name}</h1>
                <div className="card-body">
                    <h5 className="c-card-title card-title"><span className="bs bs-pushpin"></span> - </h5>
                    
                    <p className="card-text">lorem.</p>

                </div> */}
                <div className="c-pokedex">
                    <div className="c-left-side">
                        <div className="c-left-header">
                            <div className="c-sensor"
                            ></div>
                        </div>
                        <div className="c-left-body">
                            <div className="c-main-screen">
                                <div className="c-main-screen__screen"></div>
                                <div className="c-poke-button"></div>
                            </div>
                        </div>
                        <div className="c-left-footer">
                            <div className="c-poke-button"></div>
                            <div className="c-poke-button"></div>
                        </div>
                    </div>
                    
                    <div className="c-right-side">
                        Right side
                    </div>
                </div>
            </div>
        )
    }
}

export default PokemonCard