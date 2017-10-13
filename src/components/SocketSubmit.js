'use strict';

import SocketComponent from './SocketComponent'
import React from 'react/cjs/react.production.min';

class SocketSubmit extends SocketComponent {
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
        this.socket.send(this.props.toSubmit)
    }

    render() {
        return <button onClick={this.onSubmit}>Submit</button>
    }
}

export default SocketSubmit;
