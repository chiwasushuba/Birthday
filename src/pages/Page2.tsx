import React, { useEffect, useState } from 'react';
import '../App.css';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Page2 = () => {
  useEffect(() => {
    document.title = "Surprise!";
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const fireConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
    });
  };

  const handleToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);

    if (newState) {
      fireConfetti();
    }
  };

  return (
    <div className="flex justify-center items-center relative">
      {/* Toggle Button */}
      <button
        onClick={handleToggle}
        className="absolute top-10 right-10 bg-pink-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-pink-600 transition"
      >
        {isOpen ? 'Hide Surprise' : 'Show Surprise'}
      </button>

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
          Click to see the surprise!!!
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-xl text-gray-800"
        >
          made by Josemel, Jamiel, Joshua
        </motion.p>
      </motion.div>

      {/* Surprise Section */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="surprise"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white p-8 rounded-xl shadow-lg text-center"
          >
            <iframe 
              width="853" 
              height="480" 
              src="https://www.youtube.com/embed/0SBNFf4reP8" 
              title="Mommy Jenny's 40th Birthday" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Next Page Button */}
      <Link to="/1">
        <button className="absolute bottom-10 right-10 bg-pink-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-pink-600 transition">
          <ArrowRight />
        </button>
      </Link>
    </div>
  );
};

export default Page2;
