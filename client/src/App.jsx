import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Loginpage/Login";
import Dashboard from "./pages/Dashboard";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ActiveDrones from "./pages/ActiveDrones";
import AllDrones from "./pages/AllDrones";
import FAQS from "./pages/FAQS";
import AboutUs from "./pages/AboutUs";
import TermsAndConditions from "./pages/TermsAndConditions";
import "react-toastify/dist/ReactToastify.css";
import DroneDetails from "./pages/DroneDetails";
import AddDrone from "./components/AllDrones/AddDrone";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Redirect to login by default */}
          <Route path="/" element={<Navigate to="/login" />} />
          {/* Login Route */}
          <Route path="/login" element={<Login />} />
          {/* Protected Route for Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ActiveDrones" element={ <ActiveDrones/> } />
          <Route path="/AllDrones" element={<AllDrones/>} />
          <Route path="/drone/:droneId" element={<DroneDetails />} />
          <Route path="/add-drone" element={<AddDrone />} />
          <Route path="/FAQs" element={<FAQS/>} />
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path="/termsconditions" element={<TermsAndConditions/>} />

        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}
export default App;
