'use strict';

import {SocketPullComponent} from '../PupperComponents';

class SocketLogger extends SocketPullComponent {
    onData(value) {
        console.log(value);
    }
}

export default SocketLogger;
