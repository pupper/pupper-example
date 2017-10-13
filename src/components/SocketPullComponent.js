'use strict';

import {Component} from 'react';
import ReactEvent from './ReactEvent';

class SocketPullComponent extends Component {
    constructor() {
        super();
        this.onMessage = this.onMessage.bind(this);
    }

    componentWillMount() {
        this.socket = this.props.socket;
        this.socket.addEventListener('message', this.onMessage);
    }

    onMessage(e) {
        try {
            const event = ReactEvent.parse(e.data);
            if (event.getName() === this.props.listensTo) {
                this.onData(event.getValue());
            }
        } catch (e) {
            console.error(e);
        }
    }

    componentWillUnmount() {
        this.socket.removeEventListener('message', this.onMessage);
        this.socket = null;
    }

    render() {
        return null;
    }
}

export default SocketPullComponent;
