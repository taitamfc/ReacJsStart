import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

TodoList.propTypes = {
    todoList: PropTypes.array
};

TodoList.defaultProps = {
    todoList: []
}

function TodoList(props) {
    const { todoList } = props;
    return (
        <ul>
            {todoList.map(todo => (
                <li key={todo.id}
                    className={classnames({
                        completed: todo.satus == 'completed',
                        new: todo.satus == 'new'
                    })}
                > {todo.title} </li>
            ))}
        </ul>
    );
}

export default TodoList;