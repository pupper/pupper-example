import {EventDispatcher, withSocket} from '@pupper/pupper-react';

import PropTypes from 'prop-types';
import React from 'react';

class HashForm extends EventDispatcher {
    constructor () {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.setRef = this.setRef.bind(this);
    }

    handleClick (event) {
        event.preventDefault();
        this.onSubmit();
        this.props.handleSubmit();
        this.textInput.focus();
    }

    handleTextChange (event) {
        this.props.handleTextChange(event.target.value);
    }

    setRef (input) {
        this.textInput = input;
    }

    render () {
        return <form onSubmit={this.handleClick}>
            <input
                onChange={this.handleTextChange}
                ref={this.setRef}
                type="text"
                value={this.props.textToHash}
            />
            <button onClick={this.handleClick}>{'Hash with PHP'}</button>
        </form>;
    }
}

HashForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleTextChange: PropTypes.func.isRequired,
    textToHash: PropTypes.string.isRequired
};

export default withSocket(HashForm);
