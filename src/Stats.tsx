// StatsPage.tsx
import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const medicationList = [
  "Tylenol",
  "Advil",
  "Lopressor",
  "Lipitor",
  "Lasix",
  "Heparin",
  "Ventolin",
  "Zofran",
  "Norvasc",
  "Tylenol",
  "Advil",
  "Lopressor",
  "Lipitor",
  "Lasix",
  "Heparin",
  "Ventolin",
  "Zofran",
  "Norvasc",
];

const Stats: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-white p-4">
      <h1 className="text-[35pt] font-bold text-left mb-4 mx-4">Stats</h1>
      <div className="h-[550px] overflow-y-auto mb-4">
        <ul className="divide-y divide-gray-300">
          {medicationList.map((medication, index) => (
            <NavLink
              to={`/stats/${medication.toLowerCase()}`}
              key={index}
              className="block"
            >
              <motion.li
                whileTap={{ scale: 0.95 }}
                className="flex justify-between items-center py-3 px-4"
              >
                <span className="text-lg">{medication}</span>
                <span className="text-gray-400 text-xl">&gt;</span>
              </motion.li>
            </NavLink>
          ))}
        </ul>
      </div>
      <div className=" bg-white py-2 px-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-blue-600 text-white py-3 rounded-full text-lg font-semibold shadow-lg"
        >
          Analyze
        </motion.button>
      </div>
    </div>
  );
};

export default Stats;
// Hello github copilot?




