'use strict';

import React from 'react';

import {SocketDispatcher} from '../PupperComponents'
import PropTypes from 'prop-types'

class SocketSubmit extends SocketDispatcher {
    render() {
        return <button onClick={this.onSubmit}>Submit</button>
    }
}

SocketSubmit.propTypes = {
    bindTo: PropTypes.string,
    toSubmit: PropTypes.string,
};

export default SocketSubmit;
