import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';

TodoFeature.propTypes = {

};

function TodoFeature(props) {


    return (
        <div>
            <h1>Todo Pages</h1>
            <Routes>
                <Route path='/todos' element={ListPage}></Route>
                <Route path='/todos/:todoId' element="{DetailPage}"></Route>
            </Routes>
        </div>
    );
}

export default TodoFeature;