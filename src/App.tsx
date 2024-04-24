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
  faQrcode,
} from "@fortawesome/free-solid-svg-icons";
import Settings from "./Settings";
import Stats from "./Stats";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Define other Routes here */}
        <Route path="/settings" element={<Settings />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
      <nav className="fixed inset-x-0 bottom-0 bg-white shadow-lg">
        <AnimatePresence>
          <div className="flex justify-evenly items-center bg-gray-300 relative bottom-10 h-[80px] w-[70%] mx-[15%]  shadow-lg rounded-[30px]">
            {/* Use NavLink for each button, motion.div for the animation */}
            {["stats", "", "settings"].map((item) => (
              <NavLink
                to={`/${item}`}
                key={item}
                className={({ isActive }) =>
                  `relative flex items-center justify-center w-12 h-12 ${
                    isActive ? "text-blue-600" : "text-black"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <div>
                        <motion.div
                          layoutId="highlight"
                          className="absolute inset-[-15px] bg-blue-300 h-[80px] w-[80px] rounded-lg"
                          initial={false}
                          animate={{ y: 0 }}
                        />
                        <motion.div
                          layoutId="highlightBar"
                          className="absolute inset-[-15px] bg-blue-500 h-[10px] mx-[10px] w-[60px] rounded-full "
                          initial={false}
                          animate={{ y: 0 }}
                        />
                      </div>
                    )}
                    {item === "stats" ? (
                      <div className="text-[20pt] z-10 relative">
                        <FontAwesomeIcon icon={faChartSimple} />
                      </div>
                    ) : item === "" ? (
                      <div className="text-[20pt]  z-10 relative">
                        <FontAwesomeIcon icon={faQrcode} />
                      </div>
                    ) : item === "settings" ? (
                      <div className="text-[20pt] z-10 relative">
                        <FontAwesomeIcon icon={faGear} />
                      </div>
                    ) : (
                      <span></span>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </AnimatePresence>
      </nav>
    </Router>
  );
}

export default App;
