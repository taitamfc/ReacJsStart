import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TouchList from './../../components/TodoList';
import { useLocation, useSearchParams } from 'react-router-dom';
import queryString from 'query-string';

ListPage.propTypes = {};

function ListPage(props) {
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

    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const [todoList, setTodoList] = useState(initTodoList);
    // const [filterStatus, setFilterStatus] = useState(() => {
    //     return searchParams.get('status') || 'all';
    //     const params = queryString.parse(location.search);
    //     return params.status || 'all';
    // });

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
        setSearchParams({ status: 'all' });
        // setFilterStatus('all');
    }
    const handleShowCompleted = () => {
        setSearchParams({ status: 'completed' });
        // setFilterStatus('completed');
    }
    const handleShowNew = () => {
        setSearchParams({ status: 'new' });
        // setFilterStatus('new');
    }

    const renderTodoList = todoList.filter(todo => {
        let theFilterStatus = searchParams.get('status');
        if (theFilterStatus == 'all') {
            return true;
        } else {
            return todo.status == theFilterStatus;
        }
    });

    return (
        <div>
            <h3>To Do List</h3>
            <TouchList todoList={renderTodoList} onTodoClick={handleTodoClick}></TouchList>
            <div>
                <button onClick={() => { setSearchParams({ status: 'all' }) }}>Show All</button>
                <button onClick={() => { setSearchParams({ status: 'completed' }) }}>Show Completed</button>
                <button onClick={() => { setSearchParams({ status: 'new' }) }}>Show New</button>
            </div>
        </div>
    );
}

export default ListPage;