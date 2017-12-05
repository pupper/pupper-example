import {EventListener, withSocket} from '@pupper/pupper-react';

import PropTypes from 'prop-types';
import React from 'react';

class HashList extends EventListener {
    onData (value) {
        this.props.handleData(value);
    }

    render () {
        return <ul>
            {this.props.hashList.map((hash, key) => <li key={key}>
                {hash}
            </li>)}
        </ul>;
    }
}

HashList.propTypes = {
    handleData: PropTypes.func.isRequired,
    hashList: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default withSocket(HashList);
