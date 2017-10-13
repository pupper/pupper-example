'use strict';

import React from 'react';

import {SocketPullComponent} from '../../../src/components/PupperComponents';

class TodoList extends SocketPullComponent {
    onData(value) {
        this.props.onPhpData(value);
    }

    render() {
        return <ul>{this.props.todos.map((todo, key) => <li key={key}>{todo}</li>)}</ul>;
    }
}

export default TodoList
