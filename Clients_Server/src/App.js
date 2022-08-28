import React from "react";
import {Switch, Route, Link, Routes, Navigate} from "react-router-dom";
import StudentList from "./components/StudentsList";
import NewStudent from "./components/NewStudent";
import Student from "./components/Student"

function App() {
  
  return (
    <div className="App">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          Students Manager
          </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/"} className="nav-link">
              Students
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/new"} className="nav-link">
              New
            </Link>
          </li>
        </div>
      </nav>
      <div className="container mt-3">
        <Routes>
          <Route path={"/"} element={<StudentList />} />
          <Route path={"/new"} element={<NewStudent />} />
          <Route path={"/:id"} element={<Student />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
