'use strict';

import {SocketListener} from '../PupperComponents';

class SocketLogger extends SocketListener {
    onData(value) {
        console.log(value);
    }
}

export default SocketLogger;
