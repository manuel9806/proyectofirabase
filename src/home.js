import React, { Component } from 'react';
import fireb from './config/fireb';
import { sign } from 'crypto';

class home extends Component {
    constructor(props){
        super(props);
        this.logout=this.logout.bind(this);
    }

    logout(){
        fireb.auth().signOut();
    }
    
    render() {
        return (
            <div className="col-md-6">
                <h1> hola como estas</h1>
                <button onClick={this.logout}>salir</button>
            </div>
        );
    }
}
export default home;