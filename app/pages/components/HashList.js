'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import {SocketPullComponent, withSocket} from '../../../src/PupperComponents';

class HashList extends SocketPullComponent {
    onData(value) {
        this.props.onData(value);
    }

    render() {
        return <ul>{this.props.hashList.map((hash, key) => <li key={key}>{hash}</li>)}</ul>;
    }
}

HashList.propTypes = {
    onData: PropTypes.func.isRequired,
    hashList: PropTypes.array.isRequired,
};

export default withSocket(HashList)
