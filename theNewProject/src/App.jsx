import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import AddTransaction from "./pages/AddTransaction";
import EditTransaction from "./pages/EditTransaction";
import TransactionDetails from "./pages/TransactionDetails";

import './App.css'

function App() {
  

  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddTransaction />} />
        <Route path="/edit/:id" element={<EditTransaction />} />
        <Route path="/transaction/:id" element={<TransactionDetails />} />
      </Routes>
    </>
  )
}

export default App
