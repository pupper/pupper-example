'use strict';

import SocketPullComponent from './SocketPullComponent';

class SocketLogger extends SocketPullComponent {
    onData(value) {
        console.log(value);
    }
}

export default SocketLogger;
