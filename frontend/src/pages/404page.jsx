// 404Page.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold text-gray-800"
        >
          404
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-4 text-2xl text-gray-600"
        >
         Whoa whoa whoa whoa whoa whoa Gobiye! Page Not Found
        </motion.p>
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6"
        >
          <Link to={"/"} className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600">
            Go Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
