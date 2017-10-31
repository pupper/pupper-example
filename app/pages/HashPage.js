import React, {Component} from 'react';

import HashForm from '../components/HashForm';
import HashList from '../components/HashList';

import {SocketProvider} from '@pupper/pupper-react';

const globalSocket = new WebSocket('ws://' + window.location.host + ':1337');

class HashPage extends Component {

    constructor () {
        super();
        this.state = {
            hashList: [],
            lastTextHashedKey: 0,
            textToHash: ''
        };
        this.onAddTextToHash = this.onAddTextToHash.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.onPhpData = this.onPhpData.bind(this);
    }

    onPhpData (hashedText) {
        const {hashList, lastTextHashedKey} = this.state;
        hashList[lastTextHashedKey] = hashedText;
        this.setState({
            hashList,
            lastTextHashedKey: lastTextHashedKey + 1
        });
    }

    onAddTextToHash () {
        const {hashList, textToHash} = this.state;
        hashList.push(textToHash);
    }

    onTextChange (textToHash) {
        this.setState({textToHash});
    }

    render () {

        return <div>

            <link href="../normalize.min.css" rel="stylesheet" />
            <link href="../style.css" rel="stylesheet" />

            <div id="logo-container">
                <img src="../pupper.png" />
            </div>

            <SocketProvider socket={globalSocket}>

                <HashForm
                    bindTo="text_sent"
                    handleSubmit={this.onAddTextToHash}
                    handleTextChange={this.onTextChange}
                    textToHash={this.state.textToHash}
                    toSubmit={this.state.textToHash}
                >Add</HashForm>

                <HashList bindTo="hash_sent" handleData={this.onPhpData} hashList={this.state.hashList} />

            </SocketProvider>

        </div>;
    }
}

export default HashPage;
