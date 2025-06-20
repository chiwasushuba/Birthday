import React from 'react';
import '../App.css';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const images = [
  '/image0.JPEG',
  '/image1.jpg',
  '/image2.jpg',
  '/image3.jpg',
  '/image4.jpg',
  '/image5.jpg',
  '/image6.jpg',
  '/image7.jpg',
  '/image8.jpg',
  '/image9.jpg',
];

const Page1 = () => {
  return (
    <div className="bg-pink-100 min-h-screen w-full flex flex-col justify-between pl-20 pr-20">
      {/* Top Content */}
      <div className="max-w-4xl mx-auto w-full px-4 py-10">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-pink-700"
        >
          Happy Birthday, Mommy! 🎉
        </motion.h1>

        {/* Scrollable Images */}
        <div className="space-y-20 mt-10">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="rounded-xl shadow-lg overflow-hidden max-w-2xl mx-auto"
            >
              <img
                src={src}
                alt={`Memory ${index + 1}`}
                className="w-full h-auto object-cover rounded-xl"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Button */}
      <div className="w-full flex justify-end px-10 py-6">
        <Link to="/2">
          <button className="bg-pink-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-pink-600 transition">
            <ArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page1;
