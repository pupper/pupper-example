'use strict';

import React from 'react';
import PropTypes from 'prop-types'

import {EventDispatcher, withSocket} from '@pupper/pupper-react';

class HashForm extends EventDispatcher {
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
    }

    onClick(e) {
        e.preventDefault();
        this.onSubmit();
        this.props.onSubmit();
        this.textInput.focus();
    }

    onTextChange(e) {
        this.props.onTextChange(e.target.value);
    }

    render() {
        return <form onSubmit={this.onClick}>
            <input ref={input => this.textInput = input}
                   onChange={this.onTextChange}
                   value={this.props.textToHash}
                   type='text'/>
            <button onClick={this.onClick}>Hash with PHP</button>
        </form>
    }
}

HashForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onTextChange: PropTypes.func.isRequired,
    textToHash: PropTypes.string.isRequired,
};

export default withSocket(HashForm)
