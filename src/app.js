import React, {Component} from 'react'
import ReactDOM from 'react-dom'

console.log('hello react !!!');

class App extends Component {
    constructor() {
        super();
        this.state = {toSend: 'nothing'};
        this.onMessage = this.onMessage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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
        console.log("message: " + e.data);
    }

    componentWillUnmount() {
        this.socket.removeEventListener(this.onMessage);
        this.socket = null;
    }

    render() {
        return <div>
            <input onChange={e => this.setState({toSend: e.target.value})}/>
            <button onClick={this.onSubmit}>Submit</button>
        </div>
    }

    onSubmit() {
        this.socket.send(this.state.toSend)
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#app')
);
