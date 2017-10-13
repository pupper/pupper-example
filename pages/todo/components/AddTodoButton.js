'use strict';

import React from 'react';
import {SocketSubmit} from '../../../src/components/PupperComponents';

class AddTodoButton extends SocketSubmit {
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.onSubmit();
        this.props.onClick();
    }

    render() {
        return <button onClick={this.onClick}>Add222</button>
    }
}

export default AddTodoButton
