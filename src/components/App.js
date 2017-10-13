'use strict';

import React from 'react';
import {HashRouter, NavLink, Route} from 'react-router-dom';

import Todo from '../../pages/todo/todo';
import Main from '../../pages/main/main';

export default () => <HashRouter>
    <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/todo'>To-do app</NavLink>
        <Route exact path='/' component={Main}/>
        <Route exact path='/todo' component={Todo}/>
    </div>
</HashRouter>