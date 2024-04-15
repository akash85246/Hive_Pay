import React, { useEffect } from "react";

import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Landing from "./pages/landingPage/landing";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <Router>
      <React.Fragment>
        <ToastContainer>
          <Routes>
            <Route path="/" element={<Landing />} />    
          </Routes>
        </ToastContainer>
      </React.Fragment>
    </Router>
  );
}
