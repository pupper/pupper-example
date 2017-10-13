import React, {Component} from 'react'

class Ticker extends Component {
    constructor() {
        super();
        this.state = {value: null};
        this.onMessage = this.onMessage.bind(this);
        this.onData = this.onData.bind(this);
    }

    onData(value) {
        this.setState({value});
    }

    componentWillMount() {
        this.socket = new WebSocket('ws://127.0.0.1:1337/ws');
        this.socket.addEventListener('message', this.onMessage);
    }

    onMessage(e) {
        try {
            const data = JSON.parse(e.data);
            if (data.event && data.event === this.props.listensTo) {
                this.onData(data.value);
            }
        } catch (e) {
            console.error(e);
        }
    }

    componentWillUnmount() {
        this.socket.removeEventListener(this.onMessage);
        this.socket = null;
    }

    render() {
        return <strong>{this.state.value}</strong>
    }
}

class ListenerComponent extends Component {
    constructor() {
        super();
        this.state = {
            toSend: 'nothing',
        };
        this.onMessage = this.onMessage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onCustom = this.onCustom.bind(this);
    }

    onCustom(value) {
        console.log(value);
    }

    componentWillMount() {
        this.socket = new WebSocket('ws://127.0.0.1:1337/ws');
        this.socket.addEventListener('message', this.onMessage);

        // DEBUG
        this.socket.addEventListener('open', () => {
            this.socket.send('hello world');
        });
    }

    onMessage(e) {
        try {
            const data = JSON.parse(e.data);
            if (data.event) {
                switch (data.event) {
                    case 'custom':
                        this.onCustom(data.value);
                        break;
                }
            }
        } catch (e) {
            console.error(e);
        }
    }

    componentWillUnmount() {
        this.socket.removeEventListener(this.onMessage);
        this.socket = null;
    }

    onSubmit() {
        this.socket.send(this.state.toSend)
    }

    render() {
        return <div>
            <Ticker listensTo='tick'/><br/>
            <input onChange={e => this.setState({toSend: e.target.value})}/>
            <button onClick={this.onSubmit}>Submit</button>
        </div>
    }
}

class App extends ListenerComponent {
}

export default App;
