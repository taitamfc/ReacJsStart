import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
  Navigate
} from "react-router-dom";

import './App.css';
import CHookFeature from './features/CHook';
import TodoFeature from "./features/Todo";
import AlbumFeature from "./features/Album";

function App() {
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
        <Route
          path="/home"
          element={<Navigate to="/" replace />}
        />
        <Route path="/" element={<TodoFeature />}>  </Route>
        <Route path="/todos" element={<TodoFeature />} exact>  </Route>
        <Route path="/albums" element={<AlbumFeature />}>  </Route>
      </Routes>


    </div>
  );
}

export default App;
