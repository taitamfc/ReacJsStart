import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func
};

TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null
}

function TodoList(props) {
    const { todoList, onTodoClick } = props;
    const handleTodoClick = (todo, idx) => {
        if (onTodoClick) {
            onTodoClick(todo, idx);
        }
    }
    return (
        <>
            <ul>
                {todoList.map((todo, idx) => (
                    <li key={todo.id}
                        className={classnames({
                            'todo-item': true,
                            completed: todo.status == 'completed',
                            new: todo.status == 'new'
                        })}
                        onClick={() => handleTodoClick(todo, idx)}
                    > {todo.title} </li>
                ))}
            </ul>
        </>
    );
}

export default TodoList;