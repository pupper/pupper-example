'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';

import HashPage from './pages/HashPage';

const App = () => <HashRouter>
    <Route exact path='/' component={HashPage}/>
</HashRouter>;

ReactDOM.render(
    <App/>,
    document.querySelector('#app')
);
