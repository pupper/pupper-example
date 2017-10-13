'use strict';

import React, {Component} from 'react';

import {SocketLogger, SocketPrinter, SocketSubmit} from '../../src/components/PupperComponents';

const globalSocket = new WebSocket('ws://127.0.0.1:1337/ws');

class Main extends Component {
    constructor() {
        super();
        this.state = {toSend: 'nothing'};
    }

    render() {
        return <div>
            <strong><SocketPrinter socket={globalSocket} listensTo='tick'/></strong><br/>
            <strong><SocketLogger socket={globalSocket} listensTo='custom'/></strong><br/>
            <input onChange={e => this.setState({toSend: e.target.value})}/>
            <SocketSubmit socket={globalSocket} toSubmit={this.state.toSend}/>
        </div>
    }
}

export default Main
