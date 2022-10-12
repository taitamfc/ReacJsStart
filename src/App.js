import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink, Navigate } from 'react-router-dom';

import './App.css';
import CHookFeature from './features/CHook';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';

import productApi from './api/productApi';

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit : 10
      }
      const productList = await productApi.getAll(params);
      console.log(productList);
    };
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <CHookFeature></CHookFeature>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <NavLink to="/todos">todos</NavLink>
        </li>
        <li>
          <NavLink to="/albums">albums</NavLink>
        </li>
      </ul>
      <Routes>
        {/* Redirect to other url */}
        <Route path="/home" element={<Navigate to="/todos/11" replace />} />

        <Route path="/" element={<h1>Home</h1>} />
        {/* Use for sub menus */}
        <Route path="/todos/*" element={<TodoFeature />} />
        <Route path="/albums" element={<AlbumFeature />} />
        {/* <Route path="*" element={<p>There's nothing here!</p>} /> */}
      </Routes>
    </div>
  );
}

export default App;
