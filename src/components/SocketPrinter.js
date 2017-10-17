'use strict';

import {SocketListener} from '../PupperComponents';

class SocketPrinter extends SocketListener {
    constructor() {
        super();
        this.state = {value: null};
    }

    onData(value) {
        this.setState({value});
    }

    render() {
        return this.state.value;
    }
}

export default SocketPrinter;
