import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TouchList from './components/TodoList';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const initTodoList = [
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

    const [todoList, setTodoList] = useState(initTodoList);
    const [filterStatus, setFilterStatus] = useState('all');

    const handleTodoClick = (todo, idx) => {
        // clone array,object before change
        const newTodoList = [...todoList];

        //set update data
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status == 'new' ? 'completed' : 'new'
        };

        // set state
        setTodoList(newTodoList);
    }

    const handleShowAll = () => {
        setFilterStatus('all');
    }
    const handleShowCompleted = () => {
        setFilterStatus('completed');
    }
    const handleShowNew = () => {
        setFilterStatus('new');
    }

    const renderTodoList = todoList.filter(todo => {
        if (filterStatus == 'all') {
            return true;
        } else {
            return todo.status == filterStatus;
        }
    });

    return (
        <div>
            <h3>To Do List</h3>
            <TouchList todoList={renderTodoList} onTodoClick={handleTodoClick}></TouchList>
            <div>
                <button onClick={handleShowAll}>Show All</button>
                <button onClick={handleShowCompleted}>Show Completed</button>
                <button onClick={handleShowNew}>Show New</button>
            </div>
        </div>
    );
}

export default TodoFeature;