import { useState } from "react";
import reactLogo from "./assets/react.svg";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import viteLogo from "/vite.svg";
import HomePage from "./HomePage";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faGear,
  faHouse,
  faQrcode,
} from "@fortawesome/free-solid-svg-icons";
import Settings, { Scans } from "./Settings";
import Stats from "./Stats";
import TylenolDemo from "./TylenolDemo";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Define other Routes here */}
        <Route path="/settings" element={<Settings />} />
        <Route path="/settings/scans" element={<Scans />} />

        <Route path="/stats" element={<Stats />} />
        <Route path="/stats/tylenol" element={<TylenolDemo />} />
      </Routes>
      <nav className="fixed inset-x-0 bottom-0 bg-white  flex justify-center items-center h-12 text-[35pt] mb-[30px]">
        <AnimatePresence>
          {activeTab === "home" ? (
            <NavLink to={"/stats"} onClick={() => setActiveTab("stats")}>
              <FontAwesomeIcon icon={faChartSimple}></FontAwesomeIcon>
            </NavLink>
          ) : (
            <NavLink to={"/"} onClick={() => setActiveTab("home")}>
              <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
            </NavLink>
          )}
        </AnimatePresence>
      </nav>
    </Router>
  );
}

export default App;
