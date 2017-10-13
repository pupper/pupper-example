'use strict';

import React, {Component} from 'react/cjs/react.production.min';

import SocketLogger from './SocketLogger';
import SocketPrinter from './SocketPrinter';
import SocketSubmit from './SocketSubmit';

const globalSocket = new WebSocket('ws://127.0.0.1:1337/ws');

class App extends Component {
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

export default App;
