'use strict';

import {Component} from 'react/cjs/react.production.min';

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
            const data = JSON.parse(e.data);
            if (data.event && data.event === this.props.listensTo) {
                this.onData(data.value);
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
