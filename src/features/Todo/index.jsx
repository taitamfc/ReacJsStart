import React from 'react';
import PropTypes from 'prop-types';
import TouchList from './components/TodoList';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const todoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new'
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed'
        },
        {
            id: 3,
            title: 'Code',
            status: 'new'
        }
    ];

    return (
        <div>
            <h3>To Do List</h3>
            <TouchList todoList={todoList}></TouchList>
        </div>
    );
}

export default TodoFeature;