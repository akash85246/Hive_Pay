import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/landingPage/landing";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
}
