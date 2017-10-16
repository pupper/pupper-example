'use strict';

import React from 'react';

import {ReactEvent, SocketComponent} from '../PupperComponents'
import PropTypes from 'prop-types'

class SocketSubmit extends SocketComponent {
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
        const bindTo = this.props.bindTo || this.context.bindTo;
        this.context.socket.send(
            new ReactEvent()
                .setName(bindTo)
                .setValue(this.props.toSubmit)
                .build()
        );
    }

    render() {
        return <button onClick={this.onSubmit}>Submit</button>
    }
}

SocketSubmit.propTypes = {
    bindTo: PropTypes.string,
    toSubmit: PropTypes.string,
};

export default SocketSubmit;
