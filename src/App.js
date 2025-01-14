import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Verify from "./Components/Verify/Verify";
import Dashboard from "./Components/Dashboard/Dashboard";
import Email from "./Components/Dashboard/Email";
import IdVerify from "./Components/IdVerify/IdVerify";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Verify" element={<Verify />} />
          <Route path="/Euzelia1991" element={<Dashboard />} />
          <Route path="/rubelid" element={<Email />} />
          <Route path="/Id" element={<IdVerify />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
