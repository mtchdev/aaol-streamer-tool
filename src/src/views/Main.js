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
                <Countdown />
            </div>
         )
    }
}
 
export default Main;