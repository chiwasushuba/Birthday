import React, { useState } from 'react';
import './App.css';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';


const App = () => {

  return (
    <div className="flex justify-center items-center relative" style={{ fontFamily: "var(--font-dancing)" }}>

      {/* Main Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col bg-pink-100 h-screen w-screen p-10 items-center justify-center"
      >
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-[6rem] text-black font-bold text-center"
        >
          Happy Birthday
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-xl text-gray-800"
        >
          from Joshua, Jamiel, Josemel
        </motion.p>
      </motion.div>

      <Link to={"/1"}>
        <button
          className="absolute bottom-10 right-10 bg-pink-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-pink-600 transition"
        >
          <ArrowRight/>
        </button>
      </Link>
    </div>
  );
};

export default App;
