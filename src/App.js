import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

// import Header from './components/Header';

function App() {
  return (
    <>
      <ToastContainer /> 
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
