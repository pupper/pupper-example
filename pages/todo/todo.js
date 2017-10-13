'use strict';

import React, {Component} from 'react';

import AddTodoButton from './components/AddTodoButton';
import TodoList from './components/TodoList';

const globalSocket = new WebSocket('ws://127.0.0.1:1337/ws');

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            todoText: '',
            latestTodoChangedKey: 0
        };
        this.onAddTodo = this.onAddTodo.bind(this);
        this.onPhpData = this.onPhpData.bind(this);
    }

    onPhpData(val) {
        const {todos, latestTodoChangedKey} = this.state;
        todos[latestTodoChangedKey] = val;
        this.setState({todos, latestTodoChangedKey: latestTodoChangedKey + 1});
    }

    onAddTodo() {
        const {todos, todoText} = this.state;
        todos.push(todoText);
        this.setState({todos});
    }

    render() {
        return <div>
            <input onChange={e => this.setState({todoText: e.target.value})} type='text'/>
            <AddTodoButton
                socket={globalSocket}
                onClick={this.onAddTodo}
                eventKey='todo'
                toSubmit={this.state.todoText}>
                Add
            </AddTodoButton>
            <TodoList todos={this.state.todos} socket={globalSocket} listensTo='todo' onPhpData={this.onPhpData}/>
        </div>
    }
}

export default Todo
