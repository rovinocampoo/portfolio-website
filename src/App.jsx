import React from "react";
import { FaLaptopCode, FaPaintBrush, FaCamera, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto"
      >
        <header className="text-center py-10">
          <h1 className="text-4xl font-bold">Kharl Rovin Ocampo</h1>
          <p className="text-lg text-gray-400">Virtual Assistant | Web Developer | Graphic Designer | Photographer</p>
        </header>

        <section className="py-8">
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">About Me</h2>
          <p className="text-gray-300 mt-4">
            Detail-oriented and highly organized Tech Support with a strong background in administrative support and customer service.
            Certified Associate Cloud Engineer. Coffee Shop Owner, likes photography and running.
          </p>
        </section>

        <section className="py-8">
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">Skills & Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4 text-center">
            <div className="flex flex-col items-center">
              <FaLaptopCode size={40} className="text-blue-400" />
              <p className="mt-2">Web Development</p>
            </div>
            <div className="flex flex-col items-center">
              <FaPaintBrush size={40} className="text-yellow-400" />
              <p className="mt-2">Graphic Design</p>
            </div>
            <div className="flex flex-col items-center">
              <FaCamera size={40} className="text-red-400" />
              <p className="mt-2">Photography</p>
            </div>
            <div className="flex flex-col items-center">
              <FaEnvelope size={40} className="text-green-400" />
              <p className="mt-2">Virtual Assistance</p>
            </div>
          </div>
        </section>

        <section className="py-8">
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">Projects</h2>
          <p className="text-gray-400 mt-4">Projects will be added soon.</p>
        </section>

        <section className="py-8">
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">Contact</h2>
          <p className="text-gray-400 mt-4">Contact details will be added soon.</p>
        </section>
      </motion.div>
    </div>
  );
};

export default Portfolio;
