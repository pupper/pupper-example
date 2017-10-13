'use strict';

import React from 'react';

import {SocketComponent} from './PupperComponents'
import ReactEvent from './ReactEvent';

class SocketSubmit extends SocketComponent {
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
        this.socket.send(
            new ReactEvent()
                .setName(this.props.eventKey)
                .setValue(this.props.toSubmit)
                .build()
        );
    }

    render() {
        return <button onClick={this.onSubmit}>Submit</button>
    }
}

export default SocketSubmit;
