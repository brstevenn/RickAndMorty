import Home from "./components/Home/Home";
import { SessionProvider } from "./components/SessionContext/SessionContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Favorites from "./components/Favorites/Favorites";
import ChangeMode from "./components/ChangeMode/ChangeMode";
import "./styles/global.module.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <SessionProvider>
      <Router>
        <ChangeMode />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </SessionProvider>
  );
}

export default App;
