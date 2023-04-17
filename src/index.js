import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import StudentLogin from './StudentLogin';
import Dashboard from "./Dashboard";
import CreateQuery from './CreateQuery';
import TeacherLogin from './TeacherLogin';
import TeacherDashboard from './TeacherDashboard';
import ResolveQuery from './ResolveQuery';
import StudentRegister from './StudentRegister';
import TeacherRegister from './TeacherRegister';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="StudentLogin" element={<StudentLogin />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="CreateQuery" element={<CreateQuery />} />
        <Route path="TeacherLogin" element={<TeacherLogin />} />
        <Route path="TeacherDashboard" element={<TeacherDashboard />} />
        <Route path="ResolveQuery" element={<ResolveQuery />} />
        <Route path="StudentRegister" element={<StudentRegister />} />
        <Route path="TeacherRegister" element={<TeacherRegister />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
