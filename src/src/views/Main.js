import React, { Component } from 'react';
import './assets/Main.css';
import Countdown from './components/Countdown';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="row">
                <div className="col s4">
                    <h1 className="title">Teams</h1>
                </div>
                <Countdown />
                <div className="col s4">
                    <h1 className="title">Scores</h1>
                </div>
            </div>
         )
    }
}
 
export default Main;