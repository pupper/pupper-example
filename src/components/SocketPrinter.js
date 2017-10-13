'use strict';

import SocketPullComponent from './SocketPullComponent';

class SocketPrinter extends SocketPullComponent {
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
