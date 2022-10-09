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
        },
        {
            id: 2,
            title: 'Sleep',
        },
        {
            id: 3,
            title: 'Code',
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