import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";  
import LandingPage from "./LandingPage";
import Support from "./Support";

function App() {
  return (
    <div>
 <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Support" element={<Support />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
