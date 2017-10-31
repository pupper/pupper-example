import {HashRouter, Route} from 'react-router-dom';
import HashPage from './pages/HashPage';
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => <HashRouter>
    <Route component={HashPage} exact path="/" />
</HashRouter>;

ReactDOM.render(
    <App />,
    document.querySelector('#app')
);
