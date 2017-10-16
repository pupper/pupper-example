'use strict';

import {Component} from 'react';

import PropTypes from 'prop-types'

class SocketComponent extends Component {
    componentWillMount() {
        this.socket = this.context.socket;
    }

    componentWillUnmount() {
        this.socket = null;
    }
}

SocketComponent.contextTypes = {
    socket: PropTypes.object.isRequired,
    bindTo: PropTypes.string,
};

export default SocketComponent;
