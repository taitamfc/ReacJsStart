import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Outlet, Route, Routes } from 'react-router-dom';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    return (
        <div>
            <h1>Todo Pages</h1>
            <Routes>
                <Route index element={<ListPage />} exact />
                <Route path=':todoId' element={<DetailPage />} exact />
            </Routes>
        </div>
    );
}

export default TodoFeature;