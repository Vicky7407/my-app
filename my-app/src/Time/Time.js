import React, { Component } from 'react';

class Time extends Component {
    constructor(props) {
        super(props);
        //1.initailize value
        this.state = {
            time:new Date()
        }
    }
    tick = () => {
        this.setState({
            time:new Date()
        })
    }

    componentDidMount = () => {

        this.timeI=setInterval(() => this.tick(),1000);
    }
    componentDidUpdate = (prevprops,prevstate) => {
        if(this.state.time!== prevstate.time){
            console.log("componentDidUpdate")
        }
  
    }
    componentWillUnmount = () => {
        clearInterval (this.timeI)
    }
    
    render() {
        return (
            <div>
                <h1 text align ="center">{this.state.time.toLocaleTimeString()}</h1>
            </div>
        );
    }
}

export default Time;