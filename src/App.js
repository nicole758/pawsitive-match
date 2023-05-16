import React from 'react'
import { Route, Routes } from "react-router-dom";
import CreateLogin from './components/CreateLogin/CreateLogin';
import Dashboard from './components/Dashboard/Dashboard';
import FavoritePage from './components/FavoritesPage/FavoritesPage';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/favorites/:id" element={<FavoritePage />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/createAccount" element={<CreateLogin />} />
      </Routes>
    </div>
  )
}

export default App
