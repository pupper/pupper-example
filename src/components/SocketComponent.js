'use strict';

import {Component} from 'react/cjs/react.production.min';

class SocketComponent extends Component {
    componentWillMount() {
        this.socket = this.props.socket;
    }

    componentWillUnmount() {
        this.socket = null;
    }
}

export default SocketComponent;
