import React from 'react'
import ReactDOM from 'react-dom'

console.log('hello react !!!');

const App = props => <div>{props.children}</div>;

ReactDOM.render(
    <App>contents</App>,
    document.querySelector('#app')
);