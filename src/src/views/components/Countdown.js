import React, { Component } from 'react';
import { CLIENT_RENEG_WINDOW } from 'tls';

const Controller = require('../../controllers/Countdown');

class Countdown extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            time: '00:00',
            input: '00:00',
            interval: false,
            btn: 0,
            reset: 'Reset'
        }

        this.resetTimer = this.resetTimer.bind(this)
        this.timerChange = this.timerChange.bind(this)
        this.timerSave = this.timerSave.bind(this)
        this.tStart = this.tStart.bind(this)
    }

    render() { 
        return ( 
            <div className="col s12">
                <h1 className="title">Countdown</h1>
                <div className="description">Start, stop &amp; manage the countdown timer. The countdown will always output in an <i>00:00:00</i> format.
                <p>To add the timer in OBS, add a text source to the <b>countdown.txt</b> file located in the OBS Countdown directory.</p>
                </div>
                <hr />
                <br />
                <div class="input-field">
                    <input placeholder="" onChange={this.timerChange} value={this.state.input} id="first_name" type="time" class="validate"/>
                    <label for="first_name">Set Countdown</label>
                    <a class="waves-effect waves-light btn blue" onClick={this.timerSave}>Save</a>
                </div>
                <p><b>Current:</b> {this.state.time}</p>
                {this.state.btn === 0 ? <a class="waves-effect waves-light btn green" onClick={()=>this.tStart(1)}>Start</a> : ''}
                {this.state.btn === 1 ? <a class="waves-effect waves-light btn yellow text-black" onClick={()=>this.tStart(0)}>Pause</a> : ''}
                {this.state.btn === 2 ? <a class="waves-effect waves-light btn blue" onClick={()=>this.tStart(2)}>Play</a> : ''}
                <a class="waves-effect waves-light btn red" onClick={this.resetTimer}>{this.state.reset}</a>
                <a class="waves-effect waves-light btn">Open Folder</a>
            </div>
         )
    }

    resetTimer(){
        this.setState({interval:false,reset:'Resetting...'});
        let self = this
        setTimeout(function(){
            self.setState({...self.state,time: '00:00',input:'00:00',btn:0,reset:'Reset'})
        }, 1000)
    }

    timerChange(e){
        console.log('Countdown timer changed to '+e.target.value)
        this.setState({input:e.target.value})
    }

    timerSave(e){

        this.setState({...this.state,time:this.state.input})

        e.preventDefault();
    }

    tStart(mode){

        if(mode===0){
            this.setState({...this.state,interval:false,btn:2})
            return
        }
        if(mode===2){
            this.setState({...this.state,interval:true,btn:1})
            let self = this;
            let interval1 = setInterval(function(){
                let req = Controller.down('00:'+self.state.time)
                let time = req.slice(3,8)
                self.setState({time:time})
                console.log(req)
                if(req === '00:00:00'){
                    clearInterval(interval1)
                }
                if(self.state.interval === false){
                    clearInterval(interval1)
                }
            }, 1000)
            return;
        }

        let self = this;
        this.setState({...this.state,interval:true,btn:1})
        var interval = setInterval(function(){
            let req = Controller.down('00:'+self.state.time)
            let time = req.slice(3,8)
            self.setState({time:time})
            console.log(req)
            if(req === '00:00:00'){
                clearInterval(interval)
            }
            if(self.state.interval === false){
                clearInterval(interval)
            }
        }, 1000)
    }
}
 
export default Countdown;