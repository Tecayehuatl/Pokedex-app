import React, {Component} from 'react'

class Main extends Component {
    render(){
        return(
            <main className="container o-main">
                <div className="lds-facebook" >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="o-container">
                            <div className="card c-card">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Main